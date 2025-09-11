export function analyzeCode(inputCode) {
  let timeComplexity = "O(1)";
  let spaceComplexity = "O(1)";
  const forMatches = inputCode.match(/\bfor\b/g) || [];
  const whileMatcher=inputCode.match(/\bwhile\b/g) || [];
  const countLoops= forMatches.length + whileMatcher.length;
  const logLoopPattern=/(\bfor\b|\bwhile\b)[^{]*({[^}]*?(i\s*[\*\/]=\s*2|i\s*=\s*i\s*[\*\/]\s*2)[^}]*})/g;
  const hasLogLoop=logLoopPattern.test(inputCode);
  // Binary search detection
  const binarySearchPattern = /while\s*\(.*(left\s*<=\s*right|start\s*<=\s*end).*\)\s*{[\s\S]*?(left\s*=\s*mid\s*\+\s*1|right\s*=\s*mid\s*-\s*1)/;
  if (binarySearchPattern.test(inputCode)) {
    timeComplexity = "O(log n)";
  } else if(hasLogLoop){
    timeComplexity="O(log n)";
  }
  else if(countLoops===1){
    timeComplexity="O(n)";
  }
  else if(countLoops===2){
    timeComplexity="O(n^2)";
  }
  else if(countLoops>=3){
    timeComplexity=`O(n^${countLoops})`;
  }

  // Recursion detection
  const functionRegex = /function\s+(\w+)\s*\(([^)]*)\)\s*{([\s\S]*?)}/g;
  let recursionDetected = false;
  let multipleRecursion = false;
  let match;
  while ((match = functionRegex.exec(inputCode)) !== null) {
    const funcName = match[1];
    const funcBody = match[3];
    const selfCalls = funcBody.match(new RegExp(`\\b${funcName}\\b`, 'g')) || [];
    if (selfCalls.length > 0) {
      recursionDetected = true;
      if (selfCalls.length > 1) multipleRecursion = true;
    }
  }
  if (recursionDetected) {
    timeComplexity = multipleRecursion ? "O(2^n)" : "O(n)";
  }
    const arrayPattern=/new\s+Array|\[[^\]]*\]/g;
    const hasArray=arrayPattern.test(inputCode);
    const nestedArrayPattern=/\[\s*\[.*\]\s*\]/g;
    const hasNestedArray=nestedArrayPattern.test(inputCode);
        const hasLinkedList=/LinkedList|ListNode|class\s+Node/.test(inputCode); 
        const hasStack=/Stack|stack\s*=\s*\[|\.\s*push\(|\.pop\(/.test(inputCode);
        const hasQueue=/Queue|queue\s*=\s*\[|\.enqueue\(|\.dequeue\(|\.shift\(/.test(inputCode);
        const hasString=/(['"`][^'"`]*['"`])|String|\.split\(|\.join\(/.test(inputCode);
    if(hasNestedArray){
      spaceComplexity="O(n^2)";
    } else if(hasArray || hasLinkedList || hasStack || hasQueue || hasString){    
        spaceComplexity="O(n)";
    }
    return { timeComplexity, spaceComplexity };
}