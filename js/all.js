window.onload = function () {
  var letter = document.querySelector(".callback-link");
  var popup = document.querySelector(".popup-general.letter");
  var closeButtons = document.querySelectorAll(".close-button");
  var popups = document.querySelectorAll(".popup-general");
  var form = document.querySelector(".letter-from-the-client");
  var submit = document.querySelector(".to-send");
  var map = document.querySelector(".map-link");
  var popupmap = document.querySelector(".popup-general.map-section");
  var email = popup.querySelector("input[name='e-mail']");
  var letter = popup.querySelector("textarea");

  var serviceLi = document.querySelectorAll(".service-active");
  var serviceParameter = document.querySelectorAll(".JScheked");

  var nextArr = document.querySelector(".right-arrow");
  var previousArr = document.querySelector(".left-arrow");
  var drills =  document.querySelector(".drills-drills");
  var perf =  document.querySelector(".drills-perf");
  var currentSlide = document.querySelectorAll(".dot");

  letter.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("pop-up-show");
    var name = popup.querySelector("input[name='name']");
    name.focus();
  } );

  map.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupmap.classList.add("pop-up-show");
  } );

  popups.forEach(function (popup) {
    closeBtn = popup.querySelector(".close-button");
    closeBtn.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.remove("pop-up-show");
      popup.classList.remove("modal-error");
    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("pop-up-show")) {
          popup.classList.remove("pop-up-show");
          popup.classList.remove("modal-error");
        }
      }
    });

  });

  form.addEventListener("submit", function (evt) {
    if (!name.value || !email.value || !letter.value) {
      evt.preventDefault();
      popup.classList.add("modal-error");
      console.log("Нужно ввести данные");
    }
  } );

  serviceLi[0].classList.add("selected");
  serviceParameter[0].classList.add("active");

    for (var i=0; i<serviceLi.length; i++) {
      serviceLi[i].addEventListener("click",
      (function (Index) {
        return function (evt) {
          evt.preventDefault();
          for (var i=0; i<serviceLi.length; i++) {
            serviceParameter[i].classList.remove("active");
            serviceLi[i].classList.remove("selected");
          }
          serviceParameter[Index].classList.add("active");
          serviceLi[Index].classList.add("selected");
        }
      })(i));
    }

  var currentSlide;
  var slideIndex = 1;
    showSlides(slideIndex);

    nextArr.addEventListener("click", function (){
      showSlides = slideIndex += 1;
    });
  previousArr.addEventListener("click", function (){
      showSlides = slideIndex -= 1;
    });

    function currentSlide() {
      showSlides = slideIndex;
    }

    function showSlides(slideIndex) {
      var i;
      var slides = document.querySelectorAll('mySlides');
      var dots = document.querySelectorAll('dot');

      if (slideIndex > slides.length) {
        slideIndex = 1
      }
      if (slideIndex < 1) {
        slideIndex = slides.length
      }
      for (i=0; i < slides.length; i++){
        slides[i].classList.add("drills-perf-click");
      }
      for (i=0; i < dots.length; i++) {
        dots[i].className= dots[i].className.replace("active","");
      }
      slides[slideIndex-1].classList.add(".drills-perf-click");
      dots[slideIndex-1].classList.add("dotSelected");

    }
    debugger;
};
