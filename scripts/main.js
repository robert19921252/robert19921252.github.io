const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/javier-no-country-menacing.jpg") {
    myImage.setAttribute("src", "images/javier-bardam-smiling.jpg");
  } else {
    myImage.setAttribute("src", "images/javier-no-country-menacing.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Movies are exciting, ${myName}`;
    }
  }  

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Movies are exciting, ${storedName}!`;
  }

  myButton.onclick = () => {
    setUserName();
  };
  
  
  

