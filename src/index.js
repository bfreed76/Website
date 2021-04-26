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
const IMG_URL = "https://api.unsplash.com/photos/random"
const imageContainer = document.getElementById("image-container");
const activityParagraph = document.querySelector("p");
const nextBtn = document.getElementById("nextAct");
const boredBtn = document.getElementById("bored");
const ACT_URL = "tps://www.boredapi.com/api/activity";
let searchTerm;




//? SERVER COMMUNICATIONS
//todo fetch auth not working
 const newImg = () => {
     fetch(IMG_URL, { 
     headers: {
       Authorization: 'Client-ID J5TXtia41iBcVzbeo838Y7DwTnO_VGhNTdVMKVWCU2g'}})
    .then(res => res.json())
    .then(image => {
        console.log("CONSOLE", image);
        renderNewImage(image);
    })
    .catch(error => {
        log('Whoopsie!, error')
    })
}
  
const newActivity = () => {
    fetch(ACT_URL)
    .then(res => res.json())
    .then(activity => {
        console.log("#####", activity);
        renderNewActivity(activity);
    })
    .catch(function(error) {
        log('Request failed', error)
      });
}



//? DOM MANIPULATION
const renderNewImage = img => {
    console.log("image received", img.urls.regular)
    // imageContainer.append(img);
}

const renderNewActivity = activity => {
    console.log("also working")
}



//? EVENT HANDERS
nextBtn.addEventListener("click", renderNewImage);

boredBtn.addEventListener("click", renderNewActivity);



//? HELPER FUNCTIONS

newImg();