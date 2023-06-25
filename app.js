const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
});

const hiddenElement = document.querySelectorAll('.hidden');
const hiddenElement0 = document.querySelectorAll('.main-gambar');
const hiddenElement1 = document.querySelectorAll('.l-u');
const hiddenElement2 = document.querySelectorAll('.l-d');
const hiddenElement3 = document.querySelectorAll('.r-u');
const hiddenElement4 = document.querySelectorAll('.r-d');
const hiddenElementimg3 = document.querySelectorAll('.img3');
const hiddenElementbg1 = document.querySelectorAll('.bg1');
const hiddenElementline1 = document.querySelectorAll('.line1');
const hiddenElementintroduce = document.querySelectorAll('.introduce');
const hiddenElementintro = document.querySelectorAll('.intro');
const hiddenElementpf = document.querySelectorAll('.pro-female');
const hiddenElementpm = document.querySelectorAll('.pro-male');
const hiddenElementpff = document.querySelectorAll('.prof');
const hiddenElementpmm = document.querySelectorAll('.prom');
const hiddenElementnamef = document.querySelectorAll('.namef');
const hiddenElementnamem = document.querySelectorAll('.namem');


const hidden_iS    = document.querySelectorAll('.invitation-salam');
const hidden_iSBg  = document.querySelectorAll('.invitation-section-bg');
const hidden_iSMP  = document.querySelectorAll('.invitation-section-main-p');
const hidden_iSMH3 = document.querySelectorAll('.invitation-section-main-h3');
hidden_iS.forEach((el)      => observer.observe(el));
hidden_iSBg.forEach((el)    => observer.observe(el));
hidden_iSMP.forEach((el)    => observer.observe(el));
hidden_iSMH3.forEach((el)   => observer.observe(el));


const hidden_c = document.querySelectorAll('.countdown');
const hidden_cdot_lu = document.querySelectorAll('.countdown-dot-lu');
const hidden_cdot_ld = document.querySelectorAll('.countdown-dot-ld');
const hidden_cdot_ru = document.querySelectorAll('.countdown-dot-ru');
const hidden_cdot_rd = document.querySelectorAll('.countdown-dot-rd');
hidden_c.forEach((el)      => observer.observe(el));
hidden_cdot_lu.forEach((el)      => observer.observe(el));
hidden_cdot_ld.forEach((el)      => observer.observe(el));
hidden_cdot_ru.forEach((el)      => observer.observe(el));
hidden_cdot_rd.forEach((el)      => observer.observe(el));

hiddenElement.forEach((el) => observer.observe(el));
hiddenElement0.forEach((el) => observer.observe(el));
hiddenElement1.forEach((el) => observer.observe(el));
hiddenElement2.forEach((el) => observer.observe(el));
hiddenElement3.forEach((el) => observer.observe(el));
hiddenElement4.forEach((el) => observer.observe(el));
hiddenElementimg3.forEach((el) => observer.observe(el));
hiddenElementline1.forEach((el) => observer.observe(el));
hiddenElementbg1.forEach((el) => observer.observe(el));
hiddenElementintroduce.forEach((el) => observer.observe(el));
hiddenElementintro.forEach((el) => observer.observe(el));
hiddenElementpf.forEach((el) => observer.observe(el));
hiddenElementpm.forEach((el) => observer.observe(el));
hiddenElementpff.forEach((el) => observer.observe(el));
hiddenElementpmm.forEach((el) => observer.observe(el));

hiddenElementnamef.forEach((el) => observer.observe(el));
hiddenElementnamem.forEach((el) => observer.observe(el));




var countdownDate = new Date("Sep 17, 2027 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countdownDate - now;

    var days    = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    
    if(distance < 0){
        clearInterval(x);
        document.getElementById("days").innerHTML = "000";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }

    
},10)


// let valueDisplay = document.querySelectorAll('.counter');
// let interval = 5000;

// valueDisplay.forEach((valueDisplay) => {
//     let startValue = 0;
//     let endValue = document.getElementById('days');
//     let duration = Math.floor(interval / endValue);
//     let scounter = setInterval(function(){
//         startValue += 1;
//         valueDisplay.textContent = startValue;
//         if (startValue == endValue){
//             clearInterval(scounter);
//         }
//     }, duration)
// })



