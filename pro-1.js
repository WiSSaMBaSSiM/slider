
function effect(card) {
    // Reset the width of all cards
    document.querySelectorAll('.card').forEach(function (c) {
      c.style.width = '100px';
      c.classList.remove('zoomed');


    });
      card.style.width = '500px';
      card.classList.add('zoomed');
  }
  