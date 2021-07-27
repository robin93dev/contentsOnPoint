const red = () => {
  document.body.style.backgroundColor = ' rgb(83, 22, 83)';
  setTimeout(plum, 5000);
 }

 const plum = () => {
  document.body.style.backgroundColor = 'plum';
  setTimeout(red, 5000);
 }

 setTimeout(red, 3000);


