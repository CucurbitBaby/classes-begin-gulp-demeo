let a = 12;
let b = 5;

alert(a+b);


(()=> {
  let c = 55;
  let d = 'test';
  // div.style.backgournd = 'green'; // 通过编译，error 
  alert(c);
  alert(d)

})()