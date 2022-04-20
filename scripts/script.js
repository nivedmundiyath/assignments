
function validate() {



var kt_email = document.querySelector("#exampleInputEmail1").value;
var kt_span = document.querySelector("#emailHelp")
console.log("kt_span", kt_span);
var regx= /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,8}?)$/;
// console.log("small",  document.getElementById("emailHelp"));


if (regx.test(kt_email)) {

    // console.log("True") ;
    // document.querySelector(".form-control").style.backgroundColor="red";
    // let element= document.getElementById("emailHelp");
    kt_span.innerHTML = "Username is valid";
    kt_span.classList.value = "";
    kt_span.classList.add("high");

    // kt_span.style.color = "green";

    return true;
}
else
  { 
    kt_span.innerHTML = "Invalid Username: Please enter in correct format";
    kt_span.classList.value = "";
    kt_span.classList.add("low");

//    kt_span.style.color= "red";
    return false;
}
}

function pwd_validate ()
 {
     var kt_pwd = document.querySelector("#exampleInputPassword1");
     var kt_span_pwd = document.querySelector("#pwdHelp");
     var lwrpwd_regx = /[a-z]/g ;
     var upprpwd_regx = /[A-Z]/g ; 
     var numb_regx = /[0-9]/g ;
     

     if (kt_pwd.value.match(lwrpwd_regx) && kt_pwd.value.match(upprpwd_regx) && kt_pwd.value.match(numb_regx) )
       {
           if (kt_pwd.value.length >=8)
           {
            kt_span_pwd.innerHTML = "<br>Password is Valid";
            kt_span_pwd.classList.value = "";
            kt_span_pwd.classList.add("high");

            // kt_span_pwd.style.color = "green";
            return true;
           }
       } else
          {
            kt_span_pwd.innerHTML = "<br>Invalid Password: Please enter in correct format <br> Minimum 8 character <br>At least one digit(0-9).<br> At least one upper case alphabet.(A-Z)<br> At least one lower case alphabet(a-z)";
            kt_span_pwd.classList.value = "";
            kt_span_pwd.classList.add("low");

            // kt_span_pwd.style.color= "red";
             return false;
          }

 }

 function phone_validate() {

    var kt_phnum = document.querySelector("#inputPhne");
    var kt_phnspan = document.querySelector("#kt_phnspan");
        var phne_regx = /^([0-9]{10})$/ ;
        var phne_regx1 = /^([0-9]{3})([-]{1}?)([0-9]{3})([-]{1}?)([0-9]{4})$/;
        var phne_regx2 = /^([0-9]{3})([\.]{1}?)([0-9]{3})([\.]{1}?)([0-9]{4})$/;
        var phne_regx3 = /^([0-9]{3})([\s]{1}?)([0-9]{3})([\s]{1}?)([0-9]{4})$/

    if (kt_phnum.value.match(phne_regx) || kt_phnum.value.match(phne_regx1) || kt_phnum.value.match(phne_regx2) || kt_phnum.value.match(phne_regx3))
        {
            kt_phnspan.innerHTML = "Phone number is valid";
            kt_phnspan.classList.add("high");
            // kt_phnspan.style.color = "green";
            return true;

        }
        else
         {
            kt_phnspan.innerHTML = "Invalid: Please enter 10 digit number";
            kt_phnspan.classList.add("low");
             return false;
         }
 }



 function pwd_strength() {

    var strength = 0;
    var pwd = document.querySelector("#exampleInputPassword1").value;
    var strength_ind = document.querySelector("#pwdStrength");
    strength_ind.innerHTML= "";
    strength.className= "";
    var lwrpwd_regx = /[a-z]/g ;
    var upprpwd_regx = /[A-Z]/g ; 
    var numb_regx = /[0-9]/g ;
    var sp_regx = /[@$!%*?&]/g;
        
    if ( pwd.length >= 4)
        strength+=1;

    if ( pwd.match(lwrpwd_regx) && pwd.match(upprpwd_regx) && pwd.length >4 )
        strength+=3;
    
    if (pwd.match(sp_regx) && pwd.match(numb_regx) && pwd.length >4 )
        strength+=3

    // console.log(strength);



    if ( strength <= 1)
    {
        strength_ind.classList.value = "";
        strength_ind.classList.add("low");
        strength_ind.innerHTML= "Password Strength : Weak";
        console.log(strength_ind.classList)

        // return 'weak';
    }
    else if (strength == 4  ) 
    {
        strength_ind.classList.value = "";
        strength_ind.classList.add("middle");
        strength_ind.innerHTML="Password Strength : Middle";

        // return 'medium'

    }
    else if ( strength> 4)
       {
        strength_ind.classList.value = "";
        strength_ind.classList.add("high");
        strength_ind.innerHTML="Password  Strength : High";

       }
    
        

 }