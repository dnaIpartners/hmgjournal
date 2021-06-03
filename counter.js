/* 210603 */
// $(document).ready(function () {
//     CountDownTimer('6/5/2021 10:10 PM', 'counter');
//     CountDownTimer('6/5/2021 10:10 PM', 'counter--sticky'); //210526 add
// });
/* //210603 */

window.onload = function () {
    var $container = $(".container"),
        $header = $container.find("header"),
        $bannerWrap = $container.find(".banner-wrap"),
        $bannerBox = $bannerWrap.find(".box-banner"),
        $bannerClose = $bannerWrap.find("button");
};


//서버 시간 가져온다

function srvTime() {
    var xmlHttp;
  if (window.XMLHttpRequest) { // IE 7.0 이상, 크롬, 파이어폭스일 경우 분기 
    xmlHttp = new XMLHttpRequest(); 
    xmlHttp.open('HEAD',window.location.href.toString(),false);
    xmlHttp.setRequestHeader("Content-Type", "text/html"); 
    xmlHttp.send(''); 
      var st1 = xmlHttp.getResponseHeader("Date");
     // alert(st1);

    return xmlHttp.getResponseHeader("Date");
}

function CountDownTimer(dt, id) {
    var end = new Date(dt),
        _second = 1000, 
        _minute = _second * 60, 
        _hour = _minute * 60, 
        _day = _hour * 24, 
        timer;

    function showRemaining() {
        /*var now = new Date(),
            distance = end - now;*/
        var st;
        st = srvTime();
        var date = new Date(st);
        distance = end - date;
        // 시간 종료 시 뜨는 문구
        // if (distance < 0) {
        //  clearInterval(timer);
        //  document.getElementById(id).innerHTML = '시간 종료 시 뜨는 문구 입력';
        //  return;
        // }

        var days = Math.floor(distance / _day) * 24, 
            hours = Math.floor((distance % _day) / _hour), 
            minutes = Math.floor((distance % _hour) / _minute), 
            seconds = Math.floor((distance % _minute) / _second);
        //document.getElementById(id).innerHTML = days + '일 ';
        document.getElementById(id).innerHTML = '<div class="unit-wrap"><strong>' + addZeros(hours + days, 2) + '</strong> <span class="unit">Hours</span></div>';
        document.getElementById(id).innerHTML += '<div class="unit-wrap"><strong>' + addZeros(minutes, 2) + '</strong> <span class="unit">Minutes</span></div>';
        document.getElementById(id).innerHTML += '<div class="unit-wrap"><strong>' + addZeros(seconds, 2) + '</strong> <span class="unit">Seconds</span></div>';
       
    
    }

    timer = setInterval(showRemaining, 1000);
}

function addZeros(num, digit) { // 자릿수 맞춰주기
    var zero = '';
    num = num.toString();
    if (num.length < digit) {
        for (i = 0; i < digit - num.length; i++) {
            zero += '0';
        }
    }
    return zero + num;
}
