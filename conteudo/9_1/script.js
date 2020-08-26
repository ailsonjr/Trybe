function buildWeatherSite() {
  retrieveWeatherInformation();
  layoutSite();
  setupEvents();
  analytics();
}

// Uma função que faz uma operação que demora
function retrieveWeatherInformation() {
  // CODIGO SINCRONO
  const now = new Date().getTime();
  while(new Date().getTime() < now + 5000);
  console.log("RETRIEVING WEATHER...");

  // CODIGO ASINCRONO
  setTimeout(() => console.log("RETRIEVING WEATHER..."), 5000);
}

function layoutSite() {
  console.log("Doing some LAYOUT...");
}

function setupEvents() {
  console.log("Doing some SETUP...");
}

function analytics() {
  console.log("Doing some ANALYTICS...");
}

buildWeatherSite();