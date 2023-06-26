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
const hiddenElement0 = document.querySelectorAll('.main-image');
hiddenElement.forEach((el) => observer.observe(el));
hiddenElement0.forEach((el) => observer.observe(el));   





// start profile
const hidden_pF = document.querySelectorAll('.profile-female');
const hidden_pM = document.querySelectorAll('.profile-male');
const hidden_pFI = document.querySelectorAll('.profile-female-image');
const hidden_pMI = document.querySelectorAll('.profile-male-image');
const hidden_pFS = document.querySelectorAll('.profile-female-span');
const hidden_pMS = document.querySelectorAll('.profile-male-span');
const hidden_pFH1 = document.querySelectorAll('.profile-female-h1');
const hidden_pMH1 = document.querySelectorAll('.profile-male-h1');
hidden_pF.forEach((el) => observer.observe(el));
hidden_pM.forEach((el) => observer.observe(el));
hidden_pFI.forEach((el) => observer.observe(el));
hidden_pFS.forEach((el) => observer.observe(el));
hidden_pMS.forEach((el) => observer.observe(el));
hidden_pMI.forEach((el) => observer.observe(el));
hidden_pFH1.forEach((el) => observer.observe(el));
hidden_pMH1.forEach((el) => observer.observe(el));
// end profile












// start ayat
const hidden_alu = document.querySelectorAll('.ayat-lu');
const hidden_ald = document.querySelectorAll('.ayat-ld');
const hidden_aru = document.querySelectorAll('.ayat-ru');
const hidden_ard = document.querySelectorAll('.ayat-rd');
const hidden_aTP = document.querySelectorAll('.ayat-teks-p');
hidden_alu.forEach((el) => observer.observe(el));
hidden_ald.forEach((el) => observer.observe(el));
hidden_aru.forEach((el) => observer.observe(el));
hidden_ard.forEach((el) => observer.observe(el));
hidden_aTP.forEach((el) => observer.observe(el));
// end ayat

// start image
const hiddeniBG1 = document.querySelectorAll('.image-bg1');
const hiddeniIMG3 = document.querySelectorAll('.image-img3');
const hiddeniL1 = document.querySelectorAll('.image-line1');
hiddeniBG1.forEach((el) => observer.observe(el));
hiddeniIMG3.forEach((el) => observer.observe(el));
hiddeniL1.forEach((el) => observer.observe(el));
// end image

// start introduce
const hiddenmI = document.querySelectorAll('.main-introduce');
hiddenmI.forEach((el) => observer.observe(el));
// end introduce

// start invitation
const hidden_iS    = document.querySelectorAll('.invitation-salam');
const hidden_iSBg  = document.querySelectorAll('.invitation-section-bg');
const hidden_iSMP  = document.querySelectorAll('.invitation-section-main-p');
const hidden_iSMH3 = document.querySelectorAll('.invitation-section-main-h3');
hidden_iS.forEach((el)      => observer.observe(el));
hidden_iSBg.forEach((el)    => observer.observe(el));
hidden_iSMP.forEach((el)    => observer.observe(el));
hidden_iSMH3.forEach((el)   => observer.observe(el));
// end invitation

// start countdown
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
// end countdown


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



