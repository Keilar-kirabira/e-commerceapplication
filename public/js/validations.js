// validations.js
(() => {
  'use strict';

  const form = document.getElementById('productForm');
  const resetBtn = form.querySelector('button[type="reset"]');

  form.addEventListener('submit', (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add('was-validated');
  }, false);

  // Clear validation styles when CLEAR is clicked
  resetBtn.addEventListener('click', () => {
    form.classList.remove('was-validated');
  });
})();
