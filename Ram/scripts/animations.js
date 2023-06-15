function toggleStar(star) {
    if (star.classList.contains('bi-star')) {
      star.classList.remove('bi-star');
      star.classList.add('bi-star-fill', 'text-warning');
    } else {
      star.classList.remove('bi-star-fill', 'text-warning');
      star.classList.add('bi-star');
    }
  }