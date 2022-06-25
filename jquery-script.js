//tradinational initialization
$(document).ready(() => {
    $('#erase').click(() => {
        $('#display').animate({
            opacity: '0.5',
            width: '800px'
        });
    })

    $('#toggleArrow').click(() => {
        console.log('Clicked');
        $('#sidebar').toggle();
    })

    $('#equalsign').click(() => {
        $('#exampleModal').modal('show')
    })

    $('.operator').click((e) => {
        $('#display')[0].innerHTML += $(e.target).text().trim()
    })

    $('.number').click((e) => {
        $('#display')[0].innerHTML += $(e.target).text().trim()
        if ($(e.target).text().trim() % 2){
            $('#oddoreven').innerHTML = 'Odd';
        }else{
            $('#oddoreven').innerHTML = 'Even';
        }
    })

    // $('#equalsign').click(() => {
    //     const finalEquation = $('#display')[0];
    //     finalEquation.innerHTML.toString();
    //     let operations = [];
    //     let numbers = [];
    //     let number = '';
    //     for (let i = 0 ; i < finalEquation.innerHTML.length; i++){
    //         if (finalEquation.innerHTML[i]*1 == finalEquation.innerHTML[i]){
    //             number += finalEquation.innerHTML[i];
    //             if ((i === finalEquation.innerHTML.length-1)){
    //                 numbers.push(parseInt(number));
    //             }
    //             console.log(finalEquation.innerHTML.lastIndexOf(number));
    //         }else{
    //             number.length === 0 ? '' : numbers.push(parseInt(number));
    //             number = '';
    //             operations.push(finalEquation.innerHTML[i]);
    //         }
    //     }
    //     let output = 0;
    //     const indexOfMultiply = operations.indexOf('*');
    //     output = numbers[indexOfMultiply] * numbers[indexOfMultiply+1];
    //     const indexOfDivision = operations.indexOf('/');
    //     output = output / numbers[indexOfDivision];
    //     const indexOfSubtraction = operations.indexOf('-');
    //     output = output - numbers[indexOfSubtraction];
    //     const indexOfAddition = operations.indexOf('+');
    //     output = output + numbers[indexOfAddition];
    //     console.log(output);   
    // })
});




// short-hand initialization
// $(() => {

// });

// implicit initialization
// $().ready(() => {

// })