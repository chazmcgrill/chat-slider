(function chatSlides() {
  let carousel = document.querySelectorAll('.chats');
  let c = [].slice.apply(carousel);

  (function owlChat(index) {
    let divs = Array.from(c[index].children);
    let count = 0;

    let cTimer = setInterval(function () {
      if (count === 4) {
        owlChat(index === 3 ? 0 : index + 1);
        clearInterval(cTimer);
      }

      divs.forEach((e, idx) => {
        e.style.display = count >= idx && count !== 4 ? 'block' : 'none';
      });

      count++;

    }, 1000);

  })(0);
})();