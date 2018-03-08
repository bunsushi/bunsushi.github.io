$(document).ready(function () {

    var featuredProjects = [
        {
            name: "Trivia Game",
            image: "assets/images/trivia-game.png",
            url: "https://bunsushi.github.io/TriviaGame/index.html"
        },
        {
            name: "You Have a Gambling Problem",
            image: "assets/images/gambling-problem.JPG",
            url: "https://bunsushi.github.io/week-4-game"
        },
        {
            name: "Get Spaced",
            image: "assets/images/get-spaced.JPG",
            url: "https://bunsushi.github.io/Hangman-Game"
        }]

    // GENERATE FEATURED PROJECTS
    function displayProjects() {
        for (var i = 0; i < featuredProjects.length; i++) {
            var featuredProjectLink = $("<a>");
            featuredProjectLink.attr("target", "_blank");
            featuredProjectLink.attr("href", featuredProjects[i].url);

            var displayFeaturedProjects = $("<img>");
            displayFeaturedProjects.addClass("featured-project");
            displayFeaturedProjects.attr("src", featuredProjects[i].image);
            $(featuredProjectLink).append(displayFeaturedProjects);
            $("#projects").append(featuredProjectLink);
            $("#recent-projects").append(featuredProjectLink);
        }
    }

    displayProjects();


});