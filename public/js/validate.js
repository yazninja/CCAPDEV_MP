$(document).ready(function () {
    $('.pass').change(function(){
        pass = $('.pass').val();
        checkPassMatch(pass, pass2);
    });
    $('input.pass2').change(function () {
        pass2 = $('.pass2').val();
        checkPassMatch(pass, pass2);
    });
    function checkPassMatch(pass1, pass2){
        if(pass != $('input.pass2').val()){
            $('.submit').attr('disabled', true);
            $('.submit').css("background-color", "red");
            $('.submit').text("Passwords do not match");
            $('div.pass2').addClass('has-error');
        }
        else {
            $('.submit').attr('disabled', false);
            $('.submit').css('background-color', '#04AA6D');
            $('.submit').text("Register");
            $('div.pass2').removeClass('has-error');
        }
    }
        
});