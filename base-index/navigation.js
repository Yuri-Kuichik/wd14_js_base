const elNav = document.querySelector('.navigation');
const arrSections = document.querySelectorAll('section');

elNav.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('link-page')) {
        const id = e.target.id;
        hideAllSections();
        showSection(id);
    }
});

function hideAllSections() {
    arrSections.forEach(section => {
        section.classList.replace('visible', 'hidden');
    });
}

function showSection(id) {
    const section = findSection(id);
    if (section) {
        section.classList.replace('hidden', 'visible');
    }
}

function findSection(id) {
    return [...arrSections].find(item => item.classList.contains(id));
}

// Немного попробовала переделать код из page-navigation.js