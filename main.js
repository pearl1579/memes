const generateMemeBtn = document.querySelector(
    ".meme-generator .generate-meme-btn");
const memeImage= document.querySelector(".meme-generator img");
const memeAuthor= document.querySelector(".meme-generator .meme-author");
const memeTitle= document.querySelector(".meme-generator .meme-title");

const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = author;
};
const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        updateDetails(data.url, data.title, data.author);
    });
};

generateMemeBtn.addEventListener("click", generateMeme);

var student = {
    id:5,
    name:"Umang",
    mark:150
};

var students = [];
