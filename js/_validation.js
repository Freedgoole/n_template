let validation = (function(){
    const settingValid = {
        'nameLength' : 3,
        'telLength' : 7,
        'validMsgName' : 'minimum length 3',
        'validMsgEmail' : 'invalid email',
        'validMsgTel' : 'invalid tel',
        'patternRegExEmail' : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    }
    let validationHeadForm = function(classForm) {
        let form = document.querySelector(classForm);
        let arrInputs = form.querySelectorAll('input');
      
       return fabricaForms(arrInputs).every(el=> el !== false);
        
    }
    let fabricaForms = function(arrInputs) {
        let valid = [];
        arrInputs.forEach(element => {
            if(element.getAttribute('type') == 'text') {
                validatinInputTypeName(element);
                valid.push(validatinInputTypeName(element))
            } 
            if(element.getAttribute('type') == 'email') {
                validatinInputTypeEmail(element);
                valid.push(validatinInputTypeEmail(element))
            }
            if(element.getAttribute('type') == 'tel') {
                validatinInputTypeTel(element)
                valid.push(validatinInputTypeTel(element));
            }                  
        });
        return valid 
    }
    let validatinInputTypeName = function (element) {
        if(element.value.length > settingValid.nameLength) {
            ui.validName(element)
            return true; 
        } else {
            ui.errorName(element, settingValid.validMsgName)
            return false   
        }
        
    }
    let validatinInputTypeEmail = function (element) {
        if(validateEmail(element.value)) {
            ui.validName(element)
            return true
        } else {
            ui.errorName(element, settingValid.validMsgEmail);
            return false       
        }
    }
    let validateEmail = function (email) {
        return settingValid.patternRegExEmail.test(String(email).toLowerCase());
    }
    let validatinInputTypeTel = function(element) {
        if(!isNaN(element.value) && element.value.length > settingValid.telLength) {
            ui.validName(element)
            return true
        } else {
            ui.errorName(element, settingValid.validMsgTel);
            return false      
        }
    }

    return {
        validationHeadForm
    }
})()