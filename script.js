let backgroundColor = "#222222";

let linkGithub;
let linkLinkedin;
let linkYoutube;
let linkPortfolio;
let linkResume;
let linkContact;

let linkDocumentObjects = [linkGithub, linkLinkedin, linkYoutube, linkPortfolio, linkResume, linkContact];
let linkClassSelectors = ['.link-github', '.link-linkedin', '.link-youtube', '.link-portfolio', '.link-resume', '.link-contact'];
let linkMouseOvers = [mouseOverGithub,mouseOverLinkedin,mouseOverYoutube,mouseOverPortfolio,mouseOverResume,mouseOverContact];
let linkMouseOuts = [mouseOutGithub,mouseOutLinkedin,mouseOutYoutube,mouseOutPortfolio,mouseOutResume,mouseOutGContact];

for (i = 0; i < linkDocumentObjects.length; i++){
	linkDocumentObjects[i] = document.querySelector(linkClassSelectors[i]);
	linkDocumentObjects[i].addEventListener("mouseover", linkMouseOvers[i]);
	linkDocumentObjects[i].addEventListener("mouseout", linkMouseOuts[i]);
}



function mouseOverGithub(event){
  //document.body.style.background = backgroundColor;
  document.querySelector(".link-github img").style.transform = "scale(1.2)";
}
function mouseOutGithub(event){
 // document.body.style.background = backgroundColor;
 document.querySelector(".link-github img").style.transform = "scale(1)";
}

function mouseOverLinkedin(event){
  //document.body.style.background = backgroundColor;
  document.querySelector(".link-linkedin img").style.transform = "scale(1.2)";
}
function mouseOutLinkedin(event){
  //document.body.style.background = backgroundColor;
  document.querySelector(".link-linkedin img").style.transform = "scale(1)";
}

function mouseOverYoutube(event){
  //document.body.style.background = backgroundColor;
  document.getElementById("letterboxing-top").style.height = "7vh";
  document.getElementById("letterboxing-bottom").style.height = "7vh";
  document.querySelector(".link-youtube img").style.transform = "scale(1.2)";
}
function mouseOutYoutube(event){
  //document.body.style.background = backgroundColor;
  document.getElementById("letterboxing-top").style.height = "0vh";
  document.getElementById("letterboxing-bottom").style.height = "0vh";
  document.querySelector(".link-youtube img").style.transform = "scale(1)";
}

function mouseOverPortfolio(event){
  //document.body.style.background = backgroundColor;
  document.querySelector(".link-portfolio img").style.transform = "scale(1.2)";
}
function mouseOutPortfolio(event){
  //document.body.style.background = backgroundColor;
  document.querySelector(".link-portfolio img").style.transform = "scale(1)";
}

function mouseOverResume(event){
  //document.body.style.background = backgroundColor;
  document.querySelector(".link-resume img").style.transform = "scale(1.2)";
}
function mouseOutResume(event){
  //document.body.style.background = backgroundColor;
  document.querySelector(".link-resume img").style.transform = "scale(1)";
}

function mouseOverContact(event){
  //document.body.style.background = backgroundColor;
  document.querySelector(".link-contact img").style.transform = "scale(1.2)";
}
function mouseOutGContact(event){
  //document.body.style.background = backgroundColor;
  document.querySelector(".link-contact img").style.transform = "scale(1)";
}

//smooth scroll 
window.smoothScroll = function(target) {
  var scrollContainer = target;
  do { //find scroll container
      scrollContainer = scrollContainer.parentNode;
      if (!scrollContainer) return;
      scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);
  
  var targetY = 0;
  do { //find the top of target relatively to the container
      if (target == scrollContainer) break;
      targetY += target.offsetTop;
  } while (target = target.offsetParent);
  
  scroll = function(c, a, b, i) {
      i++; if (i > 30) return;
      c.scrollTop = a + (b - a) / 30 * i;
      setTimeout(function(){ scroll(c, a, b, i); }, 20);
  }
  // start scrolling
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}



//return to top button
button = document.getElementById("returnToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 400) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}


































