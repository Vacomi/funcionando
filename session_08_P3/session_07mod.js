
$(document).ready(function(){
    $("#form").submit(function(e){
        e.preventDefault();

        if (!$("#form")[0].checkValidity()) {
            e.stopPropagation()
            $('#form')[0].classList.add('was-validated')
        }else{
            $('#boton')[0].setAttribute('data-bs-toggle','modal');

            const myModal = new bootstrap.Modal('#exampleModal', {
                keyboard: false
            })
            let user = []

            $('#exampleModal .modal-body')[0].append(user)
            myModal.show()

            $('#form')[0].reset()
            $('#boton')[0].removeAttribute('data-bs-toggle')
            $('#form')[0].classList.remove('was-validated');
        }
    })
})
