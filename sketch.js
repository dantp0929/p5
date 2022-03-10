let homeButton, searchbutton;
let homePage;
let notificationButton;
let searchImg;
let upvoteImg;
let swiperButton;

function preload() {
  homePage = loadImage('assets/HomePage.png');
  searchImg = loadImage('assets/Search.png');
  upvoteImg = loadImage('assets/Upvote.png');
}

function setup() {
  // put setup code here
  createCanvas(297, 580);

  image(homePage, 0, 0);

  setupSearchButton();
  setupNotificationButton();
  setupCanvasSwipe();
  setupCanvas2Swipe();
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

function setupCanvasSwipe() {
  swiperbutton = createButton('');
  swiperbutton.position(25, 100);
  swiperbutton.size(250, 100);
  swiperbutton.style('background-color', 'transparent');
  swiperbutton.style('border', 'none');
  swiperbutton.style('cursor', 'pointer');
  swiperbutton.mousePressed(showUpvote);
}

function showUpvote() {
  let newImg = image(upvoteImg, 25, 100);
  swiperbutton.mousePressed(showHomeMenu);
}

function setupCanvas2Swipe() {}
