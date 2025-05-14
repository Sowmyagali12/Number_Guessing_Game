let randomNumber= Math.floor(Math.random()*100)+1;
let attempts=0;

function checkGuess(){
    const userGuess=parseInt(document.getElementById("userInput").value);
    attempts++;

    if(isNaN(userGuess) || userGuess<1 || userGuess>100){
        document.getElementById("feedback".textContent="Please enter a valid Number between 1 and 100.");
        document.getElementById("feedback").classList.add("text-danger");
        return;
    }

    if(userGuess === randomNumber){
        document.getElementById("result").textContent=`Congratulations! You've guessed the correct number: ${randomNumber}`;
        document.getElementById("feedback").textContent=`It took you ${attempts} attempts.`;
        document.getElementById("feedback").classList.remove("text-danger");
        document.getElementById("feedback").classList.add("text-success");
        document.querySelector(".reset-btn").computedStyleMap.display='block';
    } else {
        let feedbackMessage= userGuess < randomNumber ? "Too low! Try Again." : "Too High! Try Again.";
        document.getElementById("feedback").textContent=feedbackMessage;
        document.getElementById("feedback").classList.remove("text-success");
        document.getElementById("feedback").classList.add("text-danger");
    }
}

function resetGame(){
    randomNumber=Math.floor(Math.random()*100)+1;
    attempts=0;
    document.getElementById("userInput").value="";
    document.getElementById("feedback").textContent=" ";
    document.getElementById("result").textContent="";

    document.getElementById("feedback").classList.remove("text-success","text-danger");
    document.getElementById(".reset-btn").style.display='none';
}