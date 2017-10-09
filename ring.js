var selectPerson = new Event('give-ring', { bubbles: true, cancelable: true }); 
var ringHere = new Event('ring', { bubbles: true, cancelable: true }); 
var ringNotHere = new Event('no-ring', { bubbles: true, cancelable: true }); 


document.addEventListener('give-ring', function(event) {
 alert('guess who has a ring');
});

document.addEventListener('DOMContentLoaded', function(event) {
 this.dispatchEvent(selectPerson); 
});
var persons = document.querySelectorAll('.person__btn'); //коллекция из 9ти кнопок

function giveRing(obj) {
    let curNumber = Math.floor(Math.random() * 9); 
    console.log(curNumber);
    obj[curNumber].classList.add('ring');
    }
giveRing(persons);

document.querySelectorAll('.person__btn').forEach( (btn) => {
    btn.addEventListener('click', (e) => { 
            if (e.target.classList.contains('ring')) {
                e.target.dispatchEvent(ringHere);
                e.target.classList.remove('ring'); 
            } else {
                e.target.dispatchEvent(ringNotHere); 
            }
        });
    });

document.querySelectorAll('.ring').forEach( (btn) => {
    btn.addEventListener('ring', () => { 
        alert('you win');                          
        });                                                 
    });

document.querySelectorAll('.person__btn').forEach( (btn) => {
    btn.addEventListener('no-ring', () => {  
        alert('try arain');                         
        });                                                 
    });

document.getElementById('restartId').addEventListener('click', () => {
    giveRing(persons);
}); 




