var Header = function (img, text) {
    this.headerimg = img;
    this.headerimgtext = text;
    this.display = $('#headerimg').attr('src', this.headerimg);
    $('#headerimgtext').attr('src', this.headerimgtext);
    return this;
};

var challengeHeader = function (img, text) {
    Header.call(this, img, text);
};
var cheader = new challengeHeader("img/headerimage.png", "img/headerchallenge.png");

cheader.display();
