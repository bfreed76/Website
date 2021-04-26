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
const imageContainer = document.getElementById("image-container");
const activityParagraph = document.querySelector("p");
const nextBtn = document.getElementById("nextAct");
const boredBtn = document.getElementById("bored");
const ACT_URL = "http://www.boredapi.com/api/activity/";
const memeImage = document.getElementById("meme-pic");
let preventCacheRandomNum = 1;
let searchTerm;




//? SERVER COMMUNICATIONS
const newImg = () => {
    ++preventCacheRandomNum
    let image_random_stringer = "?random" + preventCacheRandomNum
    const image_subject = "animals" 
    // let IMG_URL = baseImageUrl + image_subject + image_random_stringer
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



//? DOM MANIPULATION
const renderNewImage = img => {
    memeImage.src = "";
    memeImage.src = img;
    imageContainer.append(memeImage);
}

const renderNewActivity = activity => {
    console.log(activity.type);
    activityParagraph.innerText = activity.activity + ".";
}



//? EVENT HANDERS
nextBtn.addEventListener("click", newImg);

boredBtn.addEventListener("click", newActivity);



//? HELPER FUNCTIONS

newImg();