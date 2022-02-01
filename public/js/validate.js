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
            $("#username").css({ "background-color": "#ff9999" });
            return uname_valid;
        }
        else {
            $("#username").css({ "background-color": "#80ff80" });
            return uname_valid=true;
        }
        return uname_valid;
    }

    function validatepassword1() {
        let pwd1 = $("#password1").val();
        if (pwd1 == '') {
            $("#password1").css({ "background-color": "#ff9999" });
            return pwd1_valid;
        }
        else {
            $("#password1").css({ "background-color": "#80ff80" });
            return pwd1_valid = true;
        }
        return pwd1_valid;
    }

    function validatepassword2() {
        let pwd2 = $("#password2").val();

        if (pwd2 == '') {
            $("#password2").css({ "background-color": "#ff9999" });
            return pwd2_valid;
        }
        else {
            $("#password2").css({ "background-color": "#80ff80" });
            return pwd2_valid = true;
        }
        return pwd2_valid;
       /* if (pwd2=='') {
            $(".field").change(function () {
                $(".field").css({ "background-color": "#ff4d4d" });
                return pwd2_valid;
            });
            
        }
        else {
            $(".field").change(function () {
                $(".field").css({ "background-color": "#99e699" });
                return pwd2_valid = true;
            });
           
        }*/
    }

    function ismatchpassword() {
        let pwd1 = $("#password1").val();
        let pwd2 = $("#password2").val();
        if (pwd1 != pwd2) {
            $("#password1").css({ "background-color": "#ff9999" });
            $("#password2").css({ "background-color": "#ff9999" });
            return ismatchpwd;
        }
        else {
            return ismatchpwd = true;
        }
        return ismatchpwd;
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