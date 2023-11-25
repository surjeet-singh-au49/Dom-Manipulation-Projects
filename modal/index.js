let showModal = document.getElementById("open-btn");
let closeModel = document.getElementById("close-btn");
let modalContainer = document.getElementById("modal-container")

showModal.addEventListener('click', function(){
    modalContainer.style.display = "flex"
})

closeModel.addEventListener('click', function(){
    modalContainer.style.display = "none"
})

window.addEventListener('click', function(e) {
    if(e.target === modalContainer){
        modalContainer.style.display = 'none'
    }
})
