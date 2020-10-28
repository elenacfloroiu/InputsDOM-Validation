const banner = document.getElementById('idBanner');
const btn = document.getElementById('submitBtn');
const closeBtn = document.querySelector('.closeBtn')
const firstName = document.getElementById('idFirstName');
const lastName = document.getElementById('idLastName');
const messageInput = document.getElementById('idMessage');
const genderF = document.getElementById('idFemale');
const genderM = document.getElementById('idMale');
const genderText = document.getElementById('gender');

const validate = () => {
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const messageText = messageInput.value;

    if(firstNameValue.trim() === '' && lastNameValue.trim() !== '' 
    && messageText.trim() !== '' && (genderM.checked === true || genderF.checked === true)){
        redBorder(firstName);  
    }
    else if(firstNameValue.trim() !== '' && lastNameValue.trim() === '' 
    && messageText.trim() !== ''&&(genderM.checked === true || genderF.checked === true)){
        redBorder(lastName);
    }else if(firstNameValue.trim() !== '' && lastNameValue.trim() !== '' 
    && messageText.trim() === '' && (genderM.checked === true || genderF.checked === true)){
        redBorder(messageInput);
    }else if(firstNameValue.trim() !== '' && lastNameValue.trim() !== '' 
    && messageText.trim() !== '' && (genderM.checked === false && genderF.checked === false))
    {
        genderText.style.color = 'red';    
    }else{
        banner.classList.toggle('visible');
        document.querySelector('#firstName').innerText = firstName.value;
        clearInputs();
    } 
};

const redBorder = (element) => {
    element.style.borderColor = 'red';
}

const clearInputs = () => {
    firstName.value = '';
    lastName.value = '';
    messageInput.value = '';
    genderF.checked = false;
    genderM.checked = false;
};

const closeBanner = () => {
    banner.classList.toggle('visible');
};

btn.addEventListener('click', validate);
closeBtn.addEventListener('click', closeBanner);