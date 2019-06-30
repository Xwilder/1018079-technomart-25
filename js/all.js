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

  var serviceA = document.querySelectorAll(".serv");
  var serviceLi = document.querySelectorAll(".service-active");
  var serviceParameter = document.querySelectorAll(".JScheked");


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

  serviceParameter[0].classList.add("active");

    for (var i=0; i<serviceLi.length; i++) {
      serviceLi[i].addEventListener("click",
      (function (Index) {
        return function (evt) {
          evt.preventDefault();
          for (var i=0; i<serviceLi.length; i++) {
            serviceParameter[i].classList.remove("active");
            serviceLi[i].classList.remove("selected");
            serviceA[i].classList.remove("sel");
          }
          serviceParameter[Index].classList.add("active");
          serviceLi[Index].classList.add("selected");
          serviceA[Index].classList.add("sel");
        }
      })(i));
    }
};
