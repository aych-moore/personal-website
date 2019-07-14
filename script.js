var backgroundColor = "#333333";

var linkGithub = document.querySelector('.link-github');
var linkLinkedin = document.querySelector('.link-linkedin');
var linkYoutube = document.querySelector('.link-youtube');
var linkPortfolio = document.querySelector('.link-portfolio');
var linkResume = document.querySelector('.link-resume');
var linkContact = document.querySelector('.link-contact');

linkGithub.addEventListener("mouseover", mouseOverGithub);
linkGithub.addEventListener("mouseout", mouseOutGithub);
linkLinkedin.addEventListener("mouseover", mouseOverLinkedin);
linkLinkedin.addEventListener("mouseout", mouseOutLinkedin);
linkYoutube.addEventListener("mouseover", mouseOverYoutube);
linkYoutube.addEventListener("mouseout", mouseOutYoutube);
linkPortfolio.addEventListener("mouseover", mouseOverPortfolio);
linkPortfolio.addEventListener("mouseout", mouseOutPortfolio);
linkResume.addEventListener("mouseover", mouseOverResume);
linkResume.addEventListener("mouseout", mouseOutResume);
linkContact.addEventListener("mouseover", mouseOverContact);
linkContact.addEventListener("mouseout", mouseOutGContact);

function mouseOverGithub(event){
  document.getElementById("background").style.background = "black";
}
function mouseOutGithub(event){
  document.getElementById("background").style.background = backgroundColor;
}

function mouseOverLinkedin(event){
  document.getElementById("background").style.background = "blue";
}
function mouseOutLinkedin(event){
  document.getElementById("background").style.background = backgroundColor;
}

function mouseOverYoutube(event){
  document.getElementById("background").style.background = "red";
}
function mouseOutYoutube(event){
  document.getElementById("background").style.background = backgroundColor;
}

function mouseOverPortfolio(event){
  document.getElementById("background").style.background = "orange";
}
function mouseOutPortfolio(event){
  document.getElementById("background").style.background = backgroundColor;
}

function mouseOverResume(event){
  document.getElementById("background").style.background = "green";
}
function mouseOutResume(event){
  document.getElementById("background").style.background = backgroundColor;
}

function mouseOverContact(event){
  document.getElementById("background").style.background = "purple";
}
function mouseOutGContact(event){
  document.getElementById("background").style.background = backgroundColor;
}