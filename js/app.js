'use strict';

console.log("js is loaded");

var ready = confirm("Would you like to be friends?");

console.log(ready);

//'let's ask some questions

if (ready === true) {
    var answeredProperly = false;
    while (answeredProperly === false) {
        var answer1 = prompt("Do you think I would want to be your friend?:");
        console.log(answer1.toLowerCase());
        if (answer1.toLowerCase() === "yes") {
            answeredProperly = true;
            alert("That's great, I think You're hella cool!");
            console.log(answer1.toLowerCase());
        } else if (answer1 === "no") {
            answeredProperly = true;
            alert("That's unfortunate, you'll be missing out.");
            console.log(answer1.toLowerCase());
        } else {
            alert("You need to answer Yes or No");
            console.log(answer1.toLowerCase());
        }
    }
    var hiking = prompt("Do you like hiking?");
    while (hiking) {
        if (hiking.toLowerCase() === "yes") {
            alert("Sweet me too!");
            var joinMe = prompt("I know a place with a great view, would you like to check it out?");
            if (joinMe.toLowerCase() === 'yes') {
                alert("Lets' go!")
            }
            console.log(hiking.toLowerCase());
        } else if (hiking.toLowerCase() === "no") {
            var no = prompt("Have you ever gone hiking to know that you don't like it?")
            if (no.toLowerCase() === 'yes') {
            var yes = prompt("Would you like to try it again with me sometime?");
            if (yes.toLowerCase() === 'yes') {
            var nameLocation = prompt("Where would you like to go?");
                alert("We're going to " + nameLocation.toLowerCase() + " then!");
                console.log(nameLocation.toLowerCase());
            }
            } else if (no.toLowerCase() === "no") {
                alert("Let's try it sometime then!");
                console.log(no.toLowerCase());
            } else {
                alert("You need to answer yes or no");
                console.log(no.toLowerCase());
            }
        } 
        break
    }
    var cookies = prompt("Do you like cookies?");
        if (cookies.toLowerCase() === "yes") {
            alert("I have a lot, let's eat them all right now");
            console.log(cookies.toLowerCase());
        } else if (cookies.toLowerCase() === "no") {
            alert("That's too bad, I guess I'll have to eat them all myself");
            console.log(cookies.toLowerCase());
        } else {
            alert("You need to answer yes or no");
            console.log(cookies.toLowerCase());
        }
    }
