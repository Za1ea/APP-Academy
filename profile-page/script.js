
// Send data in comment form to sheetdb API
var form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(form.action, {
      method : "POST",
      body: new FormData(document.getElementById("sheetdb-form")),
  }).then(
      response => response.json()
  ).then((html) => {
    // you can put any JS code here
    alert('success');
    retrieveComments();
  });
});

window.onload = function() {
  var reloading = sessionStorage.getItem("reloading");
  if (reloading) {
      sessionStorage.removeItem("reloading");
      retrieveComments();
  }
}

function retrieveComments() {
  alert("retrieved");
  fetch('https://sheetdb.io/api/v1/tyubq6ndvcsd5?sort_by=id')
  .then((response) => response.json())
  .then((data) => postComment(data));
}

function postComment(data) {
  for (let i=0; i<data.length; i++) {
    const commentBox = document.createElement("div");
    const name = document.createElement("p");
    const comment = document.createElement("p");

    commentBox.appendChild(name);
    commentBox.appendChild(comment);
    commentBox.classList.add("comment");

    name.innerHTML = data[i]["name"];
    comment.innerHTML = data[i]["comment"]; 
    name.classList.add("bold");

    document.getElementById("comments").appendChild(commentBox); 
  }
  
}

retrieveComments();
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
