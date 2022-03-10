let homeButton;
let homePage;
let notificationButton;

function preload() {
  homePage = loadImage('assets/Home.png');
}

function setup() {
  // put setup code here
  createCanvas(297, 580);

  image(homePage, 0, 0);

  notificationButton = createButton("notification");
  notificationButton.position(200, 519);
  notificationButton.style("background-color", "transparent");
  notificationButton.style("border", "none");
  notificationButton.style("cursor", "pointer");

}

function loadCamera() {
  // put drawing code here
  image(img, 0, 0);
}