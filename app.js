$(document).ready(function () {

    $('#btnSubmit').attr('disabled', 'disabled');

    $('#btnSubmit').click(function () {
        alert('The submit button was clicked');
        alert($('#inputBox').val());
    })

    $('#inputBox').keyup(function () {
        if ($(this).val() == '') {
            $('#btnSubmit').attr('disabled', 'disabled');
        } else {
            $('#btnSubmit').removeAttr('disabled');
        }
    })
$('<div></div>').appendTo(document.body);
})