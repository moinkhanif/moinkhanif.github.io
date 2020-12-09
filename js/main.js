document.querySelectorAll('.main-nav a').forEach((e)=>{
  e.addEventListener('click', (e)=> {
    let node;
    if(e.target.getAttribute('href')) {
      node = e.target;
    } else {
      node = e.target.parentNode;
    }
    if (node.getAttribute('href').charAt(0) === '#') {
      e.preventDefault();
      const item = e.target.innerHTML.toLowerCase()
      const menu = `#${item}`
      document.querySelector(menu).scrollIntoView({
        behavior: 'smooth',
      });
    }
  })
})