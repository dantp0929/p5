let homeButton, searchbutton;
let homePage;
let notificationButton;
let searchImg;
let upvoteImg;
let downvoteImg;
let swiperButton;
let swiperButton2;

let notificationPage;

function preload() {
  homePage = loadImage('assets/HomePage.png');
  notificationPage = loadImage('assets/Notification_Page.png');
  searchImg = loadImage('assets/Search.png');
  upvoteImg = loadImage('assets/Upvote.png');
  downvoteImg = loadImage('assets/Downvote.png');
}

function setup() {
  // put setup code here
  createCanvas(297, 580);

  image(homePage, 0, 0);

  setupSearchButton();
  setupNotificationButton();
  setupCanvasSwipe();
  setupCanvas2Swipe();
  setupHomeButton();
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
  notificationButton = createButton('');
  notificationButton.position(210, 519);
  notificationButton.size(50, 20);
  notificationButton.style('background-color', 'transparent');
  notificationButton.style('border', 'none');
  notificationButton.style('cursor', 'pointer');

  notificationButton.mousePressed(showNotificationMenu);
}

function showNotificationMenu() {
  image(notificationPage, 0, 0);
  notificationButton = createButton('');
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

function setupCanvas2Swipe() {
  swiperbutton2 = createButton('');
  swiperbutton2.position(25, 190);
  swiperbutton2.size(250, 100);
  swiperbutton2.style('background-color', 'transparent');
  swiperbutton2.style('border', 'none');
  swiperbutton2.style('cursor', 'pointer');
  swiperbutton2.mousePressed(showDownvote);
}

function showDownvote() {
  image(downvoteImg, 28, 200);
  swiperbutton2.mousePressed(showHomeMenu);
}

function setupHomeButton() {
  homeButton = createButton('');
  homeButton.position(20, 519);
  homeButton.size(50, 20);
  homeButton.style('background-color', 'transparent');
  homeButton.style('border', 'none');
  homeButton.style('cursor', 'pointer');

  homeButton.mousePressed(showHomeMenu);
}

function showHomeMenu() {
  image(homePage, 0, 0);

  setupSearchButton();
  setupCanvasSwipe();
  setupCanvas2Swipe();
  setupNotificationButton();
}
