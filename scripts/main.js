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


