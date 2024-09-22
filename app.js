// let forward_btn = document.querySelector(".bi-arrow-right-circle-fill");
// let backward_btn = document.querySelector(".bi-arrow-left-circle-fill");
// let audio = document.getElementById("audio");
// let sounds = [
//   "sounds/mixkit-cat-walk-371.mp3",
//   "sounds/mixkit-gimme-that-groove-872.mp3",
//   "sounds/mixkit-hollidays-690.mp3",
//   "sounds/mixkit-silent-descent-614.mp3",
//   "sounds/mixkit-sports-highlights-51.mp3",
// ];
// let playBtn = document.querySelector(".bi-play-fill");
// playBtn.addEventListener("click", () => {});

// // Function for changing the source for sounds array
// // let random = () => {
// //   let randomNo = Math.random() * sounds.length;
// //   let floorNo = Math.floor(randomNo);
// //   return floorNo;
// // };

// let number = 0;
// console.log(number);

// // Playing the sounds

// forward_btn.addEventListener("click", () => {
//   audio.src = sounds[number++];
//   audio.play();
//   if (audio.src === "sounds/mixkit-sports-highlights-51.mp3") {
//     audio.play();
//     audio.src = "sounds/mixkit-cat-walk-371.mp3";
//   }
// });

// backward_btn.addEventListener("click", () => {
//   audio.src = sounds[number++];

//   audio.play();
// });
let forward_btn = document.querySelector(".bi-arrow-right-circle-fill");
let backward_btn = document.querySelector(".bi-arrow-left-circle-fill");
let audio = document.getElementById("audio");
let sounds = [
  "./sounds/mixkit-cat-walk-371.mp3",
  "./sounds/mixkit-gimme-that-groove-872.mp3",
  "./sounds/mixkit-hollidays-690.mp3",
  "./sounds/mixkit-silent-descent-614.mp3",
  "./sounds/mixkit-sports-highlights-51.mp3",
];

let playBtn = document.querySelector(".bi-play-fill");
let pauseBtn = document.querySelector(".bi-pause");
let number = 0;
let description = document.querySelector(".description");
let title = [
  "Cat-walk",
  "Gimme-groove",
  "Holidays",
  "Silent-descent",
  "Sports-highlights",
];
// Function for next sound
let playAudio = () => {
  number = (number + 1) % sounds.length; // Increment and loop back to 0 if needed
  audio.src = sounds[number];
  audio.play();
  console.log(number++);
};
// Function for previous sound
let playAudio_2 = () => {
  number = (number - 1 + sounds.length) % sounds.length; // Decrement and loop back if needed
  audio.src = sounds[number];
  audio.play();
};
// Playing the sounds
forward_btn.addEventListener("click", () => {
  playAudio();
  updateDescription();
});

backward_btn.addEventListener("click", () => {
  updateDescription();
  playAudio_2();
});

// Optionally, you can handle the play button
playBtn.addEventListener("click", () => {
  audio.play();
  playBtn.style.transition = "0.2s all";
  playBtn.style.display = "none";
  pauseBtn.style.display = "block";
});

pauseBtn.addEventListener("click", () => {
  pauseBtn.style.transition = "0.2s all";
  audio.pause();
  playBtn.style.display = "block";
  pauseBtn.style.display = "none";
});
// Function for updating the Title of the sound
function updateDescription() {
  if (audio.src.includes("sounds/mixkit-cat-walk-371.mp3")) {
    description.innerHTML = title[0];
  } else if (audio.src.includes("sounds/mixkit-gimme-that-groove-872.mp3")) {
    description.innerHTML = title[1];
  } else if (audio.src.includes("sounds/mixkit-hollidays-690.mp3")) {
    description.innerHTML = title[2];
  } else if (audio.src.includes("sounds/mixkit-silent-descent-614.mp3")) {
    description.innerHTML = title[3];
  } else {
    description.innerHTML = title[4];
  }
}

updateDescription();
console.log(number);
// Making the keyboard event for playing the sounds

window.addEventListener("keyup", (e) => {
  console.log(e.key);
  if (e.key === "ArrowRight") {
    co;
    playAudio();
  } else if (e.key === "ArrowLeft") {
    playAudio_2();
  } else if (e.key === " ") {
    e.preventDefault();

    if (audio.paused) {
      playBtn.style.transition = "0.2s all";
      playBtn.style.display = "block";
      pauseBtn.style.display = "none";
      audio.play();
    } else {
      playBtn.style.transition = "0.2s all";
      playBtn.style.display = "none";
      pauseBtn.style.display = "block";
      audio.pause();
    }
  }

  if (audio.src.includes("sounds/mixkit-cat-walk-371.mp3")) {
    // Conditions for updating the titles by using keyboard keys

    description.innerHTML = title[0];
  } else if (audio.src.includes("sounds/mixkit-gimme-that-groove-872.mp3")) {
    description.innerHTML = title[1];
  } else if (audio.src.includes("sounds/mixkit-hollidays-690.mp3")) {
    description.innerHTML = title[2];
  } else if (audio.src.includes("sounds/mixkit-silent-descent-614.mp3")) {
    description.innerHTML = title[3];
  } else {
    description.innerHTML = title[4];
  }
});
