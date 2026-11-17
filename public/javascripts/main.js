document.addEventListener('DOMContentLoaded', function () {
  var year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function () {
      var button = form.querySelector('button[type="submit"]');
      button.disabled = true;
      button.textContent = 'Sending...';
    });
  }
});
