// initializing variables
const quote = document.querySelector(".display-quote");
const generateBtn = document.querySelector(".generate-button");
const author = document.querySelector(".display-author");


function generateRandomQuote() {
    generateBtn.innerText = "Loading Quote...";

    fetch("http://api.quotable.io/random").then(response => response.json()).then(result => {
        quote.innerText =result.content;
        generateBtn.innerText = "New Quote";
        author.innerText = `~ ${result.author}`;

    }
    )
}

generateBtn.addEventListener("click", generateRandomQuote);


// calling on the function when the page loads
generateRandomQuote();