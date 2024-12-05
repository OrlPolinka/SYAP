$(document).ready(function () { //когда документ загружен и готов к выполнению
    $('#submitBtn').on('click', function () {   //выполняется когда кнопка нажата
        let isValid = true; 
        let confirmat = false; //флаг на подтверждение проверки

        const nameRegex = /^[a-zA-Zа-яА-Я]{1,20}$/; 
        const emailRegex = /^[^\s@]+@[a-zA-Z]{2,5}\.[a-zA-Z]{2,3}$/; 
        const phoneRegex = /^\(0\d{2}\)\d{3}-\d{2}-\d{2}$/;

        if (!nameRegex.test($('#surname').val())) {
            $('#surnameError').show();
            isValid = false;
        } else {
            $('#surnameError').hide();  //если нет ошибок - скрываем ошибку
        }

        if (!nameRegex.test($('#name').val())) {
            $('#nameError').show();
            isValid = false;
        } else {
            $('#nameError').hide();
        }

        if (!emailRegex.test($('#email').val())) {
            $('#emailError').show();
            isValid = false;
        } else {
            $('#emailError').hide();
        }

        if (!phoneRegex.test($('#phone').val())) {
            $('#phoneError').show();
            isValid = false;
        } else {
            $('#phoneError').hide();
        }

        if ($('#about').val().length > 250 || $('#about').val().trim() === "") {
            $('#aboutError').show();
            isValid = false;
        } else {
            $('#aboutError').hide();
        }

        const city = $('#city').val(); 
        const course = $('input[name="course"]:checked').val();
        const isStudentAtBGTU = $('#bgtu').is(':checked'); 

        if (city !== 'Минск' || course !== '3' || !isStudentAtBGTU) {
            if (!confirm("Вы уверены в своем ответе?")) {
                confirmat = false;
            } else {
                confirmat = true;
            }
        } else {
            confirmat = true; 
        }

        if (isValid && confirmat) {
            alert("Форма успешно отправлена!"); 
        } else if (!confirmat) {
        } else {
            alert("Пожалуйста, исправьте ошибки перед отправкой.");
        }
    });
});