window.addEventListener('DOMContentLoaded', function () {
  const diamond = document.querySelector('#diamond'),
        diamondContainer = document.querySelector('.container');

  diamond.addEventListener('mouseenter', function (e) {
    diamondContainer.classList.add('_active');
  });

  diamond.addEventListener('mouseleave', function (e) {
    diamondContainer.classList.remove('_active');
  });


  //text animation
  
  function animation() {
    const diamondTextEl = document.querySelector('#diamond-text'),
          diamondContent = ['1', '2', '3', 'GO!'];

    const time = {
      default: 500,
      long: 1500
    }

    let currentTime = time.default;
    let ptr = 0;

    function textChange() {
      diamondTextEl.textContent = diamondContent[ptr];
      ptr++;

      if (ptr > diamondContent.length - 1) {
        ptr = 0;
        currentTime = time.long;
      } else {
        currentTime = time.default;
      }

      setTimeout(textChange, currentTime);
    };

    textChange();
  }

  animation();
});