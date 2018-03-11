$(document).ready(function () {

    var featuredProjects = [
        {
            name: "Trivia Game",
            image: "assets/images/trivia-game.png",
            url: "https://bunsushi.github.io/TriviaGame"
        },
        {
            name: "You Have a Gambling Problem",
            image: "assets/images/gambling-problem.JPG",
            url: "https://bunsushi.github.io/Gambling-Problem"
        },
        {
            name: "Get Spaced",
            image: "assets/images/get-spaced.JPG",
            url: "https://bunsushi.github.io/Get-Spaced-Hangman"
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