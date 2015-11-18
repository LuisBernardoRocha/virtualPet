var kitty;
var nameKitty = prompt("Meow! A hungry, stray virtual kitty has found you! You decide to take him in as your own. A no-named cat would be silly - so what will you name him?");
var theTimeOut;
var minHealth = 0;
var purr = new Audio('audio/purr.mp3');
var funeral = new Audio ('audio/funeral.mp3');
var loveU = new Audio ('audio/loveu.mp3');

function Pet(thePetName, theFormNumber) {
	this.age = 0;
	this.hunger = 0;  // random number between 0 and 4.99
	this.health = 10;
	this.happiness = 5;
	this.petName = thePetName;
	this.formNumber = theFormNumber;

	this.feed = feed;
	this.play = play;
	this.medicate = medicate;
	this.display = display;
	this.makeOlder = makeOlder;
	window.document.forms[theFormNumber].petName.value = thePetName;
	this.display();
}

function feed() {
	this.hunger = this.hunger - 1;
	if (this.hunger < 0){
		this.hunger = 0;
	}
	this.display();
}

function play() {
	this.happiness = this.happiness + 1;
    if (this.happiness > 10){
		this.happiness = 10;
	}
	this.display();
}

function medicate() {
	this.health = this.health + 1;
	if (this.health > 10){
		this.health = 10;
	} 
    this.display();
}


function display() {
	var theString = "";

	if (this.health < minHealth){
		theString = this.petName + " IS DEAD!";
        $('.meowmeow').attr("src", "img/kitty-2.png");
      	funeral.play();
	} else if (this.age > 20){
        theString = this.petName + " has passed of old age. He lived a happy life.";
          $('.meowmeow').attr("src", "img/kitty-3.png");
    		this.health = 100;
    		loveU.play();
    } else {
		theString += "Happiness " + parseInt(this.happiness);
		theString += ".  Hunger: " + parseInt(this.hunger);
		theString += ".  Health: " + parseInt(this.health);		
		theString += ".  Age: " + parseInt(this.age);
		theString += ".";
	}

	window.document.forms[this.formNumber].petStatus.value = theString;
}	
	

function makeOlder() {

	var maxHunger = 5;
	var goodHappiness = 5; 

	if (this.health > minHealth){
			
		this.age +=1;
		this.happiness -= Math.random() * 2;
		this.hunger += Math.random() * 2;
		
		if (this.hunger > 2){
			this.health -= Math.random() * 2;
			this.happiness -= Math.random() * 2;
		}

		if (this.health < 0){
			this.happiness -= Math.random() * 2;
		}

		if (this.hunger < 0){
			this.hunger = 0;
		}

		if (this.happiness < 4){
			$('.meowmeow').attr("src", "img/kitty-1.png");
		}

		if (this.happiness > goodHappiness){
			this.health += Math.random() *1;
          $('.meowmeow').attr("src", "img/kitty1.png");
		}
        if (this.health > 10){
          this.health = 10;
        }
        if (this.happiness> 9){
        	$('.meowmeow').attr("src", "img/kitty2.png");
          purr.play();
        } 
        if (this.happiness < 0){
        	this.happiness = 0;
        }
	}

	this.display();
}




function start() {
	kitty = new Pet(nameKitty,0);
	moveTime();
}

function moveTime() {
	kitty.makeOlder();
	theTimeOut = setTimeout("moveTime();", 5000);
}	


///Click cat, it meows
      $(document).ready(function() {
        
      $('.meowmeow').click(function(){
        $('.meowmeow').attr("src", "img/kittyalt.png");

      });
      
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'http://www.wavlist.com/soundfx/002/cat-meow4.wav');

        //audioElement.load()
        $.get();
        audioElement.addEventListener("load", function() {
        audioElement.play();
        }, true);


        $('.meowmeow').click(function() {
        audioElement.play();
        });
      });



