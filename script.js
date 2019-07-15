var backgroundColor = "#333333";

var linkGithub;
var linkLinkedin;
var linkYoutube;
var linkPortfolio;
var linkResume;
var linkContact;

var linkDocumentObjects = [linkGithub, linkLinkedin, linkYoutube, linkPortfolio, linkResume, linkContact];
var linkClassSelectors = ['.link-github', '.link-linkedin', '.link-youtube', '.link-portfolio', '.link-resume', '.link-contact'];
var linkMouseOvers = [mouseOverGithub,mouseOverLinkedin,mouseOverYoutube,mouseOverPortfolio,mouseOverResume,mouseOverContact];
var linkMouseOuts = [mouseOutGithub,mouseOutLinkedin,mouseOutYoutube,mouseOutPortfolio,mouseOutResume,mouseOutGContact];

for (i = 0; i < linkDocumentObjects.length; i++){
	linkDocumentObjects[i] = document.querySelector(linkClassSelectors[i]);
	linkDocumentObjects[i].addEventListener("mouseover", linkMouseOvers[i]);
	linkDocumentObjects[i].addEventListener("mouseout", linkMouseOuts[i]);
}


function mouseOverGithub(event){
  document.getElementById("background").style.background = '#aaa';
}
function mouseOutGithub(event){
  document.getElementById("background").style.background = backgroundColor;
}

function mouseOverLinkedin(event){
  document.getElementById("background").style.background = '#0073b1';
}
function mouseOutLinkedin(event){
  document.getElementById("background").style.background = backgroundColor;
}

function mouseOverYoutube(event){
  document.getElementById("background").style.background = "#cc0000";
}
function mouseOutYoutube(event){
  document.getElementById("background").style.background = backgroundColor;
}

function mouseOverPortfolio(event){
  document.getElementById("background").style.background = "#cc8100";
}
function mouseOutPortfolio(event){
  document.getElementById("background").style.background = backgroundColor;
}

function mouseOverResume(event){
  document.getElementById("background").style.background = "#00b10c";
}
function mouseOutResume(event){
  document.getElementById("background").style.background = backgroundColor;
}

function mouseOverContact(event){
  document.getElementById("background").style.background = "#5900b1";
}
function mouseOutGContact(event){
  document.getElementById("background").style.background = backgroundColor;
}










































