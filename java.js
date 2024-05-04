// keep track of previous scroll position
let prevScrollPos = window.scrollY;
console.log(prevScrollPos)
window.addEventListener('scroll', function() {
  // current scroll position
  const currentScrollPos = window.scrollY;
  console.log(currentScrollPos) 
  if (prevScrollPos > currentScrollPos) {
    // user has scrolled up
    document.querySelector('.header__navbar').classList.add('show');
  } else {
    // user has scrolled down
    document.querySelector('.header__navbar').classList.remove('show');
  }

  // update previous scroll position
  prevScrollPos = currentScrollPos;
  console.log(prevScrollPos)
});