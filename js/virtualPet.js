var Cat = function(thePetName){
	this.petName = thePetName;
	this.age = 0;
	this.hunger = Math.random() * 5;
	this.health = 10; 
	this.hapiness = Math.random() * 5;
	this.formNumber = 1;

	this.maxHunger = 5;
	this.minHealth=0;

	this.feed = feed;
	this.play = play;
	this.vet = vet;
	this.display = display;
	this.makeOlder = makeOlder;
};

////cat actions////

Cat.prototype.feed = function() {
    this.hunger = this.hunger - 1;
	if (this.hunger < 0){
		this.hunger = 0;
	}
};

Cat.prototype.play =function(){
	this.hapiness = this.hapiness + 1;
	if (this.hapiness > 5) {
		this.hapiness = 5; 
	}
};

Cat.prototype.vet = function(){
	this.health = this.health - 1;
	if (this.health < 0 ){
		this.health = 0;
	}
};

Cat.prototype.catStatus = function() {
	console.log(this.tiredness);
	console.log(this.hunger);
	console.log(this.lonliness);
	console.log(this.happiness);
};


//// general functions ////
var makeOlder = function (){
	var maxHunger = 10;
	var goodHapiness = 5;
	if (this.health > minHealth){
		this.age += 1;
		this.hapiness -= 1;
		this.hunger += 1;
		if (this.hunger > maxHunger){
			this.health -= 2;
			this.hapiness -= 2;
		}
	}
	this.display();
};

var passTime = function (){
	kitty.makeOlder();
	theTime = setTimeout("passTime();", 3000);
};

var display = function() { 
	var theString = ""; 
	if(this.health == min_health) 
		{ theString = this.petName + " is dead!"; 
	} else { 
		theString += "Health: " + parseInt(this.health); 
		theString += ", Age: " + this.age; 
		theString += ", Happiness: " + parseInt(this.happiness); 
		theString += ", Hunger: " + parseInt(this.hunger); 
		theString += "."; } 
		window.document.forms[this.formNumber].status_textfield.value = the_string; };


var kitty = new Cat (prompt("Name your new cat!"));

/////////

