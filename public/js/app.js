function createProjects() {


    for (let i=0; i < projects.length; i++) {

        const {name, url, tools, github, description, image} = projects[i];

        
        let newHr = $("<hr>");
        
        let newProject = $("<div>").addClass("col-4 project-box");
        let newCard = $("<div>").addClass("card project");
        let newWebLink = $("<a>").attr({href: url, target: "_blank"});
        let newImage = $("<img>").addClass("card-img-top").attr("src", image);
        let newCardBody = $("<div>").addClass("card-body");
        let newTitle = $("<h5>").addClass("card-title").text(name);
        let newSubTitle = $("<h6>").addClass("card-subtitle").text(tools);
        let newDescription = $("<p>").addClass("card-text").text(description);
        let newLink = $("<a>").addClass("card-link").attr({href: github, target: "_blank"});
        let newGithubImage = $(`<svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24">
        <path
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>`);

        newLink.append(newGithubImage);
        newCardBody.append(newTitle, newHr, newSubTitle, newDescription, newLink);
        newWebLink.append(newImage);
        newCard.append(newWebLink, newCardBody);
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
