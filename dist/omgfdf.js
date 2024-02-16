var urls = new Array();
urls[0] = "http://learninginhand.com";
urls[1] = "http://learninginhand.com/about";
urls[2] = "http://learninginhand.com/contact";
urls[4] = "http://learninginhand.com/services";
urls[5] = "http://learninginhand.com/videos";
urls[6] = "http://learninginhand.com/infographics";
urls[7] = "http://learninginhand.com/resources";
urls[8] = "http://learninginhand.com/stickaround";
urls[9] = "http://learninginhand.com/posts";
urls[10] = "http://learninginhand.com/pet";

var random = Math.floor(Math.random()*urls.length);

window.location = urls[random];
