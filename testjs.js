

buttonElement = document.querySelector('button')
inputElement = document.querySelector('#input__text')
messageElement = document.querySelector('.message')
xbuttonElement = document.querySelector('.x-button')
listElement = document.querySelector('.to-do__list')
itemElement = document.querySelectorAll('.to-do__item')
inputTime = document.querySelector('#input__time')



buttonElement.addEventListener('click',function(){
    if(inputElement.value.length == 0 || inputTime.value.length == 0){
        messageElement.classList.remove('none')
    }else{
        listElement.innerHTML += `
        <div class="item-layout">
            <div class="to-do__item">
                <div class="item-text">
                    <div class="item-text__des">
                        ${inputElement.value}
                    </div>
                    <p class="item-text__time">
                        ${inputTime.value}
                    </p>
                </div>
                <a href="" class="cancel">
                    <p>Hủy bỏ</p>
                    <i class="fas fa-times"></i>
                </a>
            </div>
            <div class="done">
                <p>Hoàn thành</p>
                <i class="fas fa-check"></i>
            </div>
        </div>
        `
    }

    doneElement = document.querySelectorAll('.done')
    for(let i=0;i<doneElement.length;i++){
        doneElement[i].addEventListener('click',function(){
            doneElement[i].classList.toggle('done-2')
        })
    }

    
    cancelElement =  listElement.querySelectorAll(".cancel")
    for(let i=0;i<cancelElement.length;i++){
        cancelElement[i].addEventListener('click',function(e){
            e.preventDefault()
            e.currentTarget.parentElement.nextElementSibling.remove()
            e.currentTarget.parentElement.remove()
        })
    }
})

inputElement.addEventListener('input',function(){
    messageElement.classList.add('none')
})

xbuttonElement.addEventListener('click',function(e){
    e.preventDefault()
    messageElement.classList.add('none')
})



//show time

var date = document.querySelector('#date')
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = `Việt Nam ngày ${dd}, tháng ${mm}, năm ${yyyy}`
date.innerText = today

function myTimer() {
    var d = new Date();
    document.querySelector("#time").innerHTML = d.toLocaleTimeString();
}
var realTime = setInterval(function(){myTimer()},1000);


const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}
toggleSwitch.addEventListener('change', switchTheme);

var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "554540861255579");
      chatbox.setAttribute("attribution", "biz_inbox");

      window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v11.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));








