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
const baseImageUrl = "https://loremflickr.com/320/440/animals?random=1"
const image_subject = "animals" = "?random="
const image_random_stringer = "?random"
const imageContainer = document.getElementById("image-container");
const activityParagraph = document.querySelector("p");
const nextBtn = document.getElementById("nextAct");
const boredBtn = document.getElementById("bored");
const ACT_URL = "tps://www.boredapi.com/api/activity";
const memeImage = document.getElementById("meme-pic");
let searchTerm;




//? SERVER COMMUNICATIONS
 const newImg = () => {
     renderNewImage(IMG_URL);
    };

  
const newActivity = () => {
    fetch(ACT_URL)
    .then(res => res.json())
    .then(activity => {
        console.log("#####fetch activity", activity);
        renderNewActivity(activity);
    })
    .catch(function(error) {
        console.log('Request failed', error)
      });
}



//? DOM MANIPULATION
const renderNewImage = img => {
    console.log("working!", img)
    memeImage.src = "";
    memeImage.src = img;
    imageContainer.append(memeImage);
}

const renderNewActivity = activity => {
    console.log("also working")
}



//? EVENT HANDERS
nextBtn.addEventListener("click", newImg);

boredBtn.addEventListener("click", renderNewActivity);



//? HELPER FUNCTIONS

newImg();