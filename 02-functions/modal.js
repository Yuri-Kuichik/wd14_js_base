document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const openModalBtn = document.querySelector('.open-modal-btn');
  const closeElements = document.querySelectorAll('.close-modal, .close-modal-btn');
  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const headerUserSection = document.querySelector('.header-section__user');
  const userData = {
    firstName: '',
    lastName: '',
  };


  openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
  });


  closeElements.forEach(el => {
    el.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  });

  const saveUserData = () => {
    userData.firstName = firstNameInput.value.trim();
    userData.lastName = lastNameInput.value.trim();

    if (userData.firstName && userData.lastName) {
      const initials = `${userData.firstName[0]}${userData.lastName[0]}`.toUpperCase();
      headerUserSection.textContent = initials; 
    }

    modal.style.display = 'none'; 
  };

  document.querySelector('.confirm-btn').addEventListener('click', saveUserData);
});
