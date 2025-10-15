// initializing variables
const quote = document.querySelector(".display-quote");
const generateBtn = document.querySelector(".generate-button");
const author = document.querySelector(".display-author");
const copyBtn = document.querySelector(".copy-button");


function generateRandomQuote() {
    generateBtn.innerHTML = '<span class="material-symbols-outlined spin-icon">refresh</span>';

    fetch("http://api.quotable.io/random").then(response => response.json()).then(result => {
        quote.innerText =result.content;
        generateBtn.innerHTML = '<span class="material-symbols-outlined">add</span>';
        author.innerText = `~ ${result.author}`;
        copyBtn.innerHTML= '<span class="material-symbols-outlined">content_copy</span>';

    }
    )
}

generateBtn.addEventListener("click", generateRandomQuote);

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quote.innerText + ' ' + author.innerText);
    copyBtn.innerHTML = '<span class="material-symbols-outlined">check_circle</span>';
});


// calling on the function when the page loads
generateRandomQuote();