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
const IMG_URL = "https://api.unsplash.com/photos/random"
let searchTerm;
const SEARCH_SUBJECT = BASE_URL + "/?" + searchTerm;
const imageContainer = document.getElementById("image-container");
const nextBtn = document.getElementById("next");
// cont myAccessKey = J5TXtia41iBcVzbeo838Y7DwTnO_VGhNTdVMKVWCU2g;
const ACT_URL = "tps://www.boredapi.com/api/activity";


const renderNewImage = (img) => {
    imageContainer.append(img);
}

//? SERVER COMMUNICATIONS

 const newImg = () => {
     fetch(BASE_URL, { 
     headers: {
       Authorization: Client-ID J5TXtia41iBcVzbeo838Y7DwTnO_VGhNTdVMKVWCU2g
     }})
    .then(res => res.json())
    .then(image => {
        console.log("----", image);
        renderNewImage(image);
    })
    .catch(function(error) {
        log('Request failed', error)
      });
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


//? EVENT HANDERS
nextBtn.addEventListener("click", newImg());


//? DOM MANIPULATION


//? HELPER FUNCTIONS

