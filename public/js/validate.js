$(document).ready(function () {
    var uname_valid = false;
    var pwd1_valid = false;
    var pwd2_valid = false;
    var ismatchpwd = false;

/*    var u_name = $("#username").html();
    var p_word1 = $("#password1").html();
    var p_word2 = $("#password2").html();*/

    function validateU_name() {
        let usernameval = $("#username").val();
        if (usernameval == '') {
            $("#username").css({ "background-color": "red" });
            return uname_valid;
        }
        else {
            return uname_valid=true;
        }
    }

    function validatepassword1() {
        let pwd1 = $("#password1").val();
        if (pwd1 == '') {
            $("#password1").css({ "background-color": "red" });
            return pwd1_valid;
        }
        else {
            return pwd1_valid = true;
        }
    }

    function validatepassword2() {
        let pwd2 = $("#password2").val();
        if (pwd2 == '') {
            $("#password2").css({ "background-color": "red" });
            return pwd2_valid;
        }
        else {
            return pwd2_valid = true;
        }
    }

    function ismatchpassword() {
        let pwd1 = $("#password1").val();
        let pwd2 = $("#password2").val();
        if (pwd1 != pwd2) {
            $("#password1").css({ "background-color": "red" });
            $("#password2").css({ "background-color": "red" });
            return ismatchpwd;
        }
        else {
            return ismatchpwd = true;
        }
    }


    /*var uname_valid = false;
    var pwd1_valid = false;
    var pwd2_valid = false;
    var ismatchpwd = false;*/

    $("#reg_btn").click(function () {
        validateU_name();
        validatepassword1();
        validatepassword2();
        ismatchpassword();
        if ((uname_valid == true) && (pwd1_valid == true) && (pwd2_valid == true) && (ismatchpwd == true)) {
            return true;
        }
        else if ((uname_valid != true) && (pwd1_valid != true) && (pwd2_valid != true) && (ismatchpwd != true)) {
            return false;
        }
    });

});

/*<script>

    function checkForm() {
            var valid = false;

            var u_name = document.getElementById('username');
            var p_word1 = document.getElementById('password1');
            var p_word2 = document.getElementById('password2');

            if (u_name.value == "" || p_word1.value == "" || p_word2.value == "") {

                if (u_name.value == "") {
        f_name.style.backgroundColor = "red";
                    valid;
                }

                if (p_word1.value == "") {
        p_word1.style.backgroundColor = "red";
                    valid;
                }

                if (p_word2.value == "") {
        p_word2.style.backgroundColor = "red";
                    valid;
                }

            }

            if (u_name.value || p_word1.value || p_word2.value) {

                if (u_name.value) {
        u_name.style.backgroundColor = "white";
                    valid;
                }

                if (p_word1.value) {
        p_word1.style.backgroundColor = "white";
                    valid;
                }

                if (p_word2.value) {
        p_word2.style.backgroundColor = "white";
                    valid;
                }


            }


            if (u_name.value && p_word1.value) {

                if (p_word1.value) {


                    //if the password is matched with the confirmed password
                    if (p_word1.value == p_word2.value) {

        p_word1.style.backgroundColor = "white";
                        p_word2.style.backgroundColor = "white";

                        valid = true;
                    }

                    //if the password is not matched with the confirmed password
                    else {
        p_word1.style.backgroundColor = "red";
                        p_word2.style.backgroundColor = "red";
                        valid;

                    }

                }


            }
            return valid;
        }
 </script>*/