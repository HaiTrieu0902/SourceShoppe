
function displayRegister() {
    var register = document.querySelector('.header_navbar-item-separate_login');
    
    register.onclick = function() {
        document.querySelector('.model_main').style.display ='block';
        
        document.querySelector('.auth__form_login').style.display ='none';
    }

    
}
function displayLogin() {
    var register = document.querySelector('.header_navbar-item-separate_login1');
   
    register.onclick = function() {
        document.querySelector('.model_main').style.display ='block';
        
        document.querySelector('.auth__form_register').style.display ='none';
    }
}






displayRegister();
displayLogin();

var login = document.querySelector('.auth-form__switch-btn_login')
login.onclick = function() {
        
    document.querySelector('.model_main').style.display ='block';
    document.querySelector('.auth__form_login').style.display ='block';
    document.querySelector('.auth__form_register').style.display ='none';
}

var register = document.querySelector('.auth-form__switch-btn_register')
register.onclick = function() {
        
    document.querySelector('.model_main').style.display ='block';
    document.querySelector('.auth__form_login').style.display ='none';
    document.querySelector('.auth__form_register').style.display ='block';
}

var comback = document.querySelector('.close_model')
comback.onclick = function() {  
    document.querySelector('.model_main').style.display ='none';
}

