let nav = document.getElementsByClassName("nav-bar-link");

for (let i = 0 ; i < nav.length; i++) {
    nav[i].addEventListener("mouseover", function( event ) {
        event.target.style.backgroundColor = "gainsboro";
    }, false);
    nav[i].addEventListener("mouseout", function( event ) {
        event.target.style.backgroundColor = "";
      }, false);
}

let github_tag = document.getElementById("github");
let twitter_tag = document.getElementById("twitter");
if (github_tag != null) {
    github_tag.addEventListener("mouseover", function( event ) {
        event.target.style.backgroundColor = "gainsboro";
    }, false);
    github_tag.addEventListener("mouseout", function( event ) {
        event.target.style.backgroundColor = "";
        }, false);
}
if (twitter_tag != null) {
    twitter_tag.addEventListener("mouseover", function( event ) {
        event.target.style.backgroundColor = "gainsboro";
    }, false);
    
    twitter_tag.addEventListener("mouseout", function( event ) {
        event.target.style.backgroundColor = "";
      }, false);
}

let post_feed = document.getElementsByClassName("blog-post");
if (post_feed != null) {
    for (let i = 0 ; i < nav.length; i++) {
        post_feed[i].addEventListener("mouseover", function( event ) {
            event.target.style.textDecoration = "underline";
        }, false);
        post_feed[i].addEventListener("mouseout", function( event ) {
            event.target.style.textDecoration = "none";
          }, false);
    }
}
