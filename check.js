window.onkeydown = window.onkeyup = window.onkeypress = function (event) {
    if (event.keyCode == 123) {
        event.preventDefault();
        window.event.returnValue = false;
    }
}
var threshold = 160;
var check = setInterval(function () {
    if (window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold) {
        window.location.href = "about:blank";
        window.close();
    }
}, 1000);
window.onload = function () {
    document.onkeydown = function () {
        var e = window.event || arguments[0];
        if (e.keyCode == 123) {
            return false;
        } else if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) {
            return false;
        } else if ((e.shiftKey) && (e.keyCode == 121)) {
            return false;
        } else if ((e.ctrlKey) && (e.keyCode == 85)) {
            return false;
        } else if ((e.ctrlKey) && (e.keyCode == 83)) {
            return false;
        }
    };
    document.oncontextmenu = function () {
        return false;
    }
}
setInterval(function () {
    check();
}, 2000);
var check = function () {
    function doCheck(a) {
        if (('' + a / a)['length'] !== 1 || a % 20 === 0) {
            (function () { }['constructor']('debugger')());
        } else {
            (function () { }['constructor']('debugger')());
        }
        doCheck(++a);
    }
    try {
        doCheck(0);
    } catch (err) { }
};
check();
window.ondragstart = function () {
    return false;
}