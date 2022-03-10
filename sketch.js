let button, img, searchbutton;

function preload() {
  img = loadImage('assets/Home.png');
}

function setup() {
  // put setup code here
  createCanvas(297, 580);
  background(50);

  setupSearchButton();

  loadCamera();
}

function setupSearchButton() {
  searchbutton = createButton('');
  searchbutton.position(80, 55);
  searchbutton.size(175, 20);
  searchbutton.style('background-color', 'transparent');
  searchbutton.style('border', 'none');
  searchbutton.style('cursor', 'pointer');
}

function loadCamera() {
  // put drawing code here
  image(img, 0, 0);
}
