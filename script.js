const emojis=['🤩','😍','🤪','😤','🫣','👽','🫠','😬','😅','😰','🤐','🤡','😽','☠️','👻','🤥','😡','😇','🤞','🤟','💪'];

const generateBtn=document.getElementById('generate-btn');
const emojiDisplay= document.getElementById('emoji-display');
const emojiList= document.getElementById("emoji-list");

emojis.forEach(emoji =>{
    const span = document.createElement('span');
    span.textContent = emoji;
    emojiList.appendChild(span);
})

function generateRandomEmoji(){
    const randomIndex=Math.floor(Math.random()* emojis.length);
    emojiDisplay.textContent=emojis[randomIndex];
    emojiDisplay.style.opacity='1';
}
let currentIndex = 0;
setInterval(()=>{
    emojiList.textContent = emojis[currentIndex];
    emojiDisplay.style.opacity = '1';
    currentIndex= (currentIndex +1) %emojis.length;
},1500)

generateBtn.addEventListener('click',generateRandomEmoji);