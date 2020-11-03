import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import UI from './config/ui.config';
import {validate} from './helper/validate';
import {showInpurError,removeInputMessage} from './views/form';
import {login,registration} from './services/auth.service';
import {notify} from './views/notification';
import Tabs from './config/tabsConfig';
import UIreg from './config/UIreg';
import {dayOfBirthday} from './helper/format';

const { form,inputEmail,inputPass } = UI;
const arrInput = [inputEmail,inputPass];
const {tabUl,tab,tabContent} = Tabs;
const {regForm,regEmail,regPass,firstName,lastName,gender,country,city,birthday} = UIreg;

hideTab();
tabContent[0].style.display = 'block';

arrInput.forEach((item)=>{item.addEventListener('focus',()=> removeInputMessage(item));});

form.addEventListener('submit',e => {
    e.preventDefault();
    onSubmit();
});
function hideTab(){
    for(let i = 0;i<tab.length; i++){
        tabContent[i].style.display = 'none';
    }
}

tabUl.addEventListener('click',(e)=>{
    for(let i = 0;i<tab.length; i++){
        if(e.target == tab[i]){
            hideTab();
            console.log(e.target);
            tabContent[i].style.display = 'block';
        }
    }
});

regForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    onSubmitReg();
})

async function onSubmit(){
    const isValidForm =  arrInput.every((item)=>{
        const isValidInput = validate(item);
        if(!isValidInput){
            showInpurError(item);
        }
        return isValidInput;
    });
    if(!isValidForm) return;
    try {
        await login(inputEmail.value,inputPass.value);
        form.reset();
        notify({ msg: 'login success', className : 'alert-success'});
    } catch (error) {
        notify({ msg: 'login failed', className : 'alert-danger'});
    }
    
}

async function onSubmitReg(){
    const date = dayOfBirthday(birthday.value);
    console.log(''+gender.value);
    try{
        await registration(regEmail.value,regPass.value,firstName.value,lastName.value,''+gender.value,country.value,city.value,date.day,date.month,date.years);

    }catch(err){
        console.log(err);
    }
}


