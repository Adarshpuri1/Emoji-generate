const emojis=['🤩','😍','🤪','😤','🫣','👽','🫠','😬','😅','😰','🤐','🤡','😽','☠️','👻','🤥','😡','😇','🤞','🤟','💪'];

const generateBtn=document.getElementById('generate-btn');
const emojiDisplay= document.getElementById('emoji-display');

function generateRandomEmoji(){
    const randomIndex=Math.floor(Math.random()* emojis.length);
    emojiDisplay.textContent=emojis[randomIndex];
}

generateBtn.addEventListener('click',generateRandomEmoji);