// Variable

const accordionContent = document.getElementsByClassName('accordian-content')

for(let i=0; i < accordionContent.length; i++) {

    accordionContent[i].addEventListener('click', function() {
        this.classList.toggle('active')
    })
}