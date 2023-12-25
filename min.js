console.log("Hello World !!");
setInterval(() => {
    d = new Date();
    htime = d.getHours();
    day = d.getDay();
    if (htime < 12) {
        document.getElementById("wish").innerHTML = `Good Morning Have a nice ${day} !!`;
    } else if (htime > 12 && htime <= 17) {
        document.getElementById("wish").innerHTML = `Good afternoon !!`;

    } else if (htime > 17) {
        document.getElementById("wish").innerHTML = `Good Night !!`;
    }
    if (htime > 12) {
        htime = htime - 12;
        m = "PM"
    } else {
        m = "AM"
    }
    mtime = d.getMinutes();
    stime = d.getSeconds();
    if (htime < 10) {
        htime = `0${htime}`;
    }
    if (mtime < 10) {
        mtime = `0${mtime}`;
    }
    if (stime < 10) {
        stime = `0${stime}`;
    }
    hrotation = 30 * htime + mtime / 2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;
    document.getElementById("hours").innerText = htime;
    document.getElementById("mins").innerText = mtime;
    document.getElementById("secs").innerText = stime;
    document.getElementById("apm").innerText = m;
    sec = document.getElementById("logo-sec");
    hour = document.getElementById("logo-hour");
    min = document.getElementById("logo-min");

    sec.style.transform = `rotate(${srotation}deg)`;
    hour.style.transform = `rotate(${hrotation}deg)`;
    min.style.transform = `rotate(${mrotation}deg)`;

}, 1000);


// function for click events 
function changeImg() {

    // display and hide block code 
    document.getElementById("displays").style.display = "none";
    document.getElementById("displays1").style.display = "block";


    p1 = document.getElementById("mor-time");
    p2 = document.getElementById("after-time");
    p3 = document.getElementById("night-time");

    p1 = p1.options[p1.selectedIndex].text;
    p2 = p2.options[p2.selectedIndex].text;
    p3 = p3.options[p3.selectedIndex].text;
    if (p1 == "default") {
        p1 = "Not Set";
    }
    if (p2 == "default") {
        p2 = "Not Set";
    }
    if (p3 == "default") {
        p3 = "Not Set";
    }
    document.getElementById("pera1").innerText = `Set wake up time ::  ${p1}`;
    document.getElementById("pera2").innerText = `Set lunch time   ::  ${p2}`;
    document.getElementById("pera3").innerText = `Set nap time   ::  ${p3}`;
    var i = document.getElementById("mor-time").value;
    var j = document.getElementById("after-time").value;
    var k = document.getElementById("night-time").value;

    dis = document.getElementById("changeimg");
    var hourr = new Date().getHours();
    if (i == hourr) {
        dis.style.backgroundImage = "url('morningtime.png')";
    } else if (j == hourr) {
        dis.style.backgroundImage = "url('lunchtime.png')";
    } else if (k == hourr) {
        dis.style.backgroundImage = "url('nighttme.png')";
    }
}