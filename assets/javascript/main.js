$(document).ready(function () {

    var featuredProjects = [
        {
            name: "Giphy RXN",
            image: "assets/images/giphy-rxn.png",
            url: "https://bunsushi.github.io/Giphy-RXN",
            featured: false,
            tags: ["HTML5", "CSS3", "Bootstrap", "Javascript", "jQuery", "API", "Ajax"]
        }
        {   
            name: "NYT Article Search",
            image: "assets/images/nyt-article-search.png",
            url: "https://bunsushi.github.io/NYT-Article-Search",
            featured: false,
            tags: ["HTML5", "CSS3", "Bootstrap", "Javascript", "jQuery", "API", "Ajax"]
        },
        {
            name: "Trivia Game",
            image: "assets/images/trivia-game.JPG",
            url: "https://bunsushi.github.io/TriviaGame",
            featured: true,
            tags: ["HTML5", "CSS3", "Bootstrap", "Javascript", "jQuery"]
        },
        {
            name: "You Have a Gambling Problem",
            image: "assets/images/gambling-problem.JPG",
            url: "https://bunsushi.github.io/Gambling-Problem",
            featured: true,
            tags: ["HTML5", "CSS3", "Bootstrap", "Javascript", "jQuery"]
        },
        {
            name: "Get Spaced",
            image: "assets/images/get-spaced.JPG",
            url: "https://bunsushi.github.io/Get-Spaced-Hangman",
            featured: true,
            tags: ["HTML5", "CSS3", "Bootstrap", "Javascript"]
        }]
    
    // GENERATE FEATURED PROJECTS
    function displayProjects() {
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

            $("#recent-projects").append(featuredProjectLink);
            // $("#recent-projects").append(projectContainer);

            if (featuredProjects[i].featured === true) {
                $("#projects").append(featuredProjectLink);
                // $("#projects").append(projectContainer);
            }
        }
    }

    displayProjects();

});