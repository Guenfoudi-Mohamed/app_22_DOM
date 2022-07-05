// app_22

class Person{
    static arrObject = [];
    static arrObjectId = [];
    static numberPerson = 0;
    constructor(firstName,lastName,City,Phone){
        this.firstName = firstName;
        this.lastName = lastName;
        this.City = City;
        this.Phone = Phone;
        Person.numberPerson++;
    }
    creatPerson = function(id,firstName,lastName,city,phone){
        const box = document.createElement('div');
        box.setAttribute('class','box');

        const labelId = document.createElement('label');
        labelId.textContent = 'Id : ';
        const spanId = document.createElement('span');
        spanId.setAttribute('class','boxId');
        spanId.textContent = id;
        labelId.appendChild(spanId);

        const labelFirstName = document.createElement('label');
        labelFirstName.textContent = 'First Name : ';
        const spanFistName = document.createElement('span');
        spanFistName.textContent = firstName;
        labelFirstName.appendChild(spanFistName);

        const labelLastName = document.createElement('label');
        labelLastName.textContent = 'Last Name : ';
        const spanLastName = document.createElement('span');
        spanLastName.textContent = lastName;
        labelLastName.appendChild(spanLastName);

        const labelCity = document.createElement('label');
        labelCity.textContent = 'City : ';
        const spanCity = document.createElement('span');
        spanCity.textContent = city;
        labelCity.appendChild(spanCity);

        const labelPhone = document.createElement('label');
        labelPhone.textContent = 'Phone : ';
        const spanPhone = document.createElement('span');
        spanPhone.textContent = phone;
        labelPhone.appendChild(spanPhone);

        box.append(labelId,labelFirstName,labelLastName,labelCity,labelPhone);
        document.querySelector('body #section .boxsPerson').insertBefore(box,document.querySelector('body #section .boxsPerson').children[0]);

    }
    randomId = function(){
        let valueRandom = '';
        function setRndomId(){
            valueRandom = '';
            for(let i = 0;i<4;i++){
                valueRandom += Math.floor(Math.random() * 10);
            }
            return valueRandom;
        };
        setRndomId();
        for(let i = 0;i<Person.arrObject.length;i++){
            if(valueRandom != Person.arrObject[i].id){
                continue;
            }
            else{valueRandom = '';i = -1;setRndomId();}
        }
        this.id = valueRandom;
        Person.arrObject.push(this);
        Person.arrObjectId.push(this.id);
        this.creatPerson(this.id,this.firstName,this.lastName,this.City,this.Phone);
        
        if(Person.numberPerson > 1){
            const boxIdAll = document.querySelectorAll('body #section .boxsPerson .box label .boxId');
            Person.arrObjectId.length = 0;
            let value = '';
            let bool = false;
            for(let i = 0;i<boxIdAll.length;i++){
                value = setRndomId();
                if(Person.arrObjectId.length == 0){
                    boxIdAll[0].textContent = value;
                    Person.arrObjectId.push(value);
                    continue;
                }
                for(let x = 0;x<Person.arrObjectId.length;x++){
                    if(value == Person.arrObjectId[x]){
                        bool=false;
                        break;
                    }
                    else{
                        bool = true;
                        continue;
                    }
                }
                if(bool == true){
                    bool=false;
                    boxIdAll[i].textContent = value;
                    Person.arrObjectId.push(value);
                }
                else if(bool == false){
                    i--;
                }
            }
        }
        console.clear();
        console.log(`Number of object '${Person.numberPerson}'`);
    }
}

const inpSubmit = document.querySelector('body #section .form .inpSubmit');
inpSubmit.onclick = function(){
    const inpFirstName = document.querySelector('body #section .form .inpFirstName');
    const inpLastName = document.querySelector('body #section .form .inpLastName');
    const inpCity = document.querySelector('body #section .form .inpCity');
    const inpPhone = document.querySelector('body #section .form .inpPhone');
    if(inpFirstName.value != '' && inpLastName.value != '' && inpCity.value != '' && inpPhone.value != ''){
        const obj = new Person(inpFirstName.value,inpLastName.value,inpCity.value,inpPhone.value);
        obj.randomId();
    }
    inpFirstName.value = '';
    inpLastName.value = '';
    inpCity.value = '';
    inpPhone.value = '';
    inpFirstName.focus();
};
window.onload = function(){
    const inpFirstName = document.querySelector('body #section .form .inpFirstName');
    inpFirstName.focus();
}