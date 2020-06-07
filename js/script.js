//button Menu
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

const nextImg = document.querySelector('.flexOp');

nextImg.addEventListener('click', () => {
  imgArray = {
    img: "images/myphoto.jpg",
    img2: "images/IMG_9998.jpg",
    img3: "images/myph.jpg",

  };

  const img = document.getElementById('image');
  let image = Object.keys(imgArray);
  var randomKey2 = image[Math.floor(Math.random() * image.length)];
  img.src = imgArray[randomKey2];

});