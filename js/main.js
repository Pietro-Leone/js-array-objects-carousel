"use script"

const prevBtn = document.getElementById("carousel-prev-btn");
const nextBtn = document.getElementById("carousel-next-btn");
const container = document.querySelector(".carousel-on");
const thumbnailContainer = document.querySelector(".thumbnails");
let currentPicIndex = 0;


const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

for (let i = 0; i < images.length; i++) {
    const currentPic = images[i].image;
    let imageClass = "";

    if (i === 0) {
        imageClass = "active"
    }

    container.innerHTML += `<div class="${imageClass} carousel-img">
                                <img src="${currentPic}" class="img" alt="img">
                                <div class="position-absolute bottom-0 end-0 text-white d-flex flex-column align-items-end p-3 bg-black bg-opacity-50 w-100">
                                    <h3>${images[i].title}</h3>
                                    <div class="w-75 text-end">${images[i].text}</div>
                                </div>
                            </div>`


    let thumb = document.createElement("img");
    thumb.classList.add("img", "thumbnail")
    thumb.setAttribute("src", `${currentPic}`);
    thumbnailContainer.append(thumb);


    thumb.addEventListener("click", function () {
        const allElement = document.querySelectorAll(".carousel-img");
        console.log(i)
        allElement[currentPicIndex].classList.remove("active")
        currentPicIndex = i;
        allElement[i].classList.add("active");
    })

}


nextBtn.addEventListener("click", function () {
    const allElement = document.querySelectorAll(".carousel-img");

    allElement[currentPicIndex].classList.remove("active");
    currentPicIndex++;
    if (currentPicIndex > allElement.length - 1) {
        currentPicIndex = 0;
    }
    allElement[currentPicIndex].classList.add("active");

})

prevBtn.addEventListener("click", function () {
    const allElement = document.querySelectorAll(".carousel-img");

    allElement[currentPicIndex].classList.remove("active");
    currentPicIndex--;
    if (currentPicIndex < 0) {
        currentPicIndex = allElement.length - 1;
    }
    allElement[currentPicIndex].classList.add("active");

})