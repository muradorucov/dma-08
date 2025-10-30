const data = [
  {
    id: 1,
    name: "SHOUSE - Love Tonight (Official Radio Edit)",
    path: "./files/SHOUSE - Love Tonight (Official Radio Edit) - SHOUSE (youtube).mp3",
    img: null
  },
  {
    id: 2,
    name: "Mehman Huseynov- Hani Bes",
    path: "./files/Mehman Huseynov- Hani Bes (Official Video Klip 2021 ) - Mehman Huseynov (youtube).mp3",
    img: null
  },
  {
    id: 3,
    name: "Röya – Gün Gələr (Akustik)",
    path: "./files/Röya – Gün Gələr (Akustik) - Röya (youtube).mp3",
    img: null
  },
  {
    id: 4,
    name: "Manaf Ağayev — Bax Belə Bir Toy İstərəm",
    path: "./files/Manaf Ağayev — Bax Belə Bir Toy İstərəm - Manaf Ağayev (youtube).mp3",
    img: null
  },
]

const audioElem = document.querySelector("audio");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const musicTitle = document.querySelector(".screen p")
const durationElem = document.querySelector("#duration");
const currentDuration = document.querySelector("#current-duration");
let index = 0;
generateDuration()



playBtn.addEventListener("click", () => {
  audioPlay()
})
pauseBtn.addEventListener("click", () => {
  audioElem.pause();
  pauseBtn.classList.add("hidden")
  playBtn.classList.remove("hidden")
})
prevBtn.addEventListener("click", () => {
  index--;
  index < 0 ? index = data.length - 1 : index
  audioPlay()
})
nextBtn.addEventListener("click", () => {
  index++;
  if (index >= data.length) {
    index = 0
  }
  audioPlay()
})

function audioPlay() {
  audioElem.src = data[index].path;
  musicTitle.innerHTML = data[index].name
  audioElem.play();
  playBtn.classList.add("hidden");
  pauseBtn.classList.remove("hidden")
  generateDuration()

}


function generateDuration() {
  setTimeout(() => {
    durationElem.innerHTML = generateTime(audioElem.duration)
  }, 100)
}

function generateTime(param) {
  let result = ""
  const minutes = Math.floor(param / 60);
  const seconds = Math.floor(param % 60);
  if (minutes < 10) {
    result = "0" + minutes + ":" + seconds
  }
  if (seconds < 10) {
    result = minutes + ":" + "0" + seconds
  }

  return result
}


audioElem.addEventListener("timeupdate", () => {
  currentDuration.innerHTML = generateTime(audioElem.currentTime)
})