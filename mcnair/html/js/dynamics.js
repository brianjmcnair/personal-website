let nav = document.getElementsByClassName("nav-bar-link");

// This handler will be executed only once when the cursor
// moves over the unordered list
for (let i = 0 ; i < nav.length; i++) {
    nav[i].addEventListener("mouseover", function( event ) {
        event.target.style.backgroundColor = "gainsboro";
    }, false);
    nav[i].addEventListener("mouseout", function( event ) {
        event.target.style.backgroundColor = "";
      }, false);
}