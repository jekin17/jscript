/**
 * Created by Jeka on 24.10.2016.
 */


var Animal = {
    speek : speek
}

function speek(args) {
    console.log(args);
}

var Rabbit = {
    name : "",
    collor  : "",
    age : 0,
    earLenght : 0
}

function rabbitProperty(rabbit) {
    var rabbitType = "";
    for(var property in rabbit)
    {
        rabbitType += (property + "  "  +  rabbit[property] + "\n" );
    }
    alert(rabbitType);
}

var FatRabbit = Object.create(Rabbit, {
    name : {value : "Fat"},
    collor : {value : "WhiteIce"},
    age : {value : 45},
    earLenght : {value : 21}
});

var ThinRabbit = Object.create(Rabbit, {
    name : {value : "Thin"},
    collor : {value : "White"},
    age : {value : 6},
    earLenght : {value : 11}
});

var CrazyRabbit = Object.create(Rabbit, {
    name : {value : "Fat"},
    collor : {value : "Black"},
    age : {value : 45},
    earLenght : {value : 121}
});

rabbitProperty(FatRabbit);
rabbitProperty(ThinRabbit);
rabbitProperty(CrazyRabbit);