var labels = document.querySelectorAll('.contacts-form__label');
var inputs = document.querySelectorAll('.contacts-form__input');
var toggles = document.querySelectorAll('.portfolio__toggle');
var search = document.querySelector('.form-search__input');
var labelSearch = document.querySelector('.form-search__label');


var onInputChangeLabel = function (evt) {
  var target = evt.target;
  var targetLabel;

  switch (target.id) {
    case 'search':
      labelSearch.classList.add('visually-hidden');
      break;
    case 'name':
      targetLabel = labels[0];
      targetLabel.classList.add('contacts-form__label--active');
      targetLabel.textContent = 'Your\n Name';
      break;
    case 'email':
      targetLabel = labels[1];
      targetLabel.classList.add('contacts-form__label--active');
      targetLabel.textContent = 'Your\n Email';
      break;
    case 'message':
      targetLabel = labels[2];
      targetLabel.classList.add('contacts-form__label--active');
      targetLabel.textContent = 'Your\n Message';
      break;
  }
};

var onBlurChangeLabel = function (evt) {
  var target = evt.target;
  if (target.value === '') {
    var targetId = target.id;

    if (targetId === 'search') {
      labelSearch.classList.remove('visually-hidden');
    } else {
      for (var i = 0; i < labels.length; i++) {
        if (labels[i].htmlFor === targetId) {
          labels[i].classList.remove('contacts-form__label--active');
        }
      }
    }
  }
};

Array.from(inputs).forEach(function (it) {
  it.addEventListener('focus', onInputChangeLabel);
  it.addEventListener('blur', onBlurChangeLabel);
});

var onClickMakeActive = function (evt) {
  Array.from(toggles).forEach(function (it) {
    it.classList.remove('portfolio__toggle--active');
  });

  evt.target.classList.add('portfolio__toggle--active');
};

search.addEventListener('focus', onInputChangeLabel);
search.addEventListener('blur', onBlurChangeLabel);

Array.from(toggles).forEach(function (it) {
  it.addEventListener('click', onClickMakeActive);
  it.addEventListener('focus', onClickMakeActive);
});
