changeMessage = () => {
    const currentValue = document.getElementById('introduction').innerHTML;
    if (currentValue === message){
        document.getElementById('introduction').innerHTML = 'Changed message';
    }else{
        document.getElementById('introduction').innerHTML = message;
    }
}

changeColor = () => {
    document.getElementById('introduction').setAttribute('class', 'redBorder');
}

changeInput = () => {
    document.getElementById('name').setAttribute('placeholder', 'This is a disabled input');
    document.getElementById('name').setAttribute('disabled', true);
}

addElement = () => {
    const divContainer = document.getElementById('container');
    const paragraphElement = document.createElement('p');
    const paragraphContent = document.createTextNode('This is a dynamic element');
    paragraphElement.appendChild(paragraphContent);
    divContainer.appendChild(paragraphElement)
}

sumofnumbers = () => {
    const first = parseInt(document.getElementById('first').value);
    const second = parseInt(document.getElementById('second').value);
    alert(first+second);
}

grabInputValue = () => {
    const inputConcerned = document.getElementById('name');
    console.log(inputConcerned.value);
}

buildPyramid = () => {
    const first = parseInt(document.getElementById('first').value);
    const divContainer = document.getElementById('container');
    let stars = '*';
    for (let i = 0; i<first; i++){
        const paragraphElement = document.createElement('p');
        const paragraphContent = document.createTextNode(stars);
        paragraphElement.appendChild(paragraphContent);
        divContainer.appendChild(paragraphElement);
        stars += '*'
    }
}

changeColorRange = () => {
    document.getElementsByClassName('btnrange')[1].setAttribute('class', 'btn-primary');

}

checkSignupStatus = (e) => {
    console.log('Test');
    e.preventDefault();
    const username = document.getElementsByName('username')[0];
    const usernameErrorContainer = document.getElementById('username');
    const password = document.getElementsByName('password')[0];
    const verifyPassword = document.getElementsByName('password')[1];
    const age = document.getElementsByName('age')[0];
    const birthdate = document.getElementsByName('birthdate')[0];
    console.log(password.value, verifyPassword.value);

    if (username.value && password.value && age.value && birthdate.value){
        alert('Valid signup!');
    }else{
        if (!username.value){
            // username.setAttribute('class','form-control redBorder');
            const labelElement = document.createElement('label');
            const labelContent = document.createTextNode('Username is required');
            labelElement.appendChild(labelContent);
            usernameErrorContainer.appendChild(labelElement);
            username.classList.add('redBorder');
            break;
        }
        if (!password.value){
            password.setAttribute('class','form-control redBorder');
        }
        if (!age.value){
            age.setAttribute('class','form-control redBorder');
        }
        if (!birthdate.value){
            birthdate.setAttribute('class', 'form-control redBorder');
        }
    }

    if (password === verifyPassword){
        console.log('They\'re equal');
    }else{
        verifyPassword.classList.add('redBorder');
    }
}

sendCredentials = (event) => {
    console.log('Here');
    const validUsername = 'admin';
    const validPassword = 'password1234';
    event.preventDefault();
    const username = document.getElementsByName('username')[0].value;
    const password = document.getElementsByName('password')[0].value;
    if (validUsername === username && validPassword === password){
        window.location.href="homepage.html"
    };
}


