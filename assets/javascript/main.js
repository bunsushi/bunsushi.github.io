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

    $(window).scroll(function () {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".hideme").each(function () {
            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top;

            /* If the element is within bounds of the window, fade it in */
            if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                if ($(this).css("opacity") == 0) {
                    $(this).fadeTo(2000, 1);
                }
            }
        });
    }).scroll(); //invoke scroll-handler on page-load

    // TODO: If #glance section is visible, trigger shape animations by adding a new class

    var featuredProjects = [
        {
            name: "Gilgamesh Versus",
            image: "assets/images/gilgamesh-versus.png",
            square_image: "assets/images/gilgamesh-versus-square.png",
            url: "https://gilgameshversus.herokuapp.com",
            repository: "https://github.com/bunsushi/Gilgamesh-Versus",
            featured: true,
            description: "A role-playing game inspired by the ancient Mesopotamian story, the Epic of Gilgamesh.",
            fulldescription: `Gilgamesh Versus is a single-player role playing game (RPG) loosely adapted from the ancient Mesopotamian story The Epic of Gilgamesh. Play as Gilgamesh, rule the city of Uruk, fight demons and gods with your best friend, and contemplate the meaning of life. Gilgamesh Versus has eleven "tablets" which are broken up into several distinct levels, corresponding roughly to the story as written in the first eleven tablets of the standard Babylonian version of the epic. It is built with Phaser 3 (game engine), React, Express, Node, and MongoDB. I work as the project lead of a core team of three.` + `<br><br>` + `Currently, Tablet I, which contains three levels, is under active development. The first level is a side-scrolling platform game (similar to Mario), which serves as an introduction to the misdeeds of the king of Uruk, Gilgamesh. As Gilgamesh, you must collect coins and find a mace to rob the citizens of Uruk while avoiding dangerous flies (Mesopotamian gods) and water hazards.` + `<br></br>` + `In level 2, as punishment for bad behavior, the gods send the wild man Enkidu to stop Gilgamesh from oppressing his people. Gilgamesh must now explore the top-down city map of Uruk and solve a series of mini-games in order to gain the keys to the city gates and prepare for battle against Enkidu. These mini-games include learning how to brew beer, base-60 math, and basic Sumerian.` + `<br></br>` + `Finally, after the player has completed all of the mini-games within the top-down city of Uruk, Gilgamesh must find the city gate and solve a simple puzzle or riddle. Once he has solved this, Tablet I of the game ends...who will he find on the other side of the gate?`,
            tags: ["Full Stack", "React", "Phaser 3", "MongoDB", "Express", "Node", "Authentication", "JavaScript", "HTML/CSS"]
        },
        {
            name: "Totes Ma Goats",
            square_image: "assets/images/totes-ma-goats-square.png",
            url: "https://totesmagoats.herokuapp.com",
            repository: "https://github.com/bunsushi/totes-ma-goats",
            featured: false,
            description: "A very goat memory game.",
            tags: ["HTML/CSS", "React", "Bootstrap", "JavaScript", "Node"]
        },
        // {
        //     name: "Near East Bureau",
        //     square_image: "assets/images/near-east-bureau-square.png",
        //     url: "https://neareastbureau.herokuapp.com",
        //     repository: "https://github.com/bunsushi/near-east-bureau",
        //     featured: false,
        //     description: "An interactive news aggregator for current events in the Middle East.",
        //     tags: ["HTML/CSS", "Bootstrap", "JavaScript", "Node", "Express", "Web scraping", "Axios"]
        // },
        {
            name: "sadhana",
            image: "assets/images/sadhana.png",
            square_image: "assets/images/sadhana-square.png",
            url: "https://mysadhana.herokuapp.com",
            repository: "https://github.com/bunsushi/sadhana",
            featured: true,
            description: "A daily practice journal to help you achieve your goals.",
            fulldescription: "Sadhana is a personal productivity application for making goals into habits and keeping track of daily tasks, plus a pomodoro timer for when it's time to focus. Sadhana encourages you to work towards goals by automatically generating habit goals as tasks on the days you want and creates a responsive visual record of your progress at the top of the page." + "<br><br>" + "I worked on a team of three developers. I was responsible for the original idea and both front-end and back-end development. I spent most of my time developing the database to save and update an individual's goal habits and daily tasks and rendering that data on the DOM in an intuitive and interactive manner. I also designed the UI/UX for the application." + "<br><br>" + "We used the Node package Passport for user authentication, which I especially liked because it stored hashed user passwords within our database for added security.",
            tags: ["Full Stack", "HTML/CSS", "Handlebars", "Bootstrap", "JavaScript", "jQuery", "Node", "Express", "MySQL", "Authentication"]
        },
        {
            name: "Pie a la Node",
            image: "assets/images/pie-a-la-node.png",
            square_image: "assets/images/pie-a-la-node-square.png",
            url: "https://piealanode.herokuapp.com",
            repository: "https://github.com/bunsushi/pie-a-la-node",
            featured: false,
            description: "DIY pie menu generator with MySQL.",
            tags: ["Express.js", "Node.js", "MySQL"]
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
            tags: ["Node.js", "API"]
        },
        {
            name: "@mesobotamia",
            // image: "assets/images/mesobotamia.png",
            square_image: "assets/images/mesobotamia-square.png",
            url: "https://twitter.com/mesobotamia",
            repository: "https://github.com/bunsushi/Mesobotamia",
            featured: false,
            description: "A Twitter bot: esoteric wisdom and questionable advice from your friendly neighborhood Sumerian.",
            tags: ["JavaScript", "jQuery", "Node.js", "API"]
        },
        {
            name: "Cinemapp.r",
            image: "assets/images/cinemappr.png",
            // square_image: "assets/images/gplaypattern.png",
            url: "https://cinemappr.herokuapp.com",
            repository: "https://github.com/bunsushi/Cinemappr",
            featured: true,
            description: "An interactive movie theater location and showtime listing application integrated with Google Maps.",
            fulldescription: "Cinemapp.r used Gracenote's Local Theaters API to retrieve information on movies playing in theaters within a 5 mile radius of a zipcode. We used the Google Maps API to plot the theaters." + "<br><br>" + "My primary role was to convert the Theaters API response, which was organized by movie title, to an array of objects organized by movie theater, with individual movies and showtimes nested. I also narrowed search results to an individual movie and/or theater and made the location pins interactive by displaying the corresponding theater information when clicked." + "<br><br>" + "I worked on a team of four developers. I was responsible for the original idea and front-end development.",
            tags: ["Full Stack", "HTML/CSS", "Bootstrap", "JavaScript", "jQuery", "Node", "Express", "Sass", "API"]
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
            tags: ["HTML/CSS", "Bootstrap", "JavaScript", "jQuery", "API"]
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
            projectContainer.addClass("project-container");

            // Container holder for image
            var imageHolder = $("<div>");
            imageHolder.addClass("featured-image");

            // Container for additional project information
            var infoHolder = $("<div>");
            infoHolder.addClass("more-information");

            var moreDescription = $("<p>");
            moreDescription.append(featuredProjects[i].fulldescription);
            infoHolder.append(moreDescription);

            // Display image for featured project
            var displayFeaturedProjects = $("<img>");
            displayFeaturedProjects.attr("src", featuredProjects[i].image);

            imageHolder.append(displayFeaturedProjects);
            imageHolder.append(infoHolder);
            projectContainer.append(imageHolder);

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

            // Tag container
            var tagContainer = $("<div>");
            tagContainer.addClass("tech-container");

            // Technology tags
            for (var j = 0; j < featuredProjects[i].tags.length; j++) {
                var techTag = $("<div>");
                techTag.addClass("tech-tag");
                techTag.text(featuredProjects[i].tags[j]);
                tagContainer.append(techTag);
            }

            projectDetails.append(tagContainer);
            projectContainer.append(projectDetails);

            if (featuredProjects[i].featured === true) {
                $("#projects").append(projectContainer);
            }
        }
    }

    // GENERATE OTHER PROJECTS
    function displayOtherProjects() {
        var projectStart = $("<div>");
        projectStart.addClass("project-start project-summary");

        // $("#other-projects").append(projectStart);

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
        // projectEnd.addClass("project-end project-summary");

        $("#other-projects").append(projectEnd);

    }

    // function generateProjectInfo() {

    // }

    displayFeaturedProjects();

    displayOtherProjects();

});