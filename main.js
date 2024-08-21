const generatemembtn = document.querySelector('.meme-generator .generate-meme-btn');
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeImage = document.querySelector(".meme-generator img");
const memeAuthor = document.querySelector(".meme-generator .meme-author");


function updateDetail(url , title , author){
    memeImage.setAttribute("src" ,url)
    memeTitle.innerHTML=title;
    memeAuthor.innerHTML=`Author name : ${author}`;
}
function generatememe(){
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((Response)=> Response.json())
    .then((data)=>{
        updateDetail(data.url,data.title,data.author)
    })
};
generatemembtn.addEventListener('click' ,generatememe);

