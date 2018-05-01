$(document).ready(function () {

    // ATTN REWORK THIS CODE SO THAT DIV FADES IN ONCE YOU HIT IT.
    // $(window).scroll(function() {
    //     var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    //     $(".hideme").each(function() {
    //       /* Check the location of each desired element */
    //     var objectBottom = $(this).offset().top;

    //       /* If the element is within bounds of the window, fade it in */
    //       if (objectBottom < windowBottom) { //object comes into view (scrolling down)
    //         if ($(this).css("opacity")==0) {$(this).fadeTo(800, 1);}
    //       } else { //object goes out of view (scrolling up)
    //         if ($(this).css("opacity")==1) {$(this).fadeTo(800, 0);}
    //       }
    //     });
    //   }).scroll(); //invoke scroll-handler on page-load

var featuredProjects = [
    {
        name: "Bash Boutique",
        image: "assets/images/bash-boutique-square.png",
        square_image: "assets/images/bash-boutique-square.png",
        url: "https://github.com/bunsushi/bash-boutique",
        repository: "https://github/bunsushi/bash-boutique",
        featured: false,
        description: "A CLI shop simulator.",
        tags: ["Node.js", "MySQL"]
    },
    {
        name: "Hey LIRI",
        image: "assets/images/hey-liri-square.png",
        square_image: "assets/images/hey-liri-square.png",
        url: "https://github.com/bunsushi/hey-LIRI",
        repository: "https://github.com/bunsushi/hey-LIRI",
        featured: false,
        description: "A simple command-line application.",
        tags: ["Node.js", "Twitter API", "Spotify API"]
    },
    {
        name: "@mesobotamia",
        image: "assets/images/mesobotamia-square.png",
        square_image: "assets/images/mesobotamia-square.png",
        url: "https://twitter.com/mesobotamia",
        repository: "https://github.com/bunsushi/Mesobotamia",
        featured: false,
        description: "A Twitter bot: esoteric wisdom and questionable advice from your friendly neighborhood Sumerian.",
        tags: ["JavaScript", "jQuery", "Node.js", "Twitter API"]
    },
    {
        name: "Cinemapp.r",
        image: "assets/images/cinemappr.png",
        url: "https://cinemappr.herokuapp.com",
        repository: "https://github.com/bunsushi/Cinemappr",
        featured: true,
        description: "An interactive movie theater location and showtime listing application integrated with Google Maps.",
        tags: ["HTML/CSS", "Bootstrap", "JavaScript", "jQuery", "Node.js", "Express", "Sass", "Google Maps API", "Gracenote API"]
    },
    {
        name: "SEPTA Trolley Tracker",
        image: "assets/images/trolley-tracker.png",
        square_image: "assets/images/trolley-tracker-square.png",
        url: "https://bunsushi.github.io/SEPTA-Trolley-Tracker",
        repository: "https://github.com/bunsushi/SEPTA-Trolley-Tracker",
        featured: false,
        description: "SEPTA Trolley Tracker is my dream transit time table, where all the trolleys arrive at a predictable time.",
        tags: ["HTML/CSS", "Bootstrap", "JavaScript", "jQuery", "Firebase", "NoSQL"]
    },
    {
        name: "Giphy RXN",
        image: "assets/images/giphy-rxn.png",
        url: "https://bunsushi.github.io/Giphy-RXN",
        square_image: "assets/images/giphy-rxn-square.png",        
        repository: "https://github.com/bunsushi/Giphy-RXN",
        featured: false,
        description: "Giphy RXN is a simple search tool for discovering gifs using the Giphy API.",
        tags: ["HTML/CSS", "Bootstrap", "JavaScript", "jQuery", "Giphy API"]
    },
    {
        name: "NYT Article Search",
        image: "assets/images/nyt-article-search.png",
        square_image: "assets/images/nyt-article-search-square.png",        
        url: "https://bunsushi.github.io/NYT-Article-Search",
        repository: "https://github.com/bunsushi/NYT-Article-Search",
        featured: false,
        description: "An application to fetch up to 10 top articles for a search term using the New York Times Article Search API.",
        tags: ["HTML/CSS", "Bootstrap", "JavaScript", "jQuery", "NYT API"]
    },
    {
        name: "Trivia Game",
        image: "assets/images/trivia-game.png",
        square_image: "assets/images/trivia-game-square.JPG",        
        url: "https://bunsushi.github.io/TriviaGame",
        repository: "https://github.com/bunsushi/TriviaGame",
        featured: false,
        description: "The trivia game is composed of 5 questions, each with 4 potential answers. The player has 20 seconds to answer a question.",
        tags: ["HTML/CSS", "Bootstrap", "JavaScript", "jQuery"]
    },
    {
        name: "You Have a Gambling Problem",
        image: "assets/images/gambling-problem.png",
        square_image: "assets/images/gambling-problem-square.JPG",        
        url: "https://bunsushi.github.io/Gambling-Problem",
        repository: "https://github.com/bunsushi/Gambling-Problem",
        featured: false,
        description: "A math guessing game. Choose one of four hidden cards to reveal its value and try to add up card values to match the randomly generated goal number.",
        tags: ["HTML/CSS", "Bootstrap", "JavaScript", "jQuery"]
    },
    {
        name: "Get Spaced",
        image: "assets/images/get-spaced.png",
        square_image: "assets/images/get-spaced-square.JPG",        
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

        var githubLink = $("<a>");
        githubLink.attr("target", "_blank");
        githubLink.attr("href", featuredProjects[i].repository);

        var projectContainer = $("<div>");
        projectContainer.addClass("project-container");
        var highlight = $("<div class='row highlight'>");

        var highlightImage = $("<div class='col-md-7'>");
        var highlightTitle = $("<div class='col-md-5 highlight-child'>");

        var displayFeaturedProjects = $("<img>");
        displayFeaturedProjects.attr("src", featuredProjects[i].image);
        displayFeaturedProjects.addClass("pull-left");
        highlightImage.append(displayFeaturedProjects);
        highlight.append(highlightImage);

        var projectTitle = $("<h1>");
        projectTitle.text(featuredProjects[i].name);

        var projectDescription = $("<div>");
        projectDescription.append("<p>" + featuredProjects[i].description);

        var deployedButton = $("<button>");
        deployedButton.html("Demo <span class='glyphicon glyphicon-arrow-right'>");
        deployedButton.addClass("more-portfolio");
        $(featuredProjectLink).append(deployedButton);

        var codeButton = $("<button>");
        codeButton.html("Code <span class='glyphicon glyphicon-arrow-right'>");
        codeButton.addClass("more-portfolio");
        $(githubLink).append(codeButton);

        highlightTitle.append(projectTitle);
        highlightTitle.append(projectDescription);
        highlightTitle.append(featuredProjectLink);
        highlightTitle.append(githubLink);
        highlight.append(highlightTitle);

        projectContainer.append(highlight);

        if (featuredProjects[i].featured === true) {
            $("#projects").append(projectContainer);
        }
    }
}

// GENERATE OTHER PROJECTS
function displayOtherProjects() {
    for (var i = 0; i < featuredProjects.length; i++) {
        var featuredProjectLink = $("<a>");
        featuredProjectLink.attr("target", "_blank");
        featuredProjectLink.attr("href", featuredProjects[i].url);

        var githubLink = $("<a>");
        githubLink.attr("target", "_blank");
        githubLink.attr("href", featuredProjects[i].repository);

        var projectContainer = $("<div>");
        projectContainer.addClass("project-summary");

        var projectTitle = $("<h3>");
        projectTitle.text(featuredProjects[i].name);

        var displayFeaturedProjects = $("<img>");
        displayFeaturedProjects.attr("src", featuredProjects[i].square_image);

        // var deployedButton = $("<button>");
        // deployedButton.html("Demo <span class='glyphicon glyphicon-arrow-right'>");
        // deployedButton.addClass("more-portfolio");
        // $(featuredProjectLink).append(deployedButton);

        var codeButton = $("<button>");
        codeButton.html("Code <span class='glyphicon glyphicon-arrow-right'>");
        codeButton.addClass("more-portfolio");
        $(githubLink).append(codeButton);

        $(featuredProjectLink).append(displayFeaturedProjects);
        $(featuredProjectLink).append(projectTitle);
        $(projectContainer).append(featuredProjectLink);                        
        // $(projectContainer).append(featuredProjectLink);
        // $(projectContainer).append(githubLink);

        if (featuredProjects[i].featured === false) {
            $("#other-projects").append(projectContainer);
        }

    }
}

function generateProjectInfo() {
    
}

displayFeaturedProjects();

displayOtherProjects();

});