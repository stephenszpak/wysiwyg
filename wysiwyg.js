var famousPeople = [{
    title: "Mr.",
    name: "Borat",
    bio: "Its-a very nice!",
    image: "images/borat.jpg",
    lifespan: {
        birth: 1975,
        death: ''
    }
}, {
    title: "Ms.",
    name: "Elanore",
    bio: "Socks are my favorite thing",
    image: "images/elanore.jpg",
    lifespan: {
        birth: 2010,
        death: ''
    }
}];

var outputPerson = document.getElementById("peeps");

for (var i = 0; i < famousPeople.length; i++) {

	var personInfo = "";
	personInfo += "<div class='person-style'>"
	personInfo += "<header class='odd'>" + famousPeople[i].title + famousPeople[i].name + "</header>";
    personInfo += "<div class='even'>"
	personInfo += "<img src=" + famousPeople[i].image + ">";
    personInfo += "</div>"
	personInfo += "<div class='odd'>" + famousPeople[i].bio + "</div>";
	personInfo += "<div class='even'>" + famousPeople[i].lifespan.birth + famousPeople[i].lifespan.death + "</div>";
    personInfo += "</div>";

	outputPerson.innerHTML += personInfo;

};

var personContainer = document.getElementsByClassName("person-style");
var userInput = document.getElementById("userInput");

for (var i = 0; i < personContainer.length; i++) {
  personContainer[i].addEventListener("click", function(event) {
    for (var x = 0; x < personContainer.length; x++) {
      personContainer[x].classList.remove('dotted-border');
    }
    event.currentTarget.classList.add('dotted-border');
    userInput.focus();
  });
}


