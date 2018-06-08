$(document).ready(function () {

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            // $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    var featuredProjects = [
        {
            name: "sadhana",
            image: "assets/images/sadhana.png",
            square_image: "assets/images/sadhana-square.png",
            url: "https://mysadhana.herokuapp.com",
            repository: "https://github.com/bunsushi/sadhana",
            featured: true,
            description: "A daily practice journal to help you achieve your goals.",
            tags: ["Express.js, Node.js, MySQL"]
        },
        {
            name: "Pie a la Node",
            image: "assets/images/pie-a-la-node.PNG",
            square_image: "assets/images/pie-a-la-node-square.PNG",
            url: "https://piealanode.herokuapp.com",
            repository: "https://github.com/bunsushi/pie-a-la-node",
            featured: false,
            description: "DIY pie menu generator with MySQL.",
            tags: ["Express.js, Node.js, MySQL"]
        },
        {
            name: "Bash Boutique",
            // image: "assets/images/bash-boutique.png",
            square_image: "assets/images/bash-boutique-square.png",
            url: "https://github.com/bunsushi/bash-boutique",
            repository: "https://github.com/bunsushi/bash-boutique",
            featured: false,
            description: "A CLI shop simulator.",
            tags: ["Node.js", "MySQL"]
        },
        {
            name: "Hey LIRI",
            // image: "assets/images/hey-liri.png",
            square_image: "assets/images/hey-liri-square.png",
            url: "https://github.com/bunsushi/hey-LIRI",
            repository: "https://github.com/bunsushi/hey-LIRI",
            featured: false,
            description: "A simple command-line application.",
            tags: ["Node.js", "Twitter API", "Spotify API"]
        },
        {
            name: "@mesobotamia",
            // image: "assets/images/mesobotamia.png",
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
            // square_image: "assets/images/gplaypattern.png",
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
            name: "Gambling Problem",
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
            // var highlight = $("<div class='row highlight'>");

            // var highlightImage = $("<div class='col-md-7'>");
            // var highlightTitle = $("<div class='col-md-5 highlight-child'>");

            var displayFeaturedProjects = $("<img>");
            displayFeaturedProjects.attr("src", featuredProjects[i].image);
            displayFeaturedProjects.addClass("featured-image");

            var squareImageOne = $("<img>");
            squareImageOne.attr("src", featuredProjects[i].square_image);
            squareImageOne.addClass("featured-square-image");

            projectContainer.append(displayFeaturedProjects);
            // projectContainer.append(squareImageOne);

            // Container for project details
            var projectDetails = $("<div>");
            projectDetails.addClass("project-details");

            // Header
            var projectTitle = $("<h2>");
            projectTitle.text(featuredProjects[i].name);

            // Description paragraph
            var projectDescription = $("<p>");
            projectDescription.append(featuredProjects[i].description);

            // Link button to deployed project
            var deployedButton = $("<button>");
            deployedButton.html("Demo");
            deployedButton.addClass("more-portfolio");
            $(featuredProjectLink).append(deployedButton);

            // Link button to project code
            var codeButton = $("<button>");
            codeButton.html("Code");
            codeButton.addClass("more-portfolio");
            $(githubLink).append(codeButton);

            projectDetails.append(projectTitle);
            projectDetails.append(projectDescription);
            projectDetails.append(featuredProjectLink);
            projectDetails.append(githubLink);
            projectContainer.append(projectDetails);



            // highlightTitle.append(projectTitle);
            // highlightTitle.append(projectDescription);
            // highlightTitle.append(featuredProjectLink);
            // highlightTitle.append(githubLink);
            // highlight.append(highlightTitle);

            // projectContainer.append(highlight);

            if (featuredProjects[i].featured === true) {
                $("#projects").append(projectContainer);
            }
        }
    }

    // GENERATE OTHER PROJECTS
    function displayOtherProjects() {
        var projectStart = $("<div>");
        projectStart.addClass("project-start");

        $("#other-projects").append(projectStart);

        for (var i = 0; i < featuredProjects.length; i++) {
            // Link to deployed project
            var featuredProjectLink = $("<a>");
            featuredProjectLink.attr("target", "_blank");
            featuredProjectLink.attr("href", featuredProjects[i].url);

            // Link to GitHub repository
            var githubLink = $("<a>");
            githubLink.attr("target", "_blank");
            githubLink.attr("href", featuredProjects[i].repository);

            // Container div for project
            var projectContainer = $("<div>");
            projectContainer.addClass("project-summary");

            // Display square image for associated project
            var displayFeaturedProjects = $("<img>");
            displayFeaturedProjects.addClass("featured-project");
            displayFeaturedProjects.attr("src", featuredProjects[i].square_image);

            // Opaque overlay for square image
            var overlay = $("<div>");
            overlay.addClass("overlay");

            // Display project title
            var displayProjectTitle = $("<div>");
            displayProjectTitle.addClass("project-title");
            displayProjectTitle.html("<h4>" + featuredProjects[i].name);

            $(overlay).append(displayFeaturedProjects);
            $(overlay).append(displayProjectTitle);

            // Link button to deployed project
            var deployedButton = $("<button>");
            deployedButton.html("<span><i class='fas fa-laptop'></i></span>");
            deployedButton.addClass("more-other");
            $(featuredProjectLink).append(deployedButton);

            // Link button to project code
            var codeButton = $("<button>");
            codeButton.html("<span><i class='fas fa-code'></i></span>");
            codeButton.addClass("more-other");
            $(githubLink).append(codeButton)

            var displayProjectLinks = $("<div>");
            displayProjectLinks.addClass("other-links");

            $(displayProjectLinks).append(featuredProjectLink);
            $(displayProjectLinks).append(githubLink);

            $(displayProjectTitle).append(displayProjectLinks);
            $(projectContainer).append(overlay);

            if (featuredProjects[i].featured === false) {
                $("#other-projects").append(projectContainer);

            }

        }

        var projectEnd = $("<div>");
        projectEnd.addClass("project-end");

        $("#other-projects").append(projectEnd);

    }

    function generateProjectInfo() {

    }

    displayFeaturedProjects();

    displayOtherProjects();

});