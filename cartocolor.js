!function() {

var cartocolor = {

};

if (typeof define === "function" && define.amd) {
    define(colorbrewer);
} else if (typeof module === "object" && module.exports) {
    module.exports = colorbrewer;
} else {
    this.colorbrewer = colorbrewer;
}

}();
