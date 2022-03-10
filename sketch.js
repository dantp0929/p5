let homeButton, searchbutton;
let homePage;
let notificationButton;
let searchImg;

function preload() {
  homePage = loadImage('assets/HomePage.png');
  searchImg = loadImage('assets/Search.png');
}

function setup() {
  // put setup code here
  createCanvas(297, 580);

  image(homePage, 0, 0);

  setupSearchButton();
  setupNotificationButton();
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

function setupNotificationButton() {
  notificationButton = createButton('notification');
  notificationButton.position(200, 519);
  notificationButton.style('background-color', 'transparent');
  notificationButton.style('border', 'none');
  notificationButton.style('cursor', 'pointer');
}
