function getAkanName() {
    const maleAkan = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];

const femaleAkan = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];

const week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

const myBirthday = document.getElementById('myBirthdayDate').value;

const myGender = document.getElementsByName('gender');

const male = document.getElementById('male');

const female = document.getElementById('female');

const dateOfBirth = new Date(myBirthday);

const dayOfWeek = dateOfBirth.getDay();

const i = 0;


function akanMale() {
    parseInt(dayOfWeek);
    
}

if (myGender && male) {
     alert(maleAkan[0]);
     
}   

if (myGender && female){
    alert('Your female Akan name is:');
}

    


document.getElementById('answer').getAkanName();
    
}