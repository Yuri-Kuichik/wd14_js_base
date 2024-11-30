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


let selectedCountryISO = '';

function addSelectListCountries() {
  const selectElement = document.querySelector('#country-select');
  selectElement.addEventListener('change', (e) => {
    selectedCountryISO = e.target.value;
    document.querySelector('.code-phone').innerText = codesCountrties.find(el => el.iso === e.target.value).code
  })

  for (let i = 0; i < codesCountrties.length; i++) {
    let el = createOptionElement(codesCountrties[i].name, codesCountrties[i].iso)
    selectElement.appendChild(el);
  }
}

function createOptionElement(text, val) {
  const optionEl = document.createElement('option');
  optionEl.innerHTML = text;
  optionEl.value = val;

  return optionEl;
}

addSelectListCountries();