var imgs = ["spead.jpg", "diamond.jpg", "club.jpg", "heart.jpg"];
const values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

var table = document.createElement('table');

let buttonClicked = false;

function Createcards () {
if (!buttonClicked) {
for (var i = 0; i < imgs.length; i++) {
var tr = document.createElement('tr');

for (var j = 0; j < values.length; j++) {
var td = document.createElement('td');
var img = document.createElement('img');
img.src = imgs[i];
img.width = 80;
img.height = 80;
img.classList.add('cardss')
td.appendChild(img);

var span = document.createElement('span');
span.innerHTML = values[j];

var imgone = document.createElement("IMG");
imgone.src = imgs[i];
imgone.classList.add("imgone");

var number = document.createElement("div");
number.innerHTML = values[j];
number.classList.add("number");

var imgtwo = document.createElement("IMG");
imgtwo.src = imgs[i];
imgtwo.classList.add("imgtwo");

td.appendChild(span);
td.appendChild(imgone);
td.appendChild(number);
td.appendChild(imgtwo);

tr.appendChild(td);
document.body.appendChild(table);
}

table.appendChild(tr);
}

let joker = ['Joker.png','Joker.png'];
for(let a = 0 ; a < joker.length ; a++){
var dv = document.createElement('div');
var ig = document.createElement('img');
ig.src = joker[a];
ig.width = 80;
ig.height = 80;
ig.classList.add('imgjoker');
dv.classList.add('parentjoker');
dv.appendChild(ig);
document.body.appendChild(dv);
};

buttonClicked = true;
}
}

function generateRandomCards() {

    var cards = document.querySelectorAll('img[id^="card"]');
    var totalScore = 0;
    var cardValues = [];
    var cardImgs = [];
    
    for (var i = 0; i < cards.length; i++) {
    var randomImgIndex = Math.floor(Math.random() * imgs.length);
    var randomValueIndex = Math.floor(Math.random() * values.length);
    
    cards[i].src = imgs[randomImgIndex];
    cards[i].nextElementSibling.textContent = values[randomValueIndex];
    
    var newImg = document.createElement('img');
    newImg.src = imgs[randomImgIndex];
    newImg.width = 15;
    newImg.height = 15;
    newImg.classList.add("newimg");
    cards[i].nextElementSibling.appendChild(newImg);
    
    var newtag = document.createElement('dt');
    newtag.textContent = values[randomValueIndex];
    cards[i].nextElementSibling.appendChild(newtag);
    
    var newImgg = document.createElement('img');
    newImgg.src = imgs[randomImgIndex];
    newImgg.width = 15;
    newImgg.height = 15;
    newImgg.classList.add("newImgg");
    cards[i].nextElementSibling.appendChild(newImgg);
    
    cardValues.push(values[randomValueIndex]);
    cardImgs.push(imgs[randomImgIndex]);
    };
    if (cardValues[0] === cardValues[1] && cardValues[0] === cardValues[2] && cardValues[0] === cardValues[3]) {
        totalScore += 100;
        }
    else if (cardValues[0] === cardValues[1] && cardValues[1] === cardValues[2]) {
            totalScore += 50;
            } else if (cardValues[0] === cardValues[1] && cardValues[1] === cardValues[3]) {
            totalScore += 50;
            } else if (cardValues[0] === cardValues[2] && cardValues[2] === cardValues[3]) {
            totalScore += 50;
            } else if (cardValues[1] === cardValues[2] && cardValues[2] === cardValues[3]) {
            totalScore += 50;
            }
    else if (cardValues[0] === cardValues[1] || cardValues[0] === cardValues[2] || cardValues[0] === cardValues[3] || cardValues[1] === cardValues[2] || cardValues[1] === cardValues[3] || cardValues[2] === cardValues[3]) {
        totalScore += 25;
        }
         if (cardImgs[0] === cardImgs[1] && cardImgs[0] === cardImgs[2] && cardImgs[0] === cardImgs[3]) {
            totalScore += 60;
            }
            else if (cardImgs[0] === cardImgs[1] && cardImgs[1] === cardImgs[2]) {
                totalScore += 40;
                } else if (cardImgs[0] === cardImgs[1] && cardImgs[1] === cardImgs[3]) {
                totalScore += 40;
                } else if (cardImgs[0] === cardImgs[2] && cardImgs[2] === cardImgs[3]) {
                totalScore += 40;
                } else if (cardImgs[1] === cardImgs[2] && cardImgs[2] === cardImgs[3]) {
                totalScore += 40;
                }
        else if (cardImgs[0] === cardImgs[1] || cardImgs[0] === cardImgs[2] || cardImgs[0] === cardImgs[3] || cardImgs[1] === cardImgs[2] || cardImgs[1] === cardImgs[3] || cardImgs[2] === cardImgs[3]) {
            totalScore += 20;
            };    

    var p = document.createElement('p');
    p.textContent = "امتیاز کل :" +totalScore;
    var previousP = document.querySelector('p');
if (previousP) {
document.body.removeChild(previousP);
}

document.body.appendChild(p);
                     
var cardcontainer = document.querySelector('table');
cardcontainer.innerHTML = '';

var jokerParents = document.getElementsByClassName("parentjoker");
while (jokerParents.length > 0) {
jokerParents[0].remove();
}
}