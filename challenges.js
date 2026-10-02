const challenges = [
    {
        day: 1,
        title: "Build a Personal Introduction Page",
        description: "Create a simple webpage introducing yourself, your interests and your current learning goals.",
        level: "BEGINNER",
        time: "30 MIN",
        tool: "HTML",
        tasks: [
            "Add a clear heading with your name.",
            "Write a short introduction.",
            "Add at least three interests or goals.",
            "Test the page in a browser."
        ]
    },

    {
        day: 2,
        title: "Create a Personal Profile Card",
        description: "Build a clean profile card using HTML and basic CSS styling.",
        level: "BEGINNER",
        time: "30 MIN",
        tool: "HTML + CSS",
        tasks: [
            "Create a profile card container.",
            "Add your name and short bio.",
            "Add an image or avatar.",
            "Style the card with spacing and borders."
        ]
    },

    {
        day: 3,
        title: "Design a Landing Page Header",
        description: "Create a landing-page header with navigation and a clear call to action.",
        level: "BEGINNER",
        time: "35 MIN",
        tool: "HTML + CSS",
        tasks: [
            "Add a navigation bar.",
            "Create a hero heading.",
            "Add a short supporting paragraph.",
            "Add a call-to-action button."
        ]
    },

    {
        day: 4,
        title: "Build a Feature Section",
        description: "Create a section that presents three features of a fictional product or service.",
        level: "BEGINNER",
        time: "35 MIN",
        tool: "HTML + CSS",
        tasks: [
            "Create three feature cards.",
            "Give each feature a title.",
            "Add a short description.",
            "Keep the layout visually consistent."
        ]
    },

    {
        day: 5,
        title: "Create a Responsive Navigation Bar",
        description: "Build a navigation bar that remains usable on smaller screens.",
        level: "BEGINNER",
        time: "40 MIN",
        tool: "HTML + CSS",
        tasks: [
            "Create navigation links.",
            "Use Flexbox for layout.",
            "Add responsive styling.",
            "Test the layout on mobile width."
        ]
    },

    {
        day: 6,
        title: "Design a Pricing Section",
        description: "Create three pricing plans for a fictional application or service.",
        level: "BEGINNER",
        time: "40 MIN",
        tool: "HTML + CSS",
        tasks: [
            "Create three pricing cards.",
            "Show plan names and prices.",
            "Add feature lists.",
            "Highlight one plan as recommended."
        ]
    },

    {
        day: 7,
        title: "Build a Contact Form",
        description: "Create a clean contact form with common user input fields.",
        level: "BEGINNER",
        time: "35 MIN",
        tool: "HTML",
        tasks: [
            "Add name and email fields.",
            "Add a subject field.",
            "Add a message textarea.",
            "Add a submit button."
        ]
    },

    {
        day: 8,
        title: "Create a FAQ Section",
        description: "Build a frequently asked questions section for a website.",
        level: "BEGINNER",
        time: "35 MIN",
        tool: "HTML + CSS",
        tasks: [
            "Create at least five questions.",
            "Add answers for every question.",
            "Style the questions clearly.",
            "Keep the layout easy to scan."
        ]
    },

    {
        day: 9,
        title: "Build a Portfolio Project Card",
        description: "Create a reusable card for displaying one of your projects.",
        level: "BEGINNER",
        time: "35 MIN",
        tool: "HTML + CSS",
        tasks: [
            "Add project title and image.",
            "Write a project description.",
            "List technologies used.",
            "Add a project link."
        ]
    },

    {
        day: 10,
        title: "Create a Skills Dashboard",
        description: "Design a dashboard-style section that visually presents your technical skills.",
        level: "BEGINNER",
        time: "45 MIN",
        tool: "HTML + CSS",
        tasks: [
            "Create multiple skill cards.",
            "Group related technologies.",
            "Use visual progress indicators.",
            "Keep the dashboard responsive."
        ]
    },

    {
        day: 11,
        title: "Design a Personal About Page",
        description: "Build an About page combining your introduction, interests and learning journey.",
        level: "BEGINNER",
        time: "45 MIN",
        tool: "HTML + CSS",
        tasks: [
            "Create an introduction section.",
            "Add your learning journey.",
            "Add interests or hobbies.",
            "Create a clean visual hierarchy."
        ]
    },

    {
        day: 12,
        title: "Build a Portfolio Hero Section",
        description: "Create a responsive hero section that introduces you, your skills and what you are currently building.",
        level: "BEGINNER",
        time: "45 MIN",
        tool: "HTML + CSS",
        tasks: [
            "Add your name and introduction.",
            "Mention at least three skills.",
            "Add a strong call-to-action button.",
            "Make the section responsive."
        ]
    },

    {
        day: 13,
        title: "Start JavaScript with a Button",
        description: "Add JavaScript behavior to a webpage by changing content when a button is clicked.",
        level: "BEGINNER",
        time: "30 MIN",
        tool: "JavaScript",
        tasks: [
            "Create a button.",
            "Select it using JavaScript.",
            "Add a click event.",
            "Change text after the click."
        ]
    },

    {
        day: 14,
        title: "Build a Digital Counter",
        description: "Create a counter with buttons for increasing and decreasing a value.",
        level: "BEGINNER",
        time: "35 MIN",
        tool: "JavaScript",
        tasks: [
            "Create a displayed number.",
            "Add an increase button.",
            "Add a decrease button.",
            "Prevent the value from going below zero."
        ]
    },

    {
        day: 15,
        title: "Create a Random Quote Generator",
        description: "Build a button that displays a random quote from a predefined list.",
        level: "BEGINNER",
        time: "40 MIN",
        tool: "JavaScript",
        tasks: [
            "Create an array of quotes.",
            "Select a random quote.",
            "Display it on the page.",
            "Add a button to generate another quote."
        ]
    },

    {
        day: 16,
        title: "Build a Tip Calculator",
        description: "Create a simple calculator that calculates a tip and final bill amount.",
        level: "BEGINNER",
        time: "40 MIN",
        tool: "JavaScript",
        tasks: [
            "Accept a bill amount.",
            "Accept a tip percentage.",
            "Calculate the tip.",
            "Display the total amount."
        ]
    },

    {
        day: 17,
        title: "Create a Grade Calculator",
        description: "Build a calculator that converts marks into a grade.",
        level: "BEGINNER",
        time: "40 MIN",
        tool: "JavaScript",
        tasks: [
            "Accept a student's marks.",
            "Validate the input.",
            "Calculate the appropriate grade.",
            "Display the result clearly."
        ]
    },

    {
        day: 18,
        title: "Build a Character Counter",
        description: "Create a live character counter for a text input or textarea.",
        level: "BEGINNER",
        time: "35 MIN",
        tool: "JavaScript",
        tasks: [
            "Create a textarea.",
            "Track its input.",
            "Display the character count.",
            "Show a warning near the limit."
        ]
    },

    {
        day: 19,
        title: "Create a Password Strength Checker",
        description: "Build a basic password strength checker using JavaScript rules.",
        level: "BEGINNER",
        time: "45 MIN",
        tool: "JavaScript",
        tasks: [
            "Check password length.",
            "Check for numbers.",
            "Check for uppercase characters.",
            "Display a strength message."
        ]
    },

    {
        day: 20,
        title: "Build a Simple Calculator",
        description: "Create a browser calculator supporting common arithmetic operations.",
        level: "BEGINNER",
        time: "50 MIN",
        tool: "HTML + CSS + JavaScript",
        tasks: [
            "Add number buttons.",
            "Add arithmetic operators.",
            "Display the current expression.",
            "Calculate the final result."
        ]
    },

    {
        day: 21,
        title: "Create a To-Do List",
        description: "Build a basic task list where users can add and remove tasks.",
        level: "BEGINNER",
        time: "50 MIN",
        tool: "JavaScript",
        tasks: [
            "Add a task input.",
            "Create new task items.",
            "Add a delete action.",
            "Prevent empty tasks."
        ]
    },

    {
        day: 22,
        title: "Build a Character Search Tool",
        description: "Create a search interface that filters items while the user types.",
        level: "INTERMEDIATE",
        time: "50 MIN",
        tool: "JavaScript",
        tasks: [
            "Create a dataset.",
            "Add a search field.",
            "Filter matching items.",
            "Show a message when nothing matches."
        ]
    },

    {
        day: 23,
        title: "Create a Quiz App",
        description: "Build a small multiple-choice quiz with scoring.",
        level: "INTERMEDIATE",
        time: "60 MIN",
        tool: "JavaScript",
        tasks: [
            "Create multiple questions.",
            "Display answer options.",
            "Track the score.",
            "Show the final result."
        ]
    },

    {
        day: 24,
        title: "Build a Countdown Timer",
        description: "Create a countdown timer that updates every second.",
        level: "INTERMEDIATE",
        time: "50 MIN",
        tool: "JavaScript",
        tasks: [
            "Set a starting duration.",
            "Update the timer every second.",
            "Stop at zero.",
            "Add reset functionality."
        ]
    },

    {
        day: 25,
        title: "Build an Interactive FAQ",
        description: "Turn a static FAQ section into an interactive accordion.",
        level: "INTERMEDIATE",
        time: "45 MIN",
        tool: "JavaScript + DOM",
        tasks: [
            "Create question buttons.",
            "Toggle answers open and closed.",
            "Allow only the needed sections to be visible.",
            "Add visual feedback for the active question."
        ]
    },

    {
        day: 26,
        title: "Create a Dark Mode Toggle",
        description: "Add a theme switcher that changes the website between light and dark modes.",
        level: "INTERMEDIATE",
        time: "45 MIN",
        tool: "JavaScript + CSS",
        tasks: [
            "Create a theme button.",
            "Toggle a CSS class.",
            "Style both themes.",
            "Remember the selected theme."
        ]
    },

    {
        day: 27,
        title: "Build a Modal Window",
        description: "Create a reusable popup modal for displaying additional information.",
        level: "INTERMEDIATE",
        time: "45 MIN",
        tool: "JavaScript + DOM",
        tasks: [
            "Add an open button.",
            "Display the modal dynamically.",
            "Add a close button.",
            "Close it when clicking outside."
        ]
    },

    {
        day: 28,
        title: "Create an Image Gallery",
        description: "Build an image gallery where selecting a thumbnail changes the main image.",
        level: "INTERMEDIATE",
        time: "50 MIN",
        tool: "JavaScript + DOM",
        tasks: [
            "Create multiple thumbnails.",
            "Display a main image.",
            "Switch the image on click.",
            "Highlight the selected thumbnail."
        ]
    },

    {
        day: 29,
        title: "Build a Tabs Interface",
        description: "Create a multi-tab section for switching between different content panels.",
        level: "INTERMEDIATE",
        time: "45 MIN",
        tool: "JavaScript + DOM",
        tasks: [
            "Create multiple tab buttons.",
            "Create matching content sections.",
            "Switch the active content.",
            "Highlight the active tab."
        ]
    },

    {
        day: 30,
        title: "Create a Form Validation System",
        description: "Add client-side validation to a registration form.",
        level: "INTERMEDIATE",
        time: "60 MIN",
        tool: "JavaScript",
        tasks: [
            "Validate required fields.",
            "Validate email format.",
            "Show useful error messages.",
            "Prevent invalid submission."
        ]
    },

    {
        day: 31,
        title: "Build a Live Search Interface",
        description: "Create a search interface that filters a larger list instantly.",
        level: "INTERMEDIATE",
        time: "50 MIN",
        tool: "JavaScript",
        tasks: [
            "Create a list of records.",
            "Add a search field.",
            "Filter records as the user types.",
            "Display the number of matches."
        ]
    },

    {
        day: 32,
        title: "Create a Shopping Cart Counter",
        description: "Build a small shopping cart where users can increase and decrease item quantities.",
        level: "INTERMEDIATE",
        time: "60 MIN",
        tool: "JavaScript + DOM",
        tasks: [
            "Display products and prices.",
            "Add quantity controls.",
            "Calculate item totals.",
            "Calculate the cart total."
        ]
    },

    {
        day: 33,
        title: "Build a Progress Tracker",
        description: "Create a visual tracker showing progress through a list of tasks.",
        level: "INTERMEDIATE",
        time: "50 MIN",
        tool: "JavaScript + CSS",
        tasks: [
            "Create multiple tasks.",
            "Allow tasks to be completed.",
            "Calculate percentage completion.",
            "Update the progress bar."
        ]
    },

    {
        day: 34,
        title: "Create an Interactive Dashboard",
        description: "Build a small dashboard with cards containing live calculated information.",
        level: "INTERMEDIATE",
        time: "60 MIN",
        tool: "HTML + CSS + JavaScript",
        tasks: [
            "Create multiple dashboard cards.",
            "Display calculated values.",
            "Use reusable JavaScript functions.",
            "Keep the layout responsive."
        ]
    },

    {
        day: 35,
        title: "Build a Random User Profile",
        description: "Generate a profile card from a predefined set of user records.",
        level: "INTERMEDIATE",
        time: "45 MIN",
        tool: "JavaScript",
        tasks: [
            "Create sample user records.",
            "Select one user randomly.",
            "Render the profile.",
            "Add a button for another user."
        ]
    },

    {
        day: 36,
        title: "Build a Memory Card Game",
        description: "Create a small card-matching game with a score counter.",
        level: "INTERMEDIATE",
        time: "75 MIN",
        tool: "JavaScript",
        tasks: [
            "Create matching card pairs.",
            "Allow cards to flip.",
            "Detect matching pairs.",
            "Track completed matches."
        ]
    },

    {
        day: 37,
        title: "Store Tasks with Local Storage",
        description: "Improve your to-do list by saving tasks in the browser's local storage.",
        level: "INTERMEDIATE",
        time: "50 MIN",
        tool: "JavaScript + LocalStorage",
        tasks: [
            "Save tasks to local storage.",
            "Load tasks on page start.",
            "Update storage after changes.",
            "Keep tasks after refreshing the page."
        ]
    },

    {
        day: 38,
        title: "Build a Persistent Theme System",
        description: "Save the user's selected theme and restore it automatically.",
        level: "INTERMEDIATE",
        time: "45 MIN",
        tool: "JavaScript + LocalStorage",
        tasks: [
            "Create theme controls.",
            "Save the selected theme.",
            "Restore it on reload.",
            "Handle missing saved preferences."
        ]
    },

    {
        day: 39,
        title: "Create a Notes App",
        description: "Build a small notes application with create, edit and delete functionality.",
        level: "INTERMEDIATE",
        time: "70 MIN",
        tool: "JavaScript + LocalStorage",
        tasks: [
            "Create new notes.",
            "Display saved notes.",
            "Edit existing notes.",
            "Delete notes."
        ]
    },

    {
        day: 40,
        title: "Build a Habit Tracker",
        description: "Create a daily habit tracker that stores completion data locally.",
        level: "INTERMEDIATE",
        time: "70 MIN",
        tool: "JavaScript + LocalStorage",
        tasks: [
            "Create a list of habits.",
            "Mark habits as completed.",
            "Track daily progress.",
            "Save progress locally."
        ]
    },

    {
        day: 41,
        title: "Create a Personal Expense Tracker",
        description: "Build an expense tracker that calculates total spending.",
        level: "INTERMEDIATE",
        time: "75 MIN",
        tool: "JavaScript",
        tasks: [
            "Add expense records.",
            "Store amount and category.",
            "Calculate total expenses.",
            "Display individual records."
        ]
    },

    {
        day: 42,
        title: "Build a Study Planner",
        description: "Create a planner where users can organise study sessions and tasks.",
        level: "INTERMEDIATE",
        time: "70 MIN",
        tool: "JavaScript",
        tasks: [
            "Add study tasks.",
            "Assign subjects.",
            "Mark tasks complete.",
            "Save the planner locally."
        ]
    },

    {
        day: 43,
        title: "Create a Pomodoro Timer",
        description: "Build a focused study timer with work and break periods.",
        level: "INTERMEDIATE",
        time: "60 MIN",
        tool: "JavaScript",
        tasks: [
            "Create a countdown.",
            "Add start and pause controls.",
            "Switch between work and break modes.",
            "Add a reset button."
        ]
    },

    {
        day: 44,
        title: "Build a Weather Interface",
        description: "Create a weather-style interface with location search and result cards.",
        level: "INTERMEDIATE",
        time: "60 MIN",
        tool: "JavaScript",
        tasks: [
            "Create a location search field.",
            "Display weather-style information.",
            "Create reusable result cards.",
            "Handle invalid searches."
        ]
    },

    {
        day: 45,
        title: "Work with a Public API",
        description: "Fetch data from a public API and display the response in your webpage.",
        level: "INTERMEDIATE",
        time: "75 MIN",
        tool: "JavaScript + Fetch API",
        tasks: [
            "Make a fetch request.",
            "Read the returned data.",
            "Display useful fields.",
            "Handle loading and error states."
        ]
    },

    {
        day: 46,
        title: "Build an API Search Tool",
        description: "Create a search interface that retrieves matching records from an API.",
        level: "INTERMEDIATE",
        time: "75 MIN",
        tool: "JavaScript + Fetch API",
        tasks: [
            "Create a search input.",
            "Send the search request.",
            "Render returned results.",
            "Handle empty results."
        ]
    },

    {
        day: 47,
        title: "Create a GitHub Profile Viewer",
        description: "Build an interface that displays public GitHub profile information.",
        level: "INTERMEDIATE",
        time: "75 MIN",
        tool: "JavaScript + GitHub API",
        tasks: [
            "Accept a GitHub username.",
            "Fetch profile information.",
            "Display useful profile statistics.",
            "Handle invalid usernames."
        ]
    },

    {
        day: 48,
        title: "Build an API Data Dashboard",
        description: "Turn API data into a small dashboard with multiple summary cards.",
        level: "INTERMEDIATE",
        time: "75 MIN",
        tool: "JavaScript + Fetch API",
        tasks: [
            "Fetch a dataset.",
            "Calculate summary values.",
            "Display multiple cards.",
            "Show loading and error states."
        ]
    },

    {
        day: 49,
        title: "Create a Portfolio Dashboard",
        description: "Start combining your skills into a personal developer dashboard.",
        level: "INTERMEDIATE",
        time: "75 MIN",
        tool: "HTML + CSS + JavaScript",
        tasks: [
            "Create a dashboard layout.",
            "Add profile information.",
            "Display skills and projects.",
            "Add interactive sections."
        ]
    },

    {
        day: 50,
        title: "Build a Project Showcase",
        description: "Create a searchable project showcase for your coding work.",
        level: "INTERMEDIATE",
        time: "75 MIN",
        tool: "HTML + CSS + JavaScript",
        tasks: [
            "Create project data.",
            "Display project cards.",
            "Add category filtering.",
            "Add project links."
        ]
    },

    {
        day: 51,
        title: "Create a Coding Progress Dashboard",
        description: "Build a dashboard that shows your coding progress across different areas.",
        level: "INTERMEDIATE",
        time: "75 MIN",
        tool: "JavaScript",
        tasks: [
            "Create progress categories.",
            "Calculate completion percentages.",
            "Display progress visually.",
            "Keep the data easy to update."
        ]
    },

    {
        day: 52,
        title: "Build a Challenge Tracker",
        description: "Create a tracker that lets users complete daily coding challenges.",
        level: "INTERMEDIATE",
        time: "75 MIN",
        tool: "JavaScript + LocalStorage",
        tasks: [
            "Create challenge records.",
            "Track completed days.",
            "Calculate progress.",
            "Save challenge state."
        ]
    },

    {
        day: 53,
        title: "Add Achievement Badges",
        description: "Create an achievement system that unlocks badges as progress increases.",
        level: "INTERMEDIATE",
        time: "60 MIN",
        tool: "JavaScript",
        tasks: [
            "Define multiple milestones.",
            "Check the user's progress.",
            "Unlock matching badges.",
            "Display locked and unlocked states."
        ]
    },

    {
        day: 54,
        title: "Build a Streak System",
        description: "Create a daily streak system similar to coding and learning platforms.",
        level: "INTERMEDIATE",
        time: "75 MIN",
        tool: "JavaScript + LocalStorage",
        tasks: [
            "Track completed days.",
            "Calculate the current streak.",
            "Detect broken streaks.",
            "Display the streak clearly."
        ]
    },

    {
        day: 55,
        title: "Create a User Profile Page",
        description: "Build a profile page that combines achievements, progress and completed work.",
        level: "INTERMEDIATE",
        time: "75 MIN",
        tool: "HTML + CSS + JavaScript",
        tasks: [
            "Display profile information.",
            "Show challenge progress.",
            "Show earned achievements.",
            "Add links to completed projects."
        ]
    },

    {
        day: 56,
        title: "Build a Responsive Challenge Dashboard",
        description: "Combine your dashboard ideas into a polished responsive challenge interface.",
        level: "ADVANCED",
        time: "90 MIN",
        tool: "HTML + CSS + JavaScript",
        tasks: [
            "Create desktop and mobile layouts.",
            "Connect challenge progress to the UI.",
            "Add interactive controls.",
            "Test the complete layout."
        ]
    },

    {
        day: 57,
        title: "Add Data Persistence",
        description: "Make your challenge application remember progress between browser sessions.",
        level: "ADVANCED",
        time: "75 MIN",
        tool: "JavaScript + LocalStorage",
        tasks: [
            "Store challenge state.",
            "Restore state on reload.",
            "Handle missing saved data.",
            "Prevent invalid progress values."
        ]
    },

    {
        day: 58,
        title: "Create a Complete Mini Web App",
        description: "Combine your strongest features into a small but complete web application.",
        level: "ADVANCED",
        time: "90 MIN",
        tool: "HTML + CSS + JavaScript",
        tasks: [
            "Define the app's main purpose.",
            "Build the core interface.",
            "Add interactive functionality.",
            "Test the complete user flow."
        ]
    },

    {
        day: 59,
        title: "Polish and Test Your Project",
        description: "Review your project like a real user and fix visual and functional issues.",
        level: "ADVANCED",
        time: "60 MIN",
        tool: "HTML + CSS + JavaScript",
        tasks: [
            "Test every major feature.",
            "Check mobile responsiveness.",
            "Fix broken buttons and links.",
            "Clean up unused code."
        ]
    },

    {
        day: 60,
        title: "Launch Your 60-Day Coding Project",
        description: "Prepare your final project for GitHub and present what you built during the challenge.",
        level: "ADVANCED",
        time: "90 MIN",
        tool: "GitHub + Web Development",
        tasks: [
            "Review the complete project.",
            "Update the README.",
            "Add a final project showcase.",
            "Publish and share your finished work."
        ]
    }
];
