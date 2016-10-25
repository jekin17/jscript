/**
 * Created by Jeka on 24.10.2016.
 */


var Animal = {
    speek : speek
}

function speek(args) {
    console.log(args);
}

function Rabbit(name, collor, age, earLenght) {
    this.name =  name;
    this.collor  = collor;
    this.age = age;
    this.earLenght = earLenght;
}

Rabbit.prototype = Animal;

var FatRabbit = new Rabbit("Fat", "White", 45, 30);
var ThinRabbit = new Rabbit("Thin", "Gray", 12, 15);
var CrazyRabbit = new Rabbit("Crazy", "lightGray", 32, 20);



function rabbitProperty(rabbit) {
    var rabbitType = "";
    for(var property in rabbit)
    {
        rabbitType += (property + "  "  +  rabbit[property] + "\n" );
    }
    alert(rabbitType);
}

rabbitProperty(FatRabbit);
rabbitProperty(ThinRabbit);
rabbitProperty(CrazyRabbit);
FatRabbit.speek("I am fat");
ThinRabbit.speek("I am thin");
CrazyRabbit.speek("I am crazy");