const arrOfObj = [
  {fName: "King", lName: "Kwabiah", order: 1, sport: 1},
  {fName: "Lead", lName: "Kwabiah", order: 20, sport: 1},
  {fName: "Hero", lName: "Kwabiah", order: 20, sport: 1},
  {fName: "Ace", lName: "Kwabiah", order: 20, sport: 1},
  {fName: "Hunter", lName: "Kwabiah", order: 20, sport: 1}
];

const arr = [2, 3, 4, 5];

for (let j = 0; j < 4; j++) {
  var random = arr.splice(Math.floor(Math.random() * arr.length), 1)[0];
  arrOfObj[j + 1].order = random;
}

arrOfObj.map((c, i) => {
  c.sport = Math.floor(Math.random() * 6) + 1;
  if (c.sport == 1) {
    c.sport = "Football";
  } else if (c.sport == 2) {
    c.sport = "Basketball";
  } else if (c.sport == 3) {
    c.sport = "Boxing";
  } else if (c.sport == 4) {
    c.sport = "Muay Thai";
  } else if (c.sport == 5) {
    c.sport = "Tennis";
  } else {
    c.sport = "Athletics";
  }
})

console.log(arrOfObj);

arrOfObj.map((a) => {
  let ordIn;
  if (a.order === 1) {
    ordIn = "st";
  } else if (a.order === 2) {
    ordIn = "nd";
  } else if (a.order === 3) {
    ordIn = "rd";
  } else {
    ordIn = "th";
  }

  let p = document.createElement("p")
  let text = `${a.fName} ${a.lName} is the ${a.order}${ordIn} son of Hugh Kwabiah. His main sport is ${a.sport}`;
  p.innerHTML = text;
  document.querySelector(".ps").appendChild(p);
})

let image = document.querySelector("img")
let pOne = document.querySelectorAll("p")[1];
let pTwo = document.querySelectorAll("p")[2];
let pThree = document.querySelectorAll("p")[3];
let pFour = document.querySelectorAll("p")[4];
let pFive = document.querySelectorAll("p")[5];

sportFunc1 = () => {
  if (pOne.textContent.includes("Football")) {
    image.src = `./images/sport1.jpg`;
    console.log("worked")
  } else if (pOne.textContent.includes("Basketball")) {
    image.src = `./images/sport2.jpg`;
    console.log("worked")
  }  else if (pOne.textContent.includes("Boxing")) {
    image.src = `./images/sport3.jpg`;
    console.log("worked")
  } else if (pOne.textContent.includes("Muay Thai")) {
    image.src = `./images/sport4.jpg`;
    console.log("worked")
  } else if (pOne.textContent.includes("Tennis")) {
    image.src = `./images/sport5.jpg`;
    console.log("worked")
  }  else if (pOne.textContent.includes("Athletics")) {
    image.src = `./images/sport6.jpg`;
    console.log("worked")
  }
}

sportFunc2 = () => {
  if (pTwo.textContent.includes("Football")) {
    image.src = `./images/sport1.jpg`;
    console.log("worked")
  } else if (pTwo.textContent.includes("Basketball")) {
    image.src = `./images/sport2.jpg`;
    console.log("worked")
  }  else if (pTwo.textContent.includes("Boxing")) {
    image.src = `./images/sport3.jpg`;
    console.log("worked")
  } else if (pTwo.textContent.includes("Muay Thai")) {
    image.src = `./images/sport4.jpg`;
    console.log("worked")
  } else if (pTwo.textContent.includes("Tennis")) {
    image.src = `./images/sport5.jpg`;
    console.log("worked")
  }  else if (pTwo.textContent.includes("Athletics")) {
    image.src = `./images/sport6.jpg`;
    console.log("worked")
  }
}

sportFunc3 = () => {
  if (pThree.textContent.includes("Football")) {
    image.src = `./images/sport1.jpg`;
    console.log("worked")
  } else if (pThree.textContent.includes("Basketball")) {
    image.src = `./images/sport2.jpg`;
    console.log("worked")
  }  else if (pThree.textContent.includes("Boxing")) {
    image.src = `./images/sport3.jpg`;
    console.log("worked")
  } else if (pThree.textContent.includes("Muay Thai")) {
    image.src = `./images/sport4.jpg`;
    console.log("worked")
  } else if (pThree.textContent.includes("Tennis")) {
    image.src = `./images/sport5.jpg`;
    console.log("worked")
  }  else if (pThree.textContent.includes("Athletics")) {
    image.src = `./images/sport6.jpg`;
    console.log("worked")
  }
}

sportFunc4 = () => {
  if (pFour.textContent.includes("Football")) {
    image.src = `./images/sport1.jpg`;
    console.log("worked")
  } else if (pFour.textContent.includes("Basketball")) {
    image.src = `./images/sport2.jpg`;
    console.log("worked")
  }  else if (pFour.textContent.includes("Boxing")) {
    image.src = `./images/sport3.jpg`;
    console.log("worked")
  } else if (pFour.textContent.includes("Muay Thai")) {
    image.src = `./images/sport4.jpg`;
    console.log("worked")
  } else if (pFour.textContent.includes("Tennis")) {
    image.src = `./images/sport5.jpg`;
    console.log("worked")
  }  else if (pFour.textContent.includes("Athletics")) {
    image.src = `./images/sport6.jpg`;
    console.log("worked")
  }
}

sportFunc5 = () => {
  if (pFive.textContent.includes("Football")) {
    image.src = `./images/sport1.jpg`;
    console.log("worked")
  } else if (pFive.textContent.includes("Basketball")) {
    image.src = `./images/sport2.jpg`;
    console.log("worked")
  }  else if (pFive.textContent.includes("Boxing")) {
    image.src = `./images/sport3.jpg`;
    console.log("worked")
  } else if (pFive.textContent.includes("Muay Thai")) {
    image.src = `./images/sport4.jpg`;
    console.log("worked")
  } else if (pFive.textContent.includes("Tennis")) {
    image.src = `./images/sport5.jpg`;
    console.log("worked")
  }  else if (pFive.textContent.includes("Athletics")) {
    image.src = `./images/sport6.jpg`;
    console.log("worked")
  }
}

document.querySelectorAll("p")[0].style.display = "none";
pOne.addEventListener("click", sportFunc1);
pTwo.addEventListener("click", sportFunc2);
pThree.addEventListener("click", sportFunc3);
pFour.addEventListener("click", sportFunc4);
pFive.addEventListener("click", sportFunc5);
