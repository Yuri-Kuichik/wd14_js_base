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
    setCode(selectedCountryISO)
  })

  codesCountrties.forEach( (item, index) => {
    let el = createOptionElement(item.name, item.iso, index)
    selectElement.appendChild(el);
  })
}

function createOptionElement(text, val, index) {
  const optionEl = document.createElement('option');
  optionEl.innerHTML = text;
  optionEl.value = val;
  if(!index) {
    setCode(val)
  }

  return optionEl;
}

function setCode(val) {
  document.querySelector('.code-phone').value = codesCountrties.find(el => el.iso === val).code
}

addSelectListCountries();