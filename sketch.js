let button, img, searchImg, searchbutton;

function preload() {
  img = loadImage('assets/HomePage.png');
  searchImg = loadImage('assets/Search.png');
}

function setup() {
  // put setup code here
  createCanvas(297, 580);
  background(50);

  setupSearchButton();

  image(img, 0, 0);
}

function setupSearchButton() {
  searchbutton = createButton('');
  searchbutton.position(80, 55);
  searchbutton.size(175, 20);
  searchbutton.style('background-color', 'transparent');
  searchbutton.style('border', 'none');
  searchbutton.style('cursor', 'pointer');

  searchbutton.mousePressed(showSearchMenu);
}

function showSearchMenu() {
  image(searchImg, 30, 100);
}
