function getNewUser () {
    let firstName = document.querySelector('[data-type="name"]').value;
    let lastName = document.querySelector('[data-type="lastname"]').value;
    let email = document.querySelector('[data-type="email"]').value;
    let tel = document.querySelector('[data-type="tel"]').value;
    var cauntryDom  = document.querySelector('select');
    let cauntry = cauntryDom.options[cauntryDom.selectedIndex].value;
    return {
        firstName, lastName, email, tel, cauntry
    }
}