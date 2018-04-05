$(document).ready(function () {

    // ATTN REWORK THIS CODE SO THAT DIV FADES IN ONCE YOU HIT IT.
    $(window).scroll(function() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".hideme").each(function() {
          /* Check the location of each desired element */
        var objectBottom = $(this).offset().top;

          /* If the element is within bounds of the window, fade it in */
          if (objectBottom < windowBottom) { //object comes into view (scrolling down)
            if ($(this).css("opacity")==0) {$(this).fadeTo(800, 1);}
          } else { //object goes out of view (scrolling up)
            if ($(this).css("opacity")==1) {$(this).fadeTo(800, 0);}
          }
        });
      }).scroll(); //invoke scroll-handler on page-load

var featuredProjects = [
    {
        name: "Cinemapp.r",
        image: "assets/images/cinemappr.png",
        url: "https://bunsushi.github.io/Cinemappr",
        repository: "https://cinemappr.herokuapp.com",
        featured: true,
        description: "An interactive movie theater location and showtime listing application integrated with Google Maps.",
        tags: ["HTML/CSS", "Bootstrap", "JavaScript", "jQuery", "Node.js", "Express", "Sass", "Google Maps API", "Gracenote API"]
    },
    {
        name: "SEPTA Trolley Tracker",
        image: "assets/images/trolley-tracker.png",
        url: "https://bunsushi.github.io/SEPTA-Trolley-Tracker",
        repository: "https://github.com/bunsushi/SEPTA-Trolley-Tradker",
        featured: false,
        description: "SEPTA Trolley Tracker is my dream transit time table, where all the trolleys arrive at a predictable time.",
        tags: ["HTML/CSS", "Bootstrap", "JavaScript", "jQuery", "Firebase", "NoSQL"]
    },
    {
        name: "Giphy RXN",
        image: "assets/images/giphy-rxn.png",
        url: "https://bunsushi.github.io/Giphy-RXN",
        repository: "https://github.com/bunsushi/Giphy-RXN",
        featured: false,
        description: "Giphy RXN is a simple search tool for discovering gifs using the Giphy API.",
        tags: ["HTML/CSS", "Bootstrap", "JavaScript", "jQuery", "Giphy API"]
    },
    {
        name: "NYT Article Search",
        image: "assets/images/nyt-article-search.png",
        url: "https://bunsushi.github.io/NYT-Article-Search",
        repository: "https://github.com/bunsushi/NYT-Article-Search",
        featured: false,
        description: "An application to fetch up to 10 top articles for a search term using the New York Times Article Search API.",
        tags: ["HTML/CSS", "Bootstrap", "JavaScript", "jQuery", "NYT API"]
    },
    {
        name: "Trivia Game",
        image: "assets/images/trivia-game.png",
        url: "https://bunsushi.github.io/TriviaGame",
        repository: "https://github.com/bunsushi/TriviaGame",
        featured: false,
        description: "The trivia game is composed of 5 questions, each with 4 potential answers. The player has 20 seconds to answer a question.",
        tags: ["HTML/CSS", "Bootstrap", "JavaScript", "jQuery"]
    },
    {
        name: "You Have a Gambling Problem",
        image: "assets/images/gambling-problem.png",
        url: "https://bunsushi.github.io/Gambling-Problem",
        repository: "https://github.com/bunsushi/Gambling-Problem",
        featured: false,
        description: "A math guessing game. Choose one of four hidden cards to reveal its value and try to add up card values to match the randomly generated goal number.",
        tags: ["HTML/CSS", "Bootstrap", "JavaScript", "jQuery"]
    },
    {
        name: "Get Spaced",
        image: "assets/images/get-spaced.png",
        url: "https://bunsushi.github.io/Get-Spaced-Hangman",
        repository: "https://github.com/bunsushi/Get-Spaced-Hangman",
        featured: false,
        description: "A vanilla JavaScript hangman game with a solar system objects theme. Comes with three missions: Planets, Solar System, and Milky Way.",
        tags: ["HTML/CSS", "Bootstrap", "JavaScript"]
    }]

// GENERATE FEATURED PROJECTS
function displayFeaturedProjects() {
    for (var i = 0; i < featuredProjects.length; i++) {
        var featuredProjectLink = $("<a>");
        featuredProjectLink.attr("target", "_blank");
        featuredProjectLink.attr("href", featuredProjects[i].url);

        var projectContainer = $("<div>");
        projectContainer.addClass("project-container");

        var displayFeaturedProjects = $("<img>");
        displayFeaturedProjects.addClass("featured-project");
        displayFeaturedProjects.attr("src", featuredProjects[i].image);

        var overlay = $("<div>");
        overlay.addClass("overlay");

        var displayProjectTitle = $("<div>");
        displayProjectTitle.addClass("project-title");
        displayProjectTitle.html("<h3>" + featuredProjects[i].name);

        $(overlay).append(displayProjectTitle);
        $(projectContainer).append(displayFeaturedProjects);
        $(projectContainer).append(overlay);

        $(featuredProjectLink).append(projectContainer)

        if (featuredProjects[i].featured === true) {
            $("#projects").append(featuredProjectLink);
        }
    }
}

// GENERATE OTHER PROJECTS
function displayOtherProjects() {
    for (var i = 0; i < featuredProjects.length; i++) {
        var featuredProjectLink = $("<a>");
        featuredProjectLink.attr("target", "_blank");
        featuredProjectLink.attr("href", featuredProjects[i].url);

        var projectContainer = $("<div>");
        projectContainer.addClass("project-summary");

        var projectTitle = $("<h3>");
        projectTitle.text(featuredProjects[i].name);

        var projectDescription = $("<div>");
        projectDescription.append("<p>" + featuredProjects[i].description);

        var displayFeaturedProjects = $("<img>");
        displayFeaturedProjects.attr("src", featuredProjects[i].image);

        var deployedButton = $("<button>");
        deployedButton.html("Demo <span class='glyphicon glyphicon-arrow-right'>");
        deployedButton.addClass("more-portfolio");
        $(featuredProjectLink).append(deployedButton);


        $(projectContainer).append(displayFeaturedProjects);
        $(projectContainer).append(projectTitle);        
        $(projectContainer).append(projectDescription);
        $(projectContainer).append(featuredProjectLink);

        if (featuredProjects[i].featured === false) {
            $("#other-projects").append(projectContainer);
        }

    }
}

displayFeaturedProjects();

displayOtherProjects();

});