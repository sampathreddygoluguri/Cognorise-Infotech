function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
        alert('Please enter valid weight and height.');
        return;
    }

    const bmi = (weight / (height * height)*10000);
    const resultDiv = document.getElementById('result');

    let message = '';
    if (bmi < 18.5) {
        message = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        message = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        message = 'Overweight';
    } else {
        message = 'Obese';
    }

    resultDiv.innerHTML = `Your BMI: ${bmi.toFixed(2)} (${message})`;
}