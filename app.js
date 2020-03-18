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

    function randomColor() {
        let colorR = Math.floor((Math.random() * 256));
        let colorG = Math.floor((Math.random() * 256));
        let colorB = Math.floor((Math.random() * 256));
        let color = `rgb(${colorR},${colorG},${colorB})`;
        return color;
    }
    $('ul').on('click', 'li', function (){
        $(this).css({'color': randomColor()});
    })
})