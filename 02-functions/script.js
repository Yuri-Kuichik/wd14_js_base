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

const userData = {
  firsName: 'Donald',
  lastName: 'Trump',
  age: 78,
}

// start user initials
function getUserInitials(data) {
  return data.firsName.charAt(0) + data.lastName.charAt(0)
}

function setUserInitials() {
  document.querySelector('.header-section__user').innerText = getUserInitials(userData)
}
setUserInitials();
// end user initials

let userdataRewrite = document.querySelector('.userdata__rewrite')
userdataRewrite.addEventListener('click', () => {
  alert(`Привет ${userData['firsName']} ${userData['lastName']}. Вижу ты пришёл сюда, чтобы снова поменять своё имя. Давай я попробую помочь тебе`)
  userData['firsName'] = prompt('Введите ваше имя: ')
  userData['lastName'] = prompt('Введите вашу фамилию: ')
  setUserInitials()
  alert(`Отлично ${userData['firsName']} ${userData['lastName']}. Я изменил твои данные. Честно говоря, они тебе совершенно не подходят XD!`)
})

