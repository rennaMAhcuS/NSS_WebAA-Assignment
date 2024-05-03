function showTime() {
    const clock = document.getElementById('clock');
    const now = new Date();
    // clock.innerHTML = now.toLocaleTimeString();
    clock.innerHTML = "Time (in 24 Hr): " + now.toLocaleTimeString();
    setTimeout(showTime, 1000);
}

window.onload = function() {
    showTime();
}