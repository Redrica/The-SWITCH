var labels = document.querySelectorAll('.contacts-form__label');
var inputs = document.querySelectorAll('.contacts-form__input');

var onInputMoveLabel = function (evt) {
  var target = evt.target;
  var targetLabel;

  switch (target.id) {
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

var onBlurMoveLabel = function (evt) {
  var target = evt.target;
  if (target.value === '') {
    var targetId = target.id;

    for (var i = 0; i < labels.length; i++) {
      if (labels[i].htmlFor === targetId) {
        labels[i].classList.remove('contacts-form__label--active');
      }
    }
  }
};

Array.from(inputs).forEach(function (it) {
  it.addEventListener('focus', onInputMoveLabel);
  it.addEventListener('blur', onBlurMoveLabel);
});
