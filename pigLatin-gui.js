let word = "";

const saveInput = (userInput) => {
    word = userInput;
    console.log(word);
}

const pigLatin = () => {

    // input: Seattle   output: eattlesay
    // input: Austin   output: austinyay
    
    let vowels = ["a", "e", "i", "o", "u"];
    let wordArray = word.trim().toLowerCase().split("");
    let firstCons = [];
    let latinWord = "";
    let ay = "ay";
    let yay = "yay";
    for (let i = 0; i < wordArray.length; i++) {
      if (vowels.includes(wordArray[i])) {
        break;
      }
      if (!vowels.includes(wordArray[i])) {
        firstCons.push(wordArray[i]);
      }
    }
    if (firstCons.length === 0) {
      latinWord = yay;
    } else {
      latinWord = ay;
    }

    let pigLatinWord = wordArray.slice(firstCons.length).join("") + firstCons.join("") + latinWord;
    
    console.log(pigLatinWord);
    
    const pigWord = document.createElement("p");
    pigWord.innerHTML = pigLatinWord;
    document.getElementById("myDiv").appendChild(pigWord);
}



