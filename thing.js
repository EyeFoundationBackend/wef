// Step 1: Define rules for answers based on keywords in the question
function getCorrectAnswer(questionText) {
  // Optional: normalize text if needed
  // questionText = questionText.toLowerCase();

  const answers = {
	// Enviromental impact
    "Which of the following WOULD NOT be a way to reduce the amount of energy used by a computer system?": "Use a screen saver",
    "Which of the following help reduce the amount of energy used by a computer system?Reduce monitor brightnessTurn speaker volume downUse sleep modeWrite programs in machine code instead of source code": "1 and 3",
    "Which of the following help reduce the amount of energy used by a computer system?Avoid using a screen saverSwitch monitor to black and white modeUse a wireless mouse instead of a wired onePower down monitor when not in use": "1 and 4",
    "Why do computer systems have a negative impact on the environment?": "Computers require power / energy to run",
	// Analysis (database)
    "During evaluation, a database is said to be fit for purpose if:": "it meets the end-user and functional requirements",
    "A database is fit for purpose if it...meets the end user requirementshas linked tablesmeets the functional requirementsmakes use of SQL": "1 and 3",
    "Database output is accurate if...": "the actual results match the expected results",
    "Wagtail Dog Walking Services are designing a new database. The office staff should be able to add and remove owner and dog records. They should also be able to update dog records with the date of their last booster injection, sort all dogs alphabetically by breed, and output all owners along with their contact telephone numbers.Which of the following are end-user requirements for this database?Remove a dog recordEdit booster informationImplement two tables: DOG and OWNERApply the Date attribute type to the 'booster' field": "1 and 2",
    "Wagtail Dog Walking Services are designing a new database. The office staff should be able to add and remove owner and dog records. They should also be able to update the address and mobile number on an existing owner record, sort all dogs alphabetically by breed, and output all dogs in the database along with their owner contact number.Which of the following are end-user requirements for this database?Add a member of staff recordEdit owner addressDisplay all dogs with owner contact numbersUpdate owner profession": "2 and 3",
    "Scottish Athletics are designing a database to hold details of all Scottish running clubs and their member runners.Which of the following might be an end-user requirement for this database?": "Option to sort all runners by their number of race wins (highest to lowest)",
    "Scottish Athletics are designing a database to hold details of all Scottish running clubs and their member runners.Which of the following would NOT be a functional requirement for this database?": "Query designs will be produced for all queries on the RUNNER table",
    "Duncastle United Football Club are designing a new database to record details of season ticket holders. Office staff should be able to add supporters to, and delete supporters from the system, and update their details as required. It should be possible to search for a season ticket holder by surname, output all season ticket holders sorted by seat number, and show the details of all season ticket holders with tickets in a specific section of the stadium.Which of the following are functional requirements for this database?Add a supporter recordUse two linked tables: SUPPORTER and STADIUMUse the primary key 'seat number' in the STADIUM tableSearch for season ticket holder by surname": "2 and 3",
    "Wagtail Dog Walking Services are designing a new database. The office staff should be able to add and delete owner and dog records. They should also be able to update dog records with the date of their last booster injection, sort all dogs alphabetically by breed, and output all owners along with their contact telephone numbers.Which of the following are functional requirements for this database?Delete a dog recordUpdate booster informationImplement two tables: DOG and OWNERApply the Text attribute type to the 'dog name' field": "3 and 4",
    "DVLA are designing a database to store information about drivers and their cars.Which of the following would NOT be a functional requirement for this database?": "An entity-relationship diagram will be used to design the tables and their relationships",
    "Duncastle United Football Club are designing a new database to record details of season ticket holders. Office staff should be able to add supporters to, and delete supporters from the system, and update their details as required. It should be possible to search for a season ticket holder by surname, output all season ticket holders sorted by seat number, and show the details of all season ticket holders with tickets in a specific section of the stadium.Which of the following are end-user requirements for this database?Calculate total season ticket revenueApply a field length check to the 'seat number' fieldFind season ticket holders with tickets in a certain section of the groundDisplay all season ticket holders sorted by seat number": "3 and 4",
    "Duncastle United Football Club are designing a new database to record details of season ticket holders. Office staff should be able to add supporters to, and delete supporters from the system, and update their details as required. It should be possible to search for a season ticket holder by surname, output all season ticket holders sorted by seat number, and show the details of all season ticket holders with tickets in a specific section of the stadium.Which of the following are functional requirements for this database?Use the Date attribute type for the supporter date of birth fieldApply a field length check to the supporter 'surname' fieldFind season ticket holders with tickets in a certain section of the groundUse two linked tables: SUPPORTER and STADIUM": "1, 2 and 4",
    "Duncastle United Football Club are designing a new database to record details of season ticket holders. Office staff should be able to add supporters to, and delete supporters from the system, and update their details as required. It should be possible to search for a season ticket holder by surname, output all season ticket holders sorted by seat number, and show the details of all season ticket holders with tickets in a specific section of the stadium.Which of the following are end-user requirements for this database?Add a supporter recordUse two linked tables: SUPPORTER and STADIUMUse the primary key 'seat number' in the STADIUM tableSearch for season ticket holder by surname": "1 and 4",
    "DVLA are designing a database to store information about drivers and their cars.Which of the following might be an end-user requirement for this database?": "Option to add a new car record to the database",
    "Wagtail Dog Walking Services are designing a new database. The office staff should be able to add and delete owner and dog records. They should also be able to update the address and mobile number on an existing owner record, sort all dogs alphabetically by breed, and output all dogs in the database along with their owner name.Which of the following are functional requirements for this database?Use fields Dog ID, Dog Name, Dog Booster, Dog Breed and Owner ID in the DOG tableUpdate owner addressApply the Text attribute type to the 'mobile' fieldAdd a member of staff record": "1 and 3",
	// Analysis (web)
	"Soundz Music are designing a website to sell music downloads for upcoming artists. Users visiting the website can hear 30 second samples of each song, and can leave artist reviews.Which of the following might be an end-user requirement for this website?": "Add song to basket",
	"Wagtail Dog Walking Services are designing a new website. The site should have a link from the home page to a Booking page which lets customers book their dog in for a walk. The home page will show photographs of customer dogs being walked, and users will be able to 'like' individual photos by clicking a small heart icon.Which of the following are end user requirements for this website?Like dog photoLink on home page to booking pageLink to contact pageBook dog walk": "1 and 4",
	"Duncastle United Football Club are designing a new website so that supporters can find out information about the team, including statistics and photos of every player. The website should have a sign up / login button available on every page. It will access and store data in a database with User and Player tables.Which of the following are functional requirements for this website?Player table: View statisticsStudent table: View test scoresPlayer table: Check out and payUser table: Sign up": "1 and 4",
	"Wagtail Dog Walking Services are designing a new website. The site should have a link from the home page to a Prices page listing the different services available. Customers should be able to login to the site to see photographs of their dog being walked. There should be a sign up / login button at the top of every page. The site will be required to access and store data in a database with User and Dog tables.Which of the following are functional requirements for this website?Login button at the top of every page.View dog photographsDog table: Get photographsUser table: Sign up": "1, 3 and 4",
	"Wagtail Dog Walking Services are designing a new website. The site should have a link from the home page to a Prices page listing the different services available. Customers should be able to send a message to Wagtail by clicking a button on the Prices page. The home page will show photographs of customer dogs being walked and customers will have the option to purchase photos by adding them to a virtual basket. In order to purchase photographs, users must be logged in to the site, and there should be a sign up / login button at the top of every page.Which of the following are functional requirements for this website?Login button at the top of every page.Link on the home page a prices pageSend a message to WagtailSign up / login": "1 and 2",
	"Duncastle United Football Club are designing a new website so that supporters can find out information about the team. Each player in the squad will have a page with a photo and statistics. Every page should have a link to the club shop where supporters can be purchase replica kits and other items by adding them to a virtual basket and then visiting the online checkout.Which of the following are end user requirements for this website?View player photoLink from home page to Duncastle United rivalsAdd product to virtual basketLinks from home page to squad page": "1 and 3",
	"Duncastle United Football Club are designing a new website so that supporters can find out information about the team.  There should be links from the home page to a results page, the league table page and a squad page. Every page should have a link to the club shop where supporters can be purchase replica kits and other items by adding them to a virtual basket and then visiting the online checkout.Which of the following are functional requirements for this website?Links from home page to national team web pageLinks from home page to results pageLinks from every page to club shopPurchase replica kit": "2 and 3",
	"Soundz Music are designing a website to sell music downloads for upcoming artists. Users visiting the website can hear 30 second samples of each song, and can leave artist reviews.Which of the following would NOT be an functional requirement for this website?": "budget for develpment £5000",
	"Wagtail Dog Walking Services are designing a new website. The site should have a link from the home page to a Prices page listing the different services available. Customers should be able to send a message to Wagtail by clicking a button on the Prices page. The home page will show photographs of customer dogs being walked and customers will have the option to purchase photos by adding them to a virtual basket. In order to purchase photographs, users must be logged in to the site, and there should be a sign up / login button at the top of every page.Which of the following are end user requirements for this website?Login button at the top of every page.Link on the home page a prices pageSend a message to WagtailSign up / login": "3 and 4",
	"Duncastle United Football Club are designing a new website so that supporters can find out information about the team. Supporters should be able to search for player by squad number and send a player a message when viewing their page. The website should have a competition page which lets supporters submit their prediction for the result of the next Duncastle United match.Which of the following are end user requirements for this website?Delete user from user tableUpdate player tableSend player a messageSubmit predicition of next match result": "3 and 4",
    // Develpment methodologies
	"During which stage of the software development process is the program checked to make sure that it works as expected and has no errors?": ".Testing",
	"Which of the following best describes the Testing stage of the software development process?": "Check that the program works as expected and has no errors",
	"Which of the following best describes the Analysis stage of the software development process?": "Identify what the program is meant to do",
	"During which stage of the software development process is it identified what it is that the program is meant to do?": ".Analysis",
	"During which stage of the software development process are the functionality and interface set out?": ".Design",
	"Which word describes the way in which each stage of the software development process can be revisited in order to improve the program?": ".Iterative",
	"The 6 stages of the software development process are shown below. Identify the missing stage.Analysis------ImplementationTestingDocumentationEvaluation": ".Design",
	"Which of the following best describes the Evaluation stage of the software development process?": "Review the program to check that it is fit for purpose",
	"Why is the software development process said to be iterative?": "Each stage can be revisited",
	"The 6 stages of the software development process are shown below. Identify the missing stage.AnalysisDesignImplementation-------DocumentationEvaluation": ".Testing",
	"This diagram shows the implementation phase of the software development process being revisited after testing.Which word can be used to desribe the software development process?": "Iterative",
	"The 6 stages of the software development process are shown below. Identify the missing stage.--------DesignImplementationTestingDocumentationEvaluation": ".Analysis",
	"The 6 stages of the software development process are shown below. Identify the missing stage.AnalysisDesign--------------TestingDocumentationEvaluation": ".Implementation",
	"During which stage of the software development process is the program reviewed to check that it is fit for purpose?": ".Evaluation",
	"The 6 stages of the software development process are shown below. Identify the missing stage.AnalysisDesignImplementationTesting-------------Evaluation": ".Documentation",
	"The 6 stages of the iterative software development process are shown below. Identify the missing stage.AnalysisDesignImplementationTestingDocumentation----------": ".Evaluation",
	"Which of the following best describes the Design stage of the software development process?": "Use tools such as pseudocode and structure diagrams to set out the program functionality",
	"Which of the following best describes the Documentation stage of the software development process?": "Collect the documents which are generated at each phase of the software development process",
	"During which stage of the software development process is the program code written?": ".Implementation",
	"During which stage of the software development process is the program reviewed to check that the code is readable?": ".Evaluation",
	"Which of the following best describes the Implementation stage of the software development process?": "Write the program",
	"Following testing, a software developer decides to revisit and improve the program design. This can happen because the software development process is _________What is the missing term?": "Iterative",
	"During which stage of the software development process are the documents from the other stages gathered together?": ".Documentation"
  };

  return answers[questionText] || null;
}

