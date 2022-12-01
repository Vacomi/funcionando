const formhtml = document.getElementById('form');
formhtml.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!formhtml.checkValidity()) {
        e.stopPropagation()
        formhtml.classList.add('was-validated')
    }else{
        e.target.querySelector('#boton').setAttribute('data-bs-toggle','modal')
        const myModal = new bootstrap.Modal('#exampleModal', {
            keyboard: false
          })
        myModal.show()
        formhtml.reset()
        e.target.querySelector('#boton').removeAttribute('data-bs-toggle')
        formhtml.classList.remove('was-validated');
    }

}, false)
