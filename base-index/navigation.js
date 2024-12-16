let navigationSpans = document.querySelectorAll('.navigation')
let sectionsList = document.querySelectorAll("section")

navigationSpans.forEach((event) => {
    event.addEventListener('click', (span) => {
        let spanId = span.target.id
        sectionsList.forEach((e) => {
            e.style.display = 'none'
            e.classList.contains(spanId) ? e.style.display = 'block' : 'none'
        })
    })
})