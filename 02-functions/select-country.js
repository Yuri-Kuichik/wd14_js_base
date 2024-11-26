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

function createOptionElement(text, value) {
  const optionEl = document.createElement('option');
  optionEl.innerHTML = text;
  optionEl.value = value;

  return optionEl;
}

addSelectListCountries();