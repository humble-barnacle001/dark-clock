const h = document.getElementById('hr');
const m = document.getElementById('min');
const s = document.getElementById('sec');
const dh = document.getElementById('dh');
const dm = document.getElementById('dm');
const ds = document.getElementById('ds');
const apm = document.getElementById('apm');
const colonSep = Array.from(document.querySelectorAll('.blink'));

const da = 6;
let i = 0;
let day;
let hr, mn, sc, ms, ct = 0;
setInterval(() => {
    day = new Date();
    sc = day.getSeconds();
    mn = day.getMinutes();
    hr = day.getHours();
    ms = day.getMilliseconds()
    dh.textContent = toFixed2(hr % 12 > 0 ? hr % 12 : 12);
    dm.textContent = toFixed2(mn);
    ds.textContent = toFixed2(sc);
    colonSep.forEach((b) => {
        if ((ct++ / 100) % 2 < 1) {
            b.style.opacity = 0;
        }
        else {
            b.style.opacity = 1;
        }
    });
    apm.textContent = hr > 11 ? 'PM' : 'AM';
    h.style.transform = `rotateZ(${(hr % 12 + mn / 60 + sc / 3600) * da * 5}deg)`;
    m.style.transform = `rotateZ(${(mn + sc / 60) * da}deg)`;
    s.style.transform = `rotateZ(${(sc + ms / 1000) * da}deg)`;
}, 10);

function toFixed2(str) {
    if (str < 10) {
        return `0${str}`;
    }
    return str;
}