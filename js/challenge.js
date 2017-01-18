console.log("Hello, this is a snippet.");

// Listen for button click and run function
document.getElementById("submitButton").addEventListener("click", tree);

//Return key === "submit" button click
// document.getElementsByClassName("inputs").onkeypress=function(e){
//     if(e.keyCode===13) {
//         e.preventDefault();
//         var pressedEnter = document.getElementById("submitButton").click();
//     }
// }

var treeObject = {
    inputHeight: document.getElementById("input-height").value,
    inputChar: document.getElementById("input-char").value
}

function tree(treeObject) {
// Check that user populated both text boxes
    if (treeObject.inputHeight === "" || treeObject.inputChar ===  "") {
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
        }
    }
}




