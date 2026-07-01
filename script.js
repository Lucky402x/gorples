function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove('show'), 2400);
}

document.getElementById('buyBtn').addEventListener('click', () => {
  showToast('GORPLES hasn\'t launched yet — follow our socials for the drop!');
});

document.getElementById('copyCaBtn').addEventListener('click', () => {
  showToast('No contract address yet. Check back at launch!');
});

document.querySelectorAll('.social-btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (btn.getAttribute('href') === '#') {
      e.preventDefault();
      showToast('Social links go live at launch!');
    }
  });
});
