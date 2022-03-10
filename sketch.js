let homeButton, searchbutton;
let homePage;
let notificationButton;
let searchImg;
let notificationPost;

let notificationPage;
let notificationDeletePage;

function preload() {
  homePage = loadImage('assets/HomePage.png');
  notificationPage = loadImage('assets/Notification_Page.png');
  searchImg = loadImage('assets/Search.png');
  notificationPost = loadImage('assets/Notification_post.png');
  notificationDeletePage = loadImage('assets/Notification.png')
}

function setup() {
  // put setup code here
  createCanvas(297, 580);

  image(homePage, 0, 0);

  setupSearchButton();
  setupNotificationButton();
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
  notificationButton.style("background-color", "transparent");
  notificationButton.style("border", "none");
  notificationButton.style("cursor", "pointer");

  notificationButton.mousePressed(showNotificationMenu);
}

function showNotificationMenu() {
  image(notificationPage, 0, 0);
  notificationButton = createButton('');
  notificationButton.position(200, 519);
  notificationButton.style('background-color', 'transparent');
  notificationButton.style('border', 'none');
  notificationButton.style('cursor', 'pointer');
  
  notificationPostButton = createButton('');
  notificationPostButton.position(10, 100);
  notificationPostButton.size(250, 80);
  notificationPostButton.style('background-color', 'transparent');
  notificationPostButton.style('border', 'none');
  notificationPostButton.style('cursor', 'pointer');
  notificationPostButton.mousePressed(showNotificationMenuDelete);
}

function showNotificationMenuDelete() {
  image(notificationDeletePage, 0, 0);
}

function setupHomeButton() {
  homeButton = createButton('');
  homeButton.position(20, 519);
  homeButton.size(50, 20);
  homeButton.style("background-color", "transparent");
  homeButton.style("border", "none");
  homeButton.style("cursor", "pointer");

  homeButton.mousePressed(showHomeMenu);
}

function showHomeMenu() {
  image(homePage, 0, 0);
}
