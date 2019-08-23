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
  document.body.style.background = backgroundColor;
}
function mouseOutGithub(event){
  document.body.style.background = backgroundColor;
}

function mouseOverLinkedin(event){
  document.body.style.background = backgroundColor;
}
function mouseOutLinkedin(event){
  document.body.style.background = backgroundColor;
}

function mouseOverYoutube(event){
  document.body.style.background = backgroundColor;
  document.getElementById("letterboxing-top").style.height = "7vh";
  document.getElementById("letterboxing-bottom").style.height = "7vh";
}
function mouseOutYoutube(event){
  document.body.style.background = backgroundColor;
  document.getElementById("letterboxing-top").style.height = "0vh";
  document.getElementById("letterboxing-bottom").style.height = "0vh";
}

function mouseOverPortfolio(event){
  document.body.style.background = backgroundColor;
}
function mouseOutPortfolio(event){
  document.body.style.background = backgroundColor;
}

function mouseOverResume(event){
  document.body.style.background = backgroundColor;
}
function mouseOutResume(event){
  document.body.style.background = backgroundColor;
}

function mouseOverContact(event){
  document.body.style.background = backgroundColor;
}
function mouseOutGContact(event){
  document.body.style.background = backgroundColor;
}










































