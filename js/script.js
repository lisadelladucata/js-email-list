// DOM ELEMENTS 
const emailListElm = document.getElementById('emailList');
const emailBtnElm = document.getElementById('emailBtn');

// FUNCTIONS 
function randomEmail(){
    for (let i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(function(response) {
            const email = response.data.response;
            const listItem = document.createElement('li');
            listItem.textContent = email;
            emailListElm.appendChild(listItem);
        });
    }
}

// EVENTS 
emailBtnElm.addEventListener('click', function() {
    randomEmail();
});