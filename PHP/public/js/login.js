        $(document).ready(function(){
            $(".main").attr("style","width:"+$(window).width()+"px");
            $(".main").attr("style","height:"+$(window).height()+"px");

            if ($(window).height() > 188)
                margin_top = $(window).height()/2 - 188/2;
            else
                margin_top = 0;
            $("#login_container").css("padding-top",margin_top+"px");
        });
        $(window).resize(function() {
            $(".main").attr("style","width:"+$(window).width()+"px");
            $(".main").attr("style","height:"+$(window).height()+"px");

            if ($(window).height() > 188)
                margin_top = $(window).height()/2 - 188/2;
            else
                margin_top = 0;
            $("#login_container").css("padding-top",margin_top+"px");
        });
        function onModelRegisterSubmit(){

            if ($("#username_register").val() == "") return false;
            if ($("#password_register").val() == "") return false;
            if ($("#repassword_register").val() == "") return false;
            if ($("#password_register").val() != $("#repassword_register").val()) {
                alert("Incorrect password!");
                $("#password_register").val("");
                $("#repassword_register").val("");
                $("#password_register").focus();
                return false;
            }

            $.post("login/register", {username: $("#username_register").val(), password:$("#password_register").val()}, function (data){
                if (data == true) {
                    alert("Successfully registered!");
                    $("#username_register").val("");
                    $("#password_register").val("");
                    $("#repassword_register").val("");
                    $("#username_register").focus();
                }
                else {
                    alert("database register error!");
                }
            });
            return true;
        }

        function onLoginSubmit(){
            if ($("#username").val() == "") return false;
            if ($("#password").val() == "") return false;
            $.post(base_url+"index.php/login/loginCheck", {username: $("#username").val(), password:$("#password").val()/*, usergrade:1*/}, function (data){
                if (data == true) {
                    document.location.href=base_url+"index.php/users/index";
                }
                else {
                    alert("incorrect username or password!");
                    $("#username").val("");
                    $("#password").val("");
                    $("#username").focus();
                }
            });
            return true;
        }
        $(document).ready(function(){
            $("#password").keydown(function(event) {
                if ( event.which == 13 ) {
                   onLoginSubmit('model');
                 }
            });
            $("#username").focus();
        });
        