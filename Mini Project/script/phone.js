let isUsePhone = false;
let webBlock = document.getElementById('darkWeb');

function usePhone(){
    const phone = document.getElementById('phone');
    const iconPhone = document.getElementById('iconPhone');
    if(isUsePhone == true){
        phone.style.bottom = '-35em';
        isUsePhone = false;
        iconPhone.style.bottom = '5%';
        webBlock.style.display = 'none';
    }else if(isUsePhone == false){
        phone.style.bottom = '0em';
        isUsePhone = true;
        iconPhone.style.bottom = '-30%';
        webBlock.style.display = 'flex';
    }
}

function closePhone(){
    const phone = document.getElementById('phone');
    const iconPhone = document.getElementById('iconPhone');
    if(isUsePhone == true){
        phone.style.bottom = '-35em';
        isUsePhone = false;
        iconPhone.style.bottom = '5%';
        webBlock.style.display = 'none';
    }
}
