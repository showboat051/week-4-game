
/*------------------------------
        GLobal variables
--------------------------------*/
var between0and120 = Math.floor(Math.random()*120);

var between1and12 =function(min,max){

return  Math.floor(Math.random()*(max-min + 1))+min;
}


var targetScore = 0
var currentScore = 0
var wins = 0
var losses = 0
var crystalValue = {
    ruby: {
        name: "ruby",
        value:0
    },
    
    diamond: { 
        name: "diamond",
        value:0
    },
    
    emerald: {
        name: "emerald",
        value:0
    },
    
    
    citrine: {
        name: "citrine",
        value:0
    },
    
    };


/*------------------------------
            Functions
--------------------------------*/
function startGame() {
     currentScore = 0
     targetScore = between0and120
     console.log("TARGET SCORE: "+ targetScore)
    crystalValue.ruby.value= between1and12(1,12)
    console.log(crystalValue.ruby.value)

    crystalValue.diamond.value= between1and12(1,12)
    console.log(crystalValue.diamond.value)

    crystalValue.citrine.value= between1and12(1,12)
    console.log(crystalValue.citrine.value)

    crystalValue.emerald.value= between1and12(1,12)
    console.log(crystalValue.emerald.value)
    $("#targetscore").text(between0and120);

   
}

function gameClear(){

}

/*------------------------------
            Process
------------------------------*/

startGame()



// Match this number


//When clicking on ruby
$("#ruby").on("click",function(){ 
    this.ruby
    console.log(crystalValue.ruby.value)
    currentScore = currentScore + crystalValue.ruby.value
    $("#score").text(currentScore)
    if( currentScore == targetScore) {
        alert("YOU WIN!!!")
        startGame()

    console.log("You win")
    } else if(currentScore > targetScore){
        alert("YOU LOSE!!!!")
        console.log("YOU LOSE")
        startGame()

    } 
    // ("you clicked" + crystals [0].value);


});
// Diamond scoring click
$("#diamond").on("click",function(){ 
    this.diamond
    console.log(crystalValue.diamond.value)
    currentScore = currentScore + crystalValue.diamond.value
    $("#score").text(currentScore)
   if( currentScore == targetScore) {
        alert("YOU WIN!!!")
        startGame()

    console.log("You win")
    } else if(currentScore > targetScore){
        alert("YOU LOSE!!!!")
        console.log("YOU LOSE")
        startGame()

    } 
    // ("you clicked" + crystals [0].value);


});

// Citrene scoring click
$("#citrine").on("click",function(){ 
    this.citrine
    console.log(crystalValue.citrine.value)
    currentScore = currentScore + crystalValue.citrine.value
    $("#score").text(currentScore)
    if( currentScore == targetScore) {
        alert("YOU WIN!!!")
        startGame()

    console.log("You win")
    } else if(currentScore > targetScore){
        alert("YOU LOSE!!!!")
        console.log("YOU LOSE")
        startGame()

    } 
    // ("you clicked" + crystals [0].value);


});




// Emerald scoring click
$("#emerald").on("click",function(){ 
    this.emerald
    console.log(crystalValue.emerald.value)
    currentScore = currentScore + crystalValue.emerald.value
    $("#score").text(currentScore)   
    // ("you clicked" + crystals [0].value);
    if( currentScore == targetScore) {
        alert("YOU WIN!!!")
    console.log("You win")
    startGame()
    } else if(currentScore > targetScore){
        alert("YOU LOSE!!!!")
        console.log("YOU LOSE")
        startGame()
    } 

});

    
console.log(between0and120);
