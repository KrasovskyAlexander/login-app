
function getContainer(){
    return document.querySelector('.notify-container');
}

function alertTemplate(msg,className,index){
    return `
        <div class="alert ${className}" data-index="${index}">${msg}</div>
    `;
}
function getAlertIndex(){
    return document.querySelectorAll('.notify-container .alert').length;
}

function templateContainer(){
    return `
    <div class="notify-container" style="position: fixed; right: 10px;top: 10px; z-index: 99;"></div>
    `;
}
function createContainer(){
    const template = templateContainer();
    document.body.insertAdjacentHTML('afterbegin',template);
}

export function notify({ msg = 'notify', className = 'alert-info', timeout = 2000} ={}){
    if(!getContainer()){
        createContainer();
    }  
    const index = getAlertIndex();
    const container = getContainer();
    const alert = alertTemplate(msg,className,index);
    container.insertAdjacentHTML('beforeend',alert);

    setTimeout(closeNotify,timeout);
}

function closeNotify(index ){
    let alert;

    if(index === undefined){
        alert = document.querySelector('.notify-container .alert');
    }else{
        alert = document.querySelector(`.notify-container .alert[data-index = "${index}"]`);
    }

    if(!alert){
        return;
    }

    const container = getContainer();
    container.removeChild(alert);
}