window.addEventListener('load', () => {
  const faq = document.querySelector('.faq');
  const faqQuestItems = document.querySelectorAll('.faq__item-quest');


  faq.addEventListener('click', e => {

    if (e.target.classList.contains('faq__item-quest')) {
      const faqItem = e.target.parentNode.querySelector('.faq__item-answer');
      console.log('1');
      if (faqItem.classList.contains('faq__item-answer--active')) {

        let anim = faqItem.animate([{
            opacity: 1,
            transform: 'translateX(0%)'
          },
          {
            opacity: 0,
            transform: 'translateX(50%)'
          }
        ], {
          duration: 500
        });

        anim.addEventListener('finish', () => {
          faqItem.classList.remove('faq__item-answer--active');
        });

      } else {
        faqItem.classList.add('faq__item-answer--active');
      }

    }

  });

});