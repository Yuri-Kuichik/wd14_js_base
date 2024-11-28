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

let modalButtonInBody = document.querySelector("#modalButtonInBody");
let modalButtonInWindow = document.querySelector("#modalButtonInWindow")
let modalWindow = document.querySelector("#authentication-modal");
let submitButton = document.querySelector("#submitButton");
let countries = document.querySelector("#countries");

modalButtonInBody.addEventListener("click", ChangeModalWindowState);
modalButtonInWindow.addEventListener("click", ChangeModalWindowState);

function ChangeModalWindowState() {
    if (modalWindow.classList.contains("hidden"))
        modalWindow.classList.remove("hidden");
    else
        modalWindow.classList.add("hidden");
}

submitButton.addEventListener("click", () => {
    ChangeModalWindowState();
    let initials = document.querySelector("#initials");
    let firstName = document.querySelector("#firstName").value;
    let lastName = document.querySelector("#lastName").value;
    initials.innerHTML = `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`;
})


//HW2-2

codesCountrties.forEach((element) => {
    let newElement = document.createElement('option');
    newElement.value = element.code;
    newElement.innerHTML = `${element.name}`
    countries.appendChild(newElement);
})

function SetPrefixValue() {
    let prefix = document.querySelector("#prefix");
    prefix.value = codesCountrties[0].code;
}

SetPrefixValue();

countries.addEventListener("change", (e) => {
    let prefix = document.querySelector("#prefix");
    prefix.value = e.target.value;
})

