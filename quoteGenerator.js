const api_url =  "https://jsonplaceholder.typicode.com/posts/1";

const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  quote.innerHTML = data.title;
  
}

getQuote(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML,"New Window","width = 600,height = 300");
}




