// something simple to get the current scroll direction
// false === down | true === up
var scrollDir = (function (oldOffset) {
    return function (offset) {
        var dir = offset < oldOffset;
        oldOffset = offset;
        return dir;
    };
}());


var header = document.querySelector('header');
addEventListener('scroll', function () {
    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    header.style.top = -(scrollDir(scrollY) ? 0 : header.clientHeight) + 'px';
    
});
