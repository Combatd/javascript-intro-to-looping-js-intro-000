function forLoop(array) {
  
  for (let i = 0; i < 25; i++) {
    var ele = array[i];
    if (i == 1) { 
        ele = `I am 1 strange loop.`;
      } else {
        ele = `I am ${i} strange loop.`;
      }
  }
    
  return array;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n);
    n -= 1
  }
  return "done";
}

function incrementVariable() {
  i = i + 1;
  return i;
}
 
function doWhileLoop(num) {
 i = 0;
 do { console.log('I run once regardless.');
   
} while (incrementVariable() < num)

}