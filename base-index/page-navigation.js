const elNav = document.querySelector('.navigation');
const arrBtnsLink = elNav.querySelectorAll('.link-page');
const arrSections = document.querySelectorAll('section');
const navigationBlock = document.querySelector('.navigation');

navigationBlock.addEventListener( 'click', function(e) {
  let id = e.target.id;

  hideAllSections();
  showSection(id);
})

function hideAllSections() {
  const el = findSection('visible');
  el?.classList.replace('visible', 'hidden');
}

function showSection(id) {
  if (!id) return;
  const el = findSection(id);
  el?.classList.replace('hidden', 'visible');
}

function findSection(className) {
  return [...arrSections].find( (item) => {
    return item.classList.contains(className)
  })
}