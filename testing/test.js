const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg"
  ];
  
  const backgroundContainer = document.getElementById("background-container");
  
  function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImageUrl = images[randomIndex];
    backgroundContainer.style.backgroundImage = `url(${randomImageUrl})`;
  }
  
  getRandomImage();