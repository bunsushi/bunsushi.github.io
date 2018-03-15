$(document).ready(function () {

    var featuredProjects = [
        {
            name: "Giphy RXN",
            image: "assets/images/giphy-rxn.png",
            url: "https://bunsushi.github.io/Giphy-RXN",
            featured: false,
            description: "Giphy RXN is a simple search tool for discovering gifs using the Giphy API. Click on a suggested tag or create one of your own using the search bar. Clicking on a tag will display up to 10 gifs from Giphy. Searching for a tag will automatically display relevant gifs and add that tag to your searches. Giphy RXN has nine suggested tags with a science and technology theme to get you started, but the sky's limit.",
            tags: ["HTML5", "CSS3", "Bootstrap", "Javascript", "jQuery", "API", "Ajax"]
        },
        {   
            name: "NYT Article Search",
            image: "assets/images/nyt-article-search.png",
            url: "https://bunsushi.github.io/NYT-Article-Search",
            featured: false,
            description: "An application to fetch 1-10 top articles for a search term using the New York Times Article Search API. The search filters are: keyword, start date, end date, and number of articles to retrieve. Each article pulled includes the headline information, date of publication, a short summary, and a link to the full article on nytimes.com.",
            tags: ["HTML5", "CSS3", "Bootstrap", "Javascript", "jQuery", "API", "Ajax"]
        },
        {
            name: "Trivia Game",
            image: "assets/images/trivia-game.JPG",
            url: "https://bunsushi.github.io/TriviaGame",
            featured: true,
            description: "The trivia game is composed of 5 questions, each with 4 potential answers. The player has 20 seconds to answer a question. After a player has submitted a guess or time runs out, the correct answer is displayed for 5 seconds. At the end of the game, the total number of correct answers is displayed and the player has the option to play again.",
            tags: ["HTML5", "CSS3", "Bootstrap", "Javascript", "jQuery"]
        },
        {
            name: "You Have a Gambling Problem",
            image: "assets/images/gambling-problem.JPG",
            url: "https://bunsushi.github.io/Gambling-Problem",
            featured: true,
            description: "",
            tags: ["HTML5", "CSS3", "Bootstrap", "Javascript", "jQuery"]
        },
        {
            name: "Get Spaced",
            image: "assets/images/get-spaced.JPG",
            url: "https://bunsushi.github.io/Get-Spaced-Hangman",
            featured: true,
            description: "",
            tags: ["HTML5", "CSS3", "Bootstrap", "Javascript"]
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

    // GENERATE FEATURED PROJECTS
    function displayAllProjects() {
        for (var i = 0; i < featuredProjects.length; i++) {
            var featuredProjectLink = $("<a>");
            featuredProjectLink.attr("target", "_blank");
            featuredProjectLink.attr("href", featuredProjects[i].url);

            var projectContainer = $("<div>");
            projectContainer.addClass("project-summary");

            var projectTitle = $("<h2>");
            projectTitle.text(featuredProjects[i].name);

            var projectDescription = $("<div>");
            projectDescription.append("<p>" + featuredProjects[i].description);

            var displayFeaturedProjects = $("<img>");
            displayFeaturedProjects.attr("src", featuredProjects[i].image);

            var deployedButton = $("<button>");
            deployedButton.html("Deployed Project <span class='glyphicon glyphicon-arrow-right'>");
            deployedButton.addClass("more-portfolio");
            $(featuredProjectLink).append(deployedButton);


            $(projectContainer).append(projectTitle);
            $(projectContainer).append(displayFeaturedProjects);
            $(projectContainer).append(projectDescription);
            $(projectContainer).append(featuredProjectLink);

            $("#recent-projects").append(projectContainer);

        }
    }

    displayFeaturedProjects();

    displayAllProjects();

});