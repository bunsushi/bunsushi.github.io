$(document).ready(function () {

    // $('body').scrollspy({ target: '#bs-example-navbar-collapse-1' })

    var featuredProjects = [
        {
            name: "Get Spaced",
            image: "assets/images/get-spaced.jpg",
            url: "https://bunsushi.github.io/Hangman-Game"
        },
        {
            name: "You Have a Gambling Problem",
            image: "assets/images/gambling-problem.jpg",
            url: "https://bunsushi.github.io/week-4-project"
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