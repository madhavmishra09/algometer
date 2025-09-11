import App from './src/App.jsx';
export function analyzeCode(inputCode) {
  let timeComplexity = "O(1)";
  let spaceComplexity = "O(1)";
  const forMatches = inputCode.match(/\bfor\b/g) || [];
  const whileMatcher=inputCode.match(/\bwhile\b/g) || [];
  const countLoops= forMatches.length + whileMatcher.length;
  const loploopPattern=/(\bfor\b|\bwhile\b)[^{]*({[^}]*?(i\s*[\*\/]=\s*2|i\s*=\s*i\s*[\*\/]\s*2)[^}]*})/g;
  const hasLogLoop=logLoopPattern.test(inputCode);
  if(hasLogLoop){
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
    } else if(hasArray || hasLinkedList || hasStack || hasQueue){    
        spaceComplexity="O(n)";
    }
    return { timeComplexity, spaceComplexity };
}