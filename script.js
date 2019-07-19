let backgroundColor = "#333333";

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
  document.body.style.background = '#aaa';
}
function mouseOutGithub(event){
  document.body.style.background = backgroundColor;
}

function mouseOverLinkedin(event){
  document.body.style.background = '#0073b1';
}
function mouseOutLinkedin(event){
  document.body.style.background = backgroundColor;
}

function mouseOverYoutube(event){
  document.body.style.background = "#cc0000";
}
function mouseOutYoutube(event){
  document.body.style.background = backgroundColor;
}

function mouseOverPortfolio(event){
  document.body.style.background = "#cc8100";
}
function mouseOutPortfolio(event){
  document.body.style.background = backgroundColor;
}

function mouseOverResume(event){
  document.body.style.background = "#cccccc";
}
function mouseOutResume(event){
  document.body.style.background = backgroundColor;
}

function mouseOverContact(event){
  document.body.style.background = "#5900b1";
}
function mouseOutGContact(event){
  document.body.style.background = backgroundColor;
}










































