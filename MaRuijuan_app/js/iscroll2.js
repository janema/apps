var myScroll;
function loaded() {
    myScroll = new iScroll('wrapper', { scrollbarClass: 'myScrollbar' });
}

/*document.addEventListener('touchmove', function (e) { e.preventDefadivt(); }, false);*/

document.addEventListener('DOMContentLoaded', loaded, false);