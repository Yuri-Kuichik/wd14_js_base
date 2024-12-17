
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
}

const countryCodeElement = document.getElementById('countryCode');
const countrySelectElement = document.getElementById('countrySelect');
const phoneNumberElement = document.getElementById('phoneNumber');

const codesCountrties = [
  {
    BY: '+375',
    iso: '112',
    name: 'Belarus',
    code: '+375',
  },

  {
    GE: '',
    iso: '268',
    name: 'Georgia',
    code: '+995',
  },
  {
    KZ: '',
    iso: '398',
    name: 'Kazakhstan',
    code: '+997',
  },
  {
    RU: '',
    iso: '643',
    name: 'Russia',
    code: '+7',
  }
]

codesCountrties.forEach(country => {
  const option = document.createElement('option');
  option.value = country.code;
  option.textContent = `${country.name} (${country.code})`;
  countrySelectElement.appendChild(option);
});

let currentCountryCode = countrySelectElement.value;
countryCodeElement.innerText = currentCountryCode;
phoneNumberElement.value = currentCountryCode;
phoneNumberElement.setSelectionRange(phoneNumberElement.value.length, phoneNumberElement.value.length);

countrySelectElement.addEventListener('change', function() {
  currentCountryCode = countrySelectElement.value;
  countryCodeElement.innerText = currentCountryCode;
  phoneNumberElement.value = currentCountryCode;
  phoneNumberElement.setSelectionRange(phoneNumberElement.value.length, phoneNumberElement.value.length);
});

phoneNumberElement.addEventListener('input', function() {
  const currentValue = phoneNumberElement.value;

  if (!currentValue.startsWith(currentCountryCode)) {
    phoneNumberElement.value = currentCountryCode;
  } else {
    const numberPart = currentValue.slice(currentCountryCode.length);
    phoneNumberElement.value = currentCountryCode + numberPart;
    phoneNumberElement.setSelectionRange(phoneNumberElement.value.length, phoneNumberElement.value.length);
  }

  countryCodeElement.innerText = phoneNumberElement.value;
});