// Step 2: Read the current question text
const questionDiv = document.querySelector(".card-header.question-card-header .col");
const questionText = questionDiv.textContent.trim();
console.log("Question:", questionText);

// Step 3: Find the correct answer
const correctAnswer = getCorrectAnswer(questionText);
console.log("Expected answer:", correctAnswer);

// Step 4: Handle text-entry vs multiple-choice
if (correctAnswer && correctAnswer.startsWith(".")) {
  // Text-entry case: strip the leading dot
  const textValue = correctAnswer.slice(1);
  const textInput = document.getElementById("text-answer");
  if (textInput) {
    textInput.value = textValue;
    console.log("Filled text answer:", textValue);
	document.getElementById("submit-answer-button").click();
  }
} else {
  // Multiple-choice case
  const answerOptions = document.querySelectorAll(".question-card-body .border-info");

  answerOptions.forEach(option => {
    const optionText = option.textContent.trim();
    if (optionText === correctAnswer) {
      const button = option.parentElement.querySelector("button");
      if (button) {
        console.log("Submitting correct answer:", optionText);

        // Click the button (for UI feedback)
        button.click();

        // Step 5: Submit via fetch (mimic the site’s request)
        const csrfToken = "EsABqf4biwo1O90wnvIvW0Jg7dgaO9o4ULnDBMJYHNBUfDdxPulTPdf3VIzKttrK";

        const qHeader = document.querySelector(".achieve-card-header h5");
        let qNumber = 1;
        if (qHeader) {
          const match = qHeader.textContent.match(/Question\s+(\d+)/i);
          if (match) qNumber = match[1];
        }

        fetch("https://achieve.hashtag-learning.co.uk/assess/mc-button-clicked/", {
          headers: {
            "accept": "application/json, text/javascript, */*; q=0.01",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "x-csrftoken": csrfToken,
            "x-requested-with": "XMLHttpRequest"
          },
          method: "POST",
          credentials: "include",
          body: `button_value=${button.value}&actual_question=${qNumber}&response_time=15.3&csrfmiddlewaretoken=${csrfToken}`
        })
        .then(res => res.json())
        .then(data => console.log("Server response:", data))
        .catch(err => console.error("Error submitting answer:", err));
      }
    }
  });
}
