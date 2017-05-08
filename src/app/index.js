var greet = "Whats up!";
var newMessage = () => (`<p>${greet}</p>`);

var app = document.getElementById('app');
app.innerHTML = '<p>Hello there</p>' + newMessage();
