function createProjects() {

    for (let i=0; i < projects.length; i++) {

        const {name, url, tools, github, description, image} = projects[i];
        
        let newProject = $("<div>").addClass("col-sm-4 project-box");
        let newCard = $("<div>").addClass("card project");
        let newImage = $("<img>").addClass("card-img-top").attr("src", image)
        let newCardBody = $("<div>").addClass("card-body");
        let newTitle = $("<h5>").addClass("card-title").text(name);
        let newSubTitle = $("<h6>").addClass("card-subtitle").text(tools);
        let newDescription = $("<p>").addClass("card-text").text(description);
        let newLink = $("<a>").addClass("card-link").text("Github").attr("href", url);

        newCardBody.append(newTitle, newSubTitle, newDescription, newLink);
        newCard.append(newImage, newCardBody);
        newProject.append(newCard);
        $(".projects").append(newProject);
    }
}

$(document).ready(function() {
    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        if (scroll > 500) {
          $(".links").css("background" , "white").css("border-bottom", "1px solid #fb00b5").css("box-shadow", "0px 5px 10px 2px rgba(0, 0, 0, 0.5)")
        }
  
        else{
            $(".links").css("background" , "rgba(0,0,0,0)").css("border", "none").css("box-shadow", "none");  	
        }
    })

    createProjects();
 });
