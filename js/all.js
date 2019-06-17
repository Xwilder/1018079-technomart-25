window.onload = function () {
  var letter = document.querySelector(".callback-link");
  var popup = document.querySelector(".popup-general.letter");
  var closeButtons = document.querySelectorAll(".close-button");
  var popups = document.querySelectorAll(".popup-general");
  var form = document.querySelector(".letter-from-the-client");
  var submit = document.querySelector(".to-send");
  var map = document.querySelector(".map-link");
  var popupmap = document.querySelector(".popup-general.map-section");

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
    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("pop-up-show")) {
          popup.classList.remove("pop-up-show");
        }
      }
    });

  });

  form.addEventListener("submit", function (evt) {
    if (!name.value || !email.value || !letter.value) {
      evt.preventDefault();
      console.log("Нужно ввести данные");
    }
  } );

  submit.addEventListener('click', function(){
    form.submit();
  });

};
