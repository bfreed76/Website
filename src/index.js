

//~ CONTS N' NODES
const baseImageUrl = "https://loremflickr.com/320/440/"
const imageContainer = document.querySelector(".image-container");
const imageDownloadLink = document.getElementsByTagName("a");
const activityParagraph = document.getElementById("activity");
const nextBtn = document.getElementById("nextImg");
const addTextBtn = document.getElementById("add_text")
const textColorBtn = document.getElementById("textColor");
const boredBtn = document.getElementById("bored");
const ACT_URL = "http://www.boredapi.com/api/activity/";
const memeImage = document.getElementById("meme-pic");
let topTextInput = document.getElementById("top_text_input");
let bottomTextInput = document.getElementById("bottom_text_input");
const topText = document.getElementById("top_text");
const bottomText = document.getElementById("bottom_text");
let h3 = document.querySelectorAll("h3");
let preventCacheRandomNum = 2;
let searchTerm;
const changeBtn = document.getElementById("changeCat");  //change button
const catagoryInput = document.getElementById("cat_input")
let image_subject = "animals" 


//~ SERVER COMMUNICATIONS
const newImg = () => {
    topText.innerText = "";
    bottomText.innerText = "";
    ++preventCacheRandomNum
    let image_random_stringer = "?lock=" + preventCacheRandomNum
    image_subject = catagoryInput.value;  
    let IMG_URL = baseImageUrl + image_subject + image_random_stringer  
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
    imageContainer.append(memeImage);
    setTimeout(() => {displayText();},900);
}

const renderNewActivity = activity => {
    console.log(activity.type);
    let activityText = activity.activity;
    activityText = activityText.toLowerCase();
    activityParagraph.innerText = activityText + ".\"";
}

const changeTextColor = () => {
    topText.classList.toggle("black");
    bottomText.classList.toggle("black");
};

const displayText = () => {
    topText.innerText = topTextInput.value;
    bottomText.innerText = bottomTextInput.value;
}


//~ EVENT HANDERS
nextBtn.addEventListener("click", newImg);

boredBtn.addEventListener("click", newActivity);

textColorBtn.addEventListener("click", changeTextColor);

topTextInput.addEventListener("input", displayText);

bottomTextInput.addEventListener("input", displayText);

//~ HELPER FUNCTIONS

newImg();