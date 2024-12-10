
const userData = {
  firstName: 'Donald',
  lastName: 'Trump',
  age: 78,
}

// start user initials
function getUserInitials(data) {
  return data.firstName.charAt(0) + data.lastName.charAt(0)
}

function setUserInitials() {
  document.querySelector('.header-section__user').innerText = getUserInitials(userData)
}
setUserInitials();
// end user initials

const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('myModal');
const saveBtn = document.getElementById('saveBtn');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');

openModalBtn.onclick = function() {
  modal.style.display = "block";
  firstNameInput.value = userData.firstName;
  lastNameInput.value = userData.lastName;
}

saveBtn.onclick = function() {
  userData.firstName = firstNameInput.value;
  userData.lastName = lastNameInput.value;

  setUserInitials();

  firstNameInput.value = '';
  lastNameInput.value = '';
  phoneNumberElement.value = '';
}

const countryCodeElement = document.getElementById('countryCode');
const countrySelectElement = document.getElementById('countrySelect');
const phoneNumberElement = document.getElementById('phoneNumber');

countrySelectElement.addEventListener('change', function() {
  const selectedCode = countrySelectElement.value;
  countryCodeElement.innerText = selectedCode;
  phoneNumberElement.value = '';
});

phoneNumberElement.addEventListener('focus', function() {
  const prefix = countryCodeElement.innerText;
  const currentValue = phoneNumberElement.value;

  if (!currentValue.startsWith(prefix)) {
    phoneNumberElement.value = '';
  }
});

phoneNumberElement.addEventListener('input', function() {
  const prefix = countryCodeElement.innerText;
  const inputValue = phoneNumberElement.value.replace(/^(\+?\d*)/, '');

  if (!phoneNumberElement.value.startsWith(prefix)) {
    phoneNumberElement.value = prefix + inputValue;
  }
});
