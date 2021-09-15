const nav = document.querySelector("#main");
const topOfNav = nav.offsetTop

const beSticky = () => {
  if(scrollY >= topOfNav) {
    nav.classList.add('stick');
    document.body.style.paddingTop = nav.offsetHeight + 'px';
  } else {
    nav.classList.remove('stick');
    document.body.style.paddingTop = 0;
  }
};

window.addEventListener('scroll', beSticky);
