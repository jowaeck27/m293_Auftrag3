document.body.style.scrollbarColor = "#E8998D #EED2CC";

const menue = document.getElementById('containernav2');
const burger = document.getElementById('logo1');

if (!menue || !burger) {
    console.error('Menu or burger element not found');
} else {
    console.log('Elements found, adding listener');
    burger.addEventListener("click", () => {
        const currentDisplay = getComputedStyle(menue).display;
        console.log('Current display:', currentDisplay);
        if (currentDisplay === "none") {
            menue.style.display = "block";
        } else {
            menue.style.display = "none";
        }
    });
}

const contactbtn = document.getElementById('contactbtn');
const loginbtn = document.getElementById('');
const resetbtn = document.getElementById('');
const registerbtn = document.getElementById('');

 resgisterbtn.addEventListener('click',()=>{
       window.open('registerdone.html','_self');
    });
 loginbtn.addEventListener('click',()=>{
       window.open('account.html','_self');
    });
 contactbtn.addEventListener('click',()=>{
       window.open('contactconfirm.html','_self');
    });
 resetbtn.addEventListener('click',()=>{
       window.open('reset.html','_self');
    });

