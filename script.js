 function validateEmail($email) {
     var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
     return emailReg.test($email);
 }

 $('.email-submit').attr("disabled", true);
 jQuery('.email-input').on('input', function() {
     var xd = $('.email-input').val();
     if (validateEmail(xd)) {
         $('.email-validation').hide();
         $('.email-submit').attr("disabled", false);
     } else {
         $('.email-validation').show();
         $('.email-submit').attr("disabled", true);
     }

 });

 $(".navv").addClass("js");
 $(".navv").addClass("js").before('<ul><div id="menu">☰</div></ul>');
 $("#menu").click(function() {
     $("nav").toggleClass("float-none");
     $(".link").toggleClass("display-block");
     $(".link-ul").toggleClass("display-block");
     $("header").toggleClass("height-set");


 });