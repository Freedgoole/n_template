
const ui = new UI();
const request = new Request()


document.querySelector('.form button').addEventListener('click', () => {
    validation.validationHeadForm('.form') && request.handlerRequest(getNewUser())  
})




