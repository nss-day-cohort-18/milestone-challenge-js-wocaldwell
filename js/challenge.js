console.log("I'm sorry Dave, I'm afraind I CAN do that");

// Listen for button click and run function
document.getElementById("submitButton").addEventListener("click", tree);

// Return key === "submit" button click
document.getElementById("input-height").onkeypress=function(e){
    if(e.keyCode===13) {
        e.preventDefault();
        var pressedEnter = document.getElementById("submitButton").click();
    }
}

document.getElementById("input-char").onkeypress=function(e){
    if(e.keyCode===13) {
        e.preventDefault();
        var pressedEnter = document.getElementById("submitButton").click();
    }
}


function tree(treeObject) {
    var treeObject = {
    inputHeight: document.getElementById("input-height").value,
    inputChar: document.getElementById("input-char").value
}
// Check that user populated both text boxes correctly
    if (treeObject.inputHeight === "" || isNaN(treeObject.inputHeight) || treeObject.inputChar ===  "" || treeObject.inputChar.length > 1) {
        alert("Please fill out both inputs correctly!");
    }  else {
        var treeString = "";
        var space = " ";
        var spaceCount = parseInt(treeObject.inputHeight);
        var charCount = 1;
        for (var i = 0; i < parseInt(treeObject.inputHeight); i++) {
            treeString += space.repeat(spaceCount);
            treeString += treeObject.inputChar.repeat(charCount);
            console.log(treeString);
            spaceCount -= 1;
            charCount += 2;
            treeString = "";
        }
    }
}



// function test() {
//     console.log("Listener is working");
// }


