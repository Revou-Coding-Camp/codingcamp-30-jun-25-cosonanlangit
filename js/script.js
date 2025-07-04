console.log('Script loaded successfully!');

function validateForm() {
    const inputName = document.getElementById('input-name');
    if(inputName.value === '') {
        alert('Please enter your name!');
    } else {
        document.getElementById('result-form').innerHTML = inputName.value;
    }
}
