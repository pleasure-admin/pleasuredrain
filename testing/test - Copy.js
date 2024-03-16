const images = [
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg"
  ];
  
  const backgroundContainer = document.getElementById("background-container");
  
  function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImageUrl = images[randomIndex];
    backgroundContainer.style.backgroundImage = `url(${randomImageUrl})`;
  }
  
  getRandomImage();