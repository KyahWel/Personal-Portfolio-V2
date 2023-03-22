let Languages = [
    "C","HTML",'CSS',"JavaScript","Java","Python","PHP","Arduino","CodeIgniter", "Django", "Flask", "TensorFlow", "openCv", "MySQL", "Firebase", "Bootstrap"
];

let language_icon = [
    "fa-c",
    "fa-html5",
    "fa-css3-alt",
    "fa-square-js",
    "fa-java",
    "fa-python",
    "fa-php",
    "fa-robot",
    "fa-php",
    "fa-python",
    "fa-python",
    "fa-python",
    "fa-python",
    "fa-database",
    "fa-database",
    "fa-css3-alt",
];


for (let i = 0; i<Languages.length; i++) {
    //Create card div
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    //Create card-content div
    const cardContentDiv = document.createElement("div");
    cardContentDiv.classList.add("card_content");

    //Create i element and add class
    const icon= document.createElement("i");
    if(i==7 || i==13 || i==14)
        icon.classList.add('fa-solid',language_icon[i]);
    else
        icon.classList.add('fa-brands',language_icon[i]);
  
    //Create span and add text content
    const span= document.createElement("span");
    span.textContent = Languages[i];

    //Append to parent element
    cardDiv.appendChild(cardContentDiv);
    cardContentDiv.appendChild(icon);
    cardContentDiv.appendChild(span);

    const parentElement = document.getElementById("techstack_cards");
    parentElement.appendChild(cardDiv);

}


