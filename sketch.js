let homeButton, searchbutton;
let homePage;
let notificationButton;

function preload() {
  homePage = loadImage('assets/Home.png');
be72c0c94372a85acbbd3f899
}

function setup() {
  // put setup code here
  createCanvas(297, 580);

  image(homePage, 0, 0);

  background(50);

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
  notificationButton = createButton("notification");
  notificationButton.position(200, 519);
  notificationButton.style("background-color", "transparent");
  notificationButton.style("border", "none");
  notificationButton.style("cursor", "pointer");
}
