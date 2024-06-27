let currentSlide = 0;
  
    function showSlide(index) {
      const slides = document.querySelector('.slides');
      const totalSlides = document.querySelectorAll('.slide').length;
  
      if (index >= totalSlides) {
        currentSlide = 0;
      } else if (index < 0) {
        currentSlide = totalSlides - 1;
      } else {
        currentSlide = index;
      }
  
      const newTransformValue = -currentSlide * 100 + '%';
      slides.style.transform = 'translateX(' + newTransformValue + ')';
    }
  
    function prevSlide() {
      showSlide(currentSlide - 1);
    }
  
    function nextSlide() {
      showSlide(currentSlide + 1);
    }