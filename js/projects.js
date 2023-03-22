let projectNames = [
    "Nudeny API", 
    "Nudeny Chrome Extension", 
    "Plant Disease Detector", 
    "TUP School Management System",
    "Cerillo Dental Appointment System",
    "Payroll and Attendance Management System",
    "WithlerV",
    "Universal Serial Monsters"
  ];

let description = [
  `An ongoing thesis project which is an image-based nudity content detector that uses both object 
  detection and image classification machine learning models to identify and censor inappropriate
  content. Created using FastAPI and Python Programming Language`,
  `An ongoing project which utilizes the created Nudeny API to censor nude images on the web browser.
  Created using HTML, CSS and Javascript`,
  `A Flask web application that detects the disease of a lettuce, cabbage and spinach plant that uses live
  camera integration using openCV and image classification machine learning model using tensorflow,
  keras and transfer learning. It also stores the predicted data on database using Firebase.`,
  `A web application project that manages student applicants, enrolled students and professors at
  Technological University of Manila. Created using CodeIgniter Framework, PHP, HTML, CSS , MySQL
  and JavaScript.`,
  `A  web application project that handles dental appointment request, scheduling and administrative
  functions such as accepting, rescheduling and cancelling of appointments. Created using CodeIgniter
  Framework, PHP, HTML, CSS , MySQL and JavaScript.`,
  `A web application project that handles employee attendance, payroll and administrative functions
  such as adding of employee, setting the monthly contributions and attendance monitoring. Created
  using CodeIgniter Framework, PHP, HTML, CSS , MySQL and JavaScript.`,
  `A web game that utilizes regular expressions to generate random math expression which will be
  guessed by the user. The user has 6 tries to guess the secret math expression which 3 difficulties,
  easy, normal and hard. Created using HTML, JavaScript and CSS.`,
  `A desktop game that is inspired of Pokemon. Made using purely C programming and SDL library`
]

let projectLinks = [
  "https://github.com/marvinraydalida/Nudeny-API",
  "https://github.com/KyahWel/Nudeny-Chrome-Extension",
  "https://github.com/KyahWel/Flask-Plant-Disease-Detection",
  "https://github.com/KyahWel/School-Managment-System",
  "https://github.com/marvinraydalida/Appointment-system",
  "https://github.com/KyahWel/Payroll-System",
  "https://github.com/KyahWel/WithlerV",
  "https://github.com/KyahWel/Universal-Serial-Monsters"
]

let logos = [
  "fa-python",
  "fa-square-js",
  "fa-python",
  "fa-php",
  "fa-php",
  "fa-php",
  "fa-square-js",
  "fa-c"
]

for(let i = 0; i < projectNames.length; i++) {
  // create the div element with class "card_item"
  const cardItemDiv = document.createElement("div");
  cardItemDiv.classList.add("card_item");

  // create the div element with class "card_inner"
  const cardInnerDiv = document.createElement("div");
  cardInnerDiv.classList.add("card_inner");

  // create the div element with classes
  const fabDiv = document.createElement("div");
  fabDiv.classList.add("fab", "fa-brands", logos[i]);

  // create the div element with class "project_name""
  const projectNameDiv = document.createElement("div");
  projectNameDiv.classList.add("project_name");
  projectNameDiv.textContent = projectNames[i];

  // create the div element with class "github_link" and a child anchor element
  const githubLinkDiv = document.createElement("div");
  githubLinkDiv.classList.add("github_link");

  const githubLinkAnchor = document.createElement("a");
  githubLinkAnchor.href =  projectLinks[i];
  githubLinkAnchor.target =  "_blank";
  githubLinkAnchor.textContent = "Go to project repository";

  githubLinkDiv.appendChild(githubLinkAnchor);

  // create the div element with class "description" and text content
  const descriptionDiv = document.createElement("div");
  descriptionDiv.classList.add("description");
  descriptionDiv.textContent =  description[i];

  // append all the created elements to the cardInnerDiv
  cardInnerDiv.appendChild(fabDiv);
  cardInnerDiv.appendChild(projectNameDiv);
  cardInnerDiv.appendChild(githubLinkDiv);
  cardInnerDiv.appendChild(descriptionDiv);

  // append the cardInnerDiv to the cardItemDiv
  cardItemDiv.appendChild(cardInnerDiv);

  // append the cardItemDiv to the parent element in the DOM
  const parentElement = document.getElementById("card_wrap");
  parentElement.appendChild(cardItemDiv);
}
