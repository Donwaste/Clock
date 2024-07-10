let mode = 'full';
const output = document.getElementById('output');
const fullBtn = document.getElementById('full');
const dateBtn = document.getElementById('date');
const timeBtn = document.getElementById('time');

fullBtn.onclick = function () {
    mode = 'full';
    update();
};
dateBtn.onclick = function () {
    mode = 'date';
    update();
};
timeBtn.onclick = function () {
    mode = 'time';
    update();
};

function update() {
    output.textContent = format(mode);
}

function format(formatMode) {
    const now = new Date();
    switch (formatMode) {
        case 'time':
            return now.toLocaleTimeString();
        case 'date':
            return now.toLocaleDateString();
        case 'full':
            return now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
        default:
            return now.toLocaleTimeString();
    }
}

update();

setInterval(update, 1000);
