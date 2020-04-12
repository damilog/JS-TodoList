const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greeting = document.querySelector(".js-greeting"),
USER_LS = "currentUSer",
SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS,text)
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue =input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){ 
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `${text}님 안녕하세요.`;
}

function loadName(){
    const currentUSer = localStorage.getItem(USER_LS);
    if (currentUSer === null){
        askForName();
    }
    else {
        paintGreeting(currentUSer);
    }
}

function init(){
    loadName();
}

init();