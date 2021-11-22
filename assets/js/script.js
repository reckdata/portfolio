var open = false;

function Drop(n) {
    var i; // value of i corresponds to the number items in the menu => "nav-item"
    if(open === false) {
        for (i = n; i < 5; i++) {
            Drp(i)
        }
        open = true;
    } else if(open === true) {
        for (i = n; i < 5; i++) {
            Cls(i)
        }
        open = false;
    }
}

function Drp(n) {
    var elem = document.getElementsByClassName("nav-item")[n];
    var pos = -1 * window.innerHeight - n * 100;
    var id = setInterval(frame, 5);

    function frame() {
        if (pos >= -10) {
            clearInterval(id);
            elem.style.top = 0 + 'px';
        } else {
            pos += 10;
            elem.style.top = pos + 'px';
        }
    }
}

function Cls(n) {
    var elems = document.getElementsByClassName("nav-item")[n];
    var poss = 0;
    var ids = setInterval(frames, 5);

    function frames() {
        if(poss <= -1 * window.innerHeight) {
            clearInterval(ids);
            elems.style.top = -1 * window.innerHeight + 'px';
        } else {
            poss += -7 - n * 2;
            elems.style.top = poss + 'px';
        }
    }
}
