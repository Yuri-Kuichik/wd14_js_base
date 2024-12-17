let sections = document.querySelector('main').querySelectorAll('section');

let navButtons = document.querySelector('.navigation').querySelectorAll('span');

navButtons.forEach(element => {
    element.addEventListener('click', (evt) => {
        processSections(evt.target.id);
    });
});


function processSections(id) {
    console.log('Started');
    sections.forEach((element) => {
        if (element.classList.contains(id))
            element.style.display = "block";
        else
            element.style.display = "none";
    })
}