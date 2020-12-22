"use strict";

var heart = document.querySelector('.like-number-button');
var likesNumber = document.querySelector('.like-number');

heart.onclick = function () {
  if (heart.classList.contains('added')) {
    likesNumber.textContent--;
  } else {
    likesNumber.textContent++;
  }

  heart.classList.toggle('added');
};