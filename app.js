$(document).ready(function () {

    $('#btnSubmit').attr('disabled', 'disabled');

    $('#btnSubmit').click(function () {
        let inputVal = ($('#inputBox').val());
        alert('The submit button was clicked');
        alert(inputVal);
        let li = $('<li>' + inputVal + '</li>');
        $(li).appendTo('ul');
        event.preventDefault();

    })

    $('#inputBox').keyup(function () {
        if ($(this).val() == '') {
            $('#btnSubmit').attr('disabled', 'disabled');
        } else {
            $('#btnSubmit').removeAttr('disabled');
        }
    })
$('<ul></ul>').appendTo('body');
})