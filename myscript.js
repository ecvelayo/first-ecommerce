console.log('My Script works!');

function sumOfTwoNumbers(a,b){
    return a+b;
}

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
