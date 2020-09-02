if (ready === true){
    var answeredProperly = false;
    while (answeredProperly === false){
        var answer2 = prompt("Do you like hiking?");
        console.log(answer1.toLowerCase());
        if (answer2.toLowerCase() === "yes") {
            answeredProperly = true;
            alert(answer2 + "Sweet! I love hiking!");
            console.log(answer1.toLowerCase());
        } else if (answer2.toLowerCase() === 'no'){
            vansweredProperly = true;
            answer2.toLowerCase = prompt("Have you ever been hiking to know that you don't like it?");
            console.log(answer2.toLowerCase());
        } else {
            alert(answer2 + "You need to answer Yes or No");
            console.log(answer2.toLowerCase());
        }
    }
}