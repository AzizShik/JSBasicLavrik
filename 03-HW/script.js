window.addEventListener('load', () => {
  const upEl = document.querySelector('.up');
  const upBtn = document.querySelector('.up__button');
  const navList = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links a');
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(onScroll, 200);
  });

  function onScroll() {
    console.log('111');
    
    if (window.pageYOffset >= window.innerHeight) {
      upEl.classList.remove('hide');
    } else {
      upEl.classList.add('hide');
    }


    for (let i = navLinks.length - 1; i >= 0; i--) {

      let link = navLinks[i];
      let target = document.querySelector(link.hash);

      if ((window.pageYOffset + window.innerHeight / 2) > target.offsetTop) {
        navLinks.forEach(item => item.classList.remove('active'));
        link.classList.add('active');
        break;
      }
    }
  }


  upBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  });


  navList.addEventListener('click', (e) => {
    e.preventDefault();
    const el = e.target;

    if (el.tagName.toLowerCase() === 'a') {
      const anchor = document.querySelector(el.hash);
      navLinks.forEach(item => item.classList.remove('active'));
      el.classList.add('active');
      window.scrollTo({
        behavior: "smooth",
        top: anchor.offsetTop - 60,
      });
    }

  });

});