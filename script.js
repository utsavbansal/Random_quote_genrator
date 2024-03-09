const btn=document.getElementById("btn");
const output=document.querySelector(".output")

const quotes = [
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "Life is really simple, but we insist on making it complicated. - Confucius",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "Life is either a daring adventure or nothing at all. - Helen Keller",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "The biggest adventure you can take is to live the life of your dreams. - Oprah Winfrey",
    "Life is too important to be taken seriously. - Oscar Wilde",
    "Life is a journey that must be traveled no matter how bad the roads and accommodations. - Oliver Goldsmith",
    "Life is short, and it's up to you to make it sweet. - Sarah Louise Delany",
  ];

  btn.addEventListener("click" ,()=>{
    console.log("Clicked");
    let random = Math.floor(Math.random()*quotes.length)
    output.textContent=quotes[random];
  })