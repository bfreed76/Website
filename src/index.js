/* As a user, I want to...
    - easily make a custom meme
    - save a custom meme to my computer 
    - get ideas of what activity to do next, just like sweet ol' mom would give
    - STRETCH
    - save a custom meme to a collection
    - view a collection of other people's memes
    - 'like' other people's memes
    - share my meme through one or more social media channels
*/



//? CONTS N' NODES
// const BASE_URL = "https://source.unsplash.com/1600x900";
// cont myAccessKey = J5TXtia41iBcVzbeo838Y7DwTnO_VGhNTdVMKVWCU2g;
// const SEARCH_SUBJECT = BASE_URL + "/?" + searchTerm;
// const IMG_URL = "https://api.unsplash.com/photos/random"
const baseImageUrl = "https://loremflickr.com/320/440/"
const imageContainer = document.querySelector(".image-container");
const imageDownloadLink = document.getElementsByTagName("a");
const activityParagraph = document.querySelector("p");
const nextBtn = document.getElementById("nextImg");
// const addTextBtn = document.getElementById("add_text")
const textColorBtn = document.getElementById("textColor");
const boredBtn = document.getElementById("bored");
const ACT_URL = "http://www.boredapi.com/api/activity/";
const memeImage = document.getElementById("meme-pic");
const topTextInput = document.getElementById("top_text_input");
const bottomTextInput = document.getElementById("bottom_text_input");
const topText = document.getElementById("top_text");
const bottomText = document.getElementById("bottom_text");
const canvas = document.querySelector("canvas");
let h3 = document.querySelectorAll("h3");
let preventCacheRandomNum = 2;
let searchTerm;
const changeBtn = document.getElementById("changeCat");  //change button
const catagoryInput = document.getElementById("cat_input")
let image_subject = "animals" 
let c = canvas.getContext('2d');
const canvasTopText = document.getElementById("canvasTopText");


//~ SERVER COMMUNICATIONS
const newImg = () => {
    ++preventCacheRandomNum
    let image_random_stringer = "?lock=" + preventCacheRandomNum
    image_subject = catagoryInput.value;   //todo doesn't change category with first click
    let IMG_URL = baseImageUrl + image_subject + image_random_stringer  //FIX IMAGE CATEGORY
    renderNewImage(IMG_URL);
};

const newActivity = () => {
    fetch(ACT_URL)
    .then(res => res.json())
    .then(activity => {
        renderNewActivity(activity);
    })
    .catch(function(error) {
        console.log('Request failed', error)
    });
}



//~ DOM MANIPULATION
const renderNewImage = img => {
    memeImage.src = "";
    memeImage.src = img;
    memeImage.onload = () => {
        c.drawImage(memeImage, 0, 0, 320, 440)   // CANVAS
        imageContainer.append(memeImage);
    }};
    
    const renderNewActivity = activity => {
        console.log(activity.type);
        activityParagraph.innerText = activity.activity + ".";
    };
    
    const changeTextColor = () => {
        topText.classList.toggle("black");
        bottomText.classList.toggle("black");
    };
    
    const displayText = () => {
        // console.log("displayText", topTextInput.value);
        topText.innerText = topTextInput.value;
        bottomText.innerText = bottomTextInput.value;
    };
    
    const canvasDisplayText = (msg) => {
        console.log('canvasDisplayTest', msg.data);
        canvasTopText = msg.data;
    };

//~ EVENT HANDERS
nextBtn.addEventListener("click", newImg);

boredBtn.addEventListener("click", newActivity);

textColorBtn.addEventListener("click", changeTextColor);

topTextInput.addEventListener("input", displayText);
bottomTextInput.addEventListener("input", displayText);

topTextInput.addEventListener("input", canvasDisplayText)


//~ HELPER FUNCTIONS


newImg();