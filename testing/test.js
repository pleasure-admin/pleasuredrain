const images = [
    "https://www.pleasuredrain.com/img/1.jpg",
    "https://www.pleasuredrain.com/img/2.jpg",
    "https://www.pleasuredrain.com/img/3.jpg"
  ];
  
  const backgroundContainer = document.getElementById("background-container");
  
  function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImageUrl = images[randomIndex];
    backgroundContainer.style.backgroundImage = `url(${randomImageUrl})`;
  }
  
  getRandomImage();