var max = 50;
var min = 0;
var res = 0;
var low = document.getElementById('low-count');
var add = document.getElementById('add-count');
document.getElementById('num').innerHTML = res;
low.addEventListener('click', function() {
    if (res > min) {
        res = res - 1;
        document.getElementById('num').innerHTML = res;
    }
});
add.addEventListener('click', function() {
    if (res < max) {
        res = res + 1;
        document.getElementById('num').innerHTML = res;
    }
});