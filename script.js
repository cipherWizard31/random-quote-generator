// initializing variables

const quote = document.querySelector(".display-quote");
const generateBtn = document.querySelector(".generate-button");


function generateRandomQuote() {
    fetch("https://api.quotable.io/random").then(response => response.json()).then(result => {
        quote.innerText =result.content;
    }
    )
}

generateBtn.addEventListener("click", generateRandomQuote);


// calling on the function when the page loads
generateRandomQuote();