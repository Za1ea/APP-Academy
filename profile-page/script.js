console.log("Hello 🌎");



/**
* Function to toggle bgColor
* @param array colors Array of colors to set
**/
function flashColors(){
  let ms = 500;
  let colors = ['#92AFD7', '#5A7684', '#161B33'];
  let counter = 0
  let change = function(){
        document.getElementByClassName("flash").style.backgroundColor =
      colors[counter % colors.length]; // Change the color
    counter++;
     // Call the changer
  };
  change();
  if (colors.length > 1) {setInterval(change, ms)}
}

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the steps in the TODO 🚧
*/
const btn = document.querySelector("button"); // Get the button from the page
if (btn) { // Detect clicks on the button
  btn.onclick = function () {
    // The 'flash' class in style.css changes the appearance on click
    btn.classList.toggle("flash");
    if(btn.classList[0] = "flash") {
      flashColors();
    }
  };
}


// ----- GLITCH STARTER PROJECT HELPER CODE -----

// Open file when the link in the preview is clicked
let goto = (file, line) => {
  window.parent.postMessage(
    { type: "glitch/go-to-line", payload: { filePath: file, line: line } }, "*"
  );
};
// Get the file opening button from its class name
const filer = document.querySelectorAll(".fileopener");
filer.forEach((f) => {
  f.onclick = () => { goto(f.dataset.file, f.dataset.line); };
});
