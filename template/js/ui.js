class UI {
    errorName(element) {
            const parent = element.parentNode;
            if(parent.querySelector('.novalid_msg') == null) {
                let errorMsg = document.createElement('span');
                errorMsg.classList.add('novalid_msg')
                errorMsg.textContent = 'not valid :('
                element.parentNode.append(errorMsg)
                element.className = 'input not_valid'
            }            
     
    }
    validName(element) {
        const parent = element.parentNode;
        if(parent.querySelector('.novalid_msg')) {
            parent.removeChild(parent.querySelector('.novalid_msg'));
            element.className = 'input'
        }   
    }
}