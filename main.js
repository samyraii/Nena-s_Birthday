const count = document.querySelector(".count");
const countAudio = document.querySelector(".count-audio");
const hbdAudio = document.querySelector(".hbd-audio");
const elzmanAudio = document.querySelector(".elzman-audio");
const day = document.querySelector(".days");
const hour = document.querySelector(".hours");
const minute = document.querySelector(".minutes");
const second = document.querySelector(".seconds");
const clip = document.querySelector(".bg-clip");
const textTwo = document.querySelector(".landing .container .texttwo");
const textThree = document.querySelector(".landing .container .textthree");

let countdowndate = new Date("Nov 20, 2024 00:00:00").getTime();
let counter = setInterval(()  => {

    let dateNow = new Date().getTime();

    let dateDiff = countdowndate - dateNow;

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60 )) / (1000 * 60))
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000)

    day.innerHTML = days < 10 ? `0${days}` : days;
    hour.innerHTML = hours < 10 ? `0${hours}` : hours;
    minute.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    second.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    if (day.innerHTML == 00) {
      document.querySelector(".day").style.display = "none";
      hour.style.fontSize ="30px"
      minute.style.fontSize ="30px"
      second.style.fontSize ="30px"
    }
    if (hour.innerHTML == 00 && day.innerHTML == 00) {
      document.querySelector(".hour").style.display = "none";
      minute.style.fontSize ="40px"
      second.style.fontSize ="40px"
    }
    if (minute.innerHTML == 00 && hour.innerHTML == 00) {
      document.querySelector(".minute").style.display = "none";
      second.style.fontSize ="60px"
      second.innerHTML = seconds;
    }
    if (second.innerHTML == 11 && minute.innerHTML == 00) {
      countAudio.play();
    }
    if (dateDiff < 0) {
        hbdAudio.play();
         clearInterval(counter);
        // countdowndate = new Date("Nov 20, 2025 00:00:00").getTime();
        // dateNow = new Date().getTime();
        // dateDiff = countdowndate - dateNow;
        // days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
        // hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        // minutes = Math.floor((dateDiff % (1000 * 60 * 60 )) / (1000 * 60))
        // seconds = Math.floor((dateDiff % (1000 * 60)) / 1000)

        // document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
        // document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
        // document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
        // document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

        clip.classList.add("clip");
        count.style.display = "none";
        textTwo.innerHTML = "كل سنة وانتي طيبة وبخير دايما يحبيبتي ويارب السنة الجايه ان شاء الله نكون بنحتفل بيه سوا واحنا مخطوبين  ... وتحققي كل الي نفسك فيه يارب ودايما مطمنة وتختمي حفظ القران الكريم يارب واقرب في طاعة الله";
        // textThree.style.display = "block";    
        // document.querySelector(".body").style.alignItems = "unset";
        document.querySelector(".body").style.backgroundImage = "url(images/background2.png)";
        document.querySelector(".body").style.backgroundSize = "contain";
        textTwo.style.display = "none";
        textTwo.style.transition = ".3s";
        document.querySelector(".textone").innerHTML = '🔺         <❤️ رسالتي ';
        document.querySelector(".landing .container.head").style.display = "block";
        document.querySelector(".landing .whylove").style.display = "block";
        document.querySelector(".landing .dream").style.display = "block";
        // document.querySelector(".hide").style.display = "block";
        // document.querySelector(".textone").style.display = "none";


    }

}, 1000)

const textOne = document.querySelector(".textone");
const whyOne = document.querySelector(".whyone");
const whyTwo = document.querySelector(".whytwo");
const dreamOne = document.querySelector(".dreamone");
const dreamTwo = document.querySelector(".dreamtwo");
whyTwo.innerHTML = "بحبك عشان انتي شبهي فحجات كتير , هادية, منطوية, عمرك ما بتفكري تأذي حد , وشاطرة وهتبقى اشطر دكتورة ان شاء الله, ذكية بردو وزي القمر وبتخافي عليا وبتحاولي تحافظي عليا ومهتمة نفسك وبدينك وشطورة فالطبخ دي بالنسبالي بالدنيا عشان انا جعان دلوقتي هه ... وحجات تانية كتييير ربنا يكتبك من نصيبي يارب ويخليكي ليا"
dreamTwo.innerHTML = "بحلم ان ربنا يوفقني ويرزقني واقدر اجي اتقدملك واتجوزك ونبقى دكاترة شطار انا وانتي وبيتنا نعملة سوا ونخلية كله ورد زيك كدا وانتي تهتمي بكل تفصيلة فيه ونعيش سوا كل اص شوفناه وكل اص مشوفناهوش ونعمل اصاات جديدة سوا ونسافر اكيد بس اتجوزك الاول وارجع من الشغل تكوني انتي مستنياني بصنية المكرونه بالبشاميل اممم انا جوعت تاني هه ونتغدى وبليل نجهز سهرة عسل وسناكس ونتفرج على كرتون سوا .. ونخلف عمر وليلى ويبقو قمر شبهك واقولهم بعشق امكو وحجات كتير نفسي احققها معاكي يارب اجمعنا سوا ياااارب"
textOne.onclick = function name(params) {
  
  if (textTwo.style.display == "block") {
    textTwo.style.display = "none";
    textOne.innerHTML = '🔺        <❤️ رسالتي ';
  } else {
    textTwo.style.display = "block";
    textOne.innerHTML = '🔻        <❤️ رسالتي  ';
  }

}


whyOne.onclick = function () {
  
  if (whyTwo.style.display == "block") {
    whyTwo.style.display = "none";
    whyOne.innerHTML = '🔺        <❤️ لماذا احبك؟ ';
  } else {
    whyTwo.style.display = "block";
    whyOne.innerHTML = '🔻        <❤️ لماذا احبك؟  ';
  }

}
dreamOne.onclick = function () {
  
  if (dreamTwo.style.display == "block") {
    dreamTwo.style.display = "none";
    dreamOne.innerHTML = '🔺        <❤️ بحلم باية؟ ';
  } else {
    hbdAudio.pause();
    elzmanAudio.play();
    dreamTwo.style.display = "block";
    dreamOne.innerHTML = '🔻        <❤️ بحلم باية؟  ';
  }

}

// const hideAll = document.querySelector(".hide");
// hideAll.innerHTML = "اخفاء كل ده"
// hideAll.onclick = function () {
//   if (document.querySelector(".landing .container").style.display = "none") {
//     document.querySelector(".landing .container").style.display = "block"
//     hideAll.innerHTML = "اخفاء كل ده"
//   } else {
//     document.querySelector(".landing .container").style.display = "none"
//     hideAll.innerHTML = "اظهار "
//   }
// }