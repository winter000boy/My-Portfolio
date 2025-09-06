$(document).ready(function () {
  $(".navbar .nav-link").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault(); // moved inside condition

      const hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 700, function () {
        window.location.hash = hash;
      });
    }
  });
});

// Download Resume
document.addEventListener('click', function (event) {
  if (event.target.matches('.download-cv-btn')) {
    downloadCV();
  }
});

function downloadCV() {
  const cvUrl = '/assets/resume/My Resume.pdf';
  const link = document.createElement('a');
  link.href = cvUrl;
  link.download = 'Durgesh_Sharma_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Portfolio filters
$(window).on("load", function () {
  const portfolioContainer = $(".portfolio-container");
  if (portfolioContainer.length) {
    portfolioContainer.isotope({
      filter: ".new",
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false
      }
    });

    $(".filters a").click(function () {
      $(".filters .active").removeClass("active");
      $(this).addClass("active");
      const filter = $(this).attr("data-filter");
      portfolioContainer.isotope({
        filter: filter,
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false
        }
      });
      return false;
    });
  }
});
