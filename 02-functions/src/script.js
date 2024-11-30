
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