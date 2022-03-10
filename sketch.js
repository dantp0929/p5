let homeButton, searchbutton;
let homePage;
let notificationButton;
let notificationPage;

function preload() {
  homePage = loadImage('assets/Home.png');
  notificationPage = loadImage('assets/Notification_Page.png');
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
}
