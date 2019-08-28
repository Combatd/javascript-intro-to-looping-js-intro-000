function forLoop(array) {
  
  for (let i = 0; i < 25; i++) {
    var ele = array[i];
    ele = `"I am ${i} strange loop${i === 0 ? '' : 's'}."`
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