function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteChar() {
  let currentValue = document.getElementById('display').value;
  document.getElementById('display').value = currentValue.slice(0, -1);
}

function calculate() {
  let currentValue = document.getElementById('display').value;

  try {
    // Handle percentage calculations
    currentValue = currentValue.replace(/(\d+)%(\d+)/g, (match, num1, num2) => {
      return `(${num1} / 100) * ${num2}`; // Convert percentage format
    });

    // Replace '%' with '/100' if used standalone
    currentValue = currentValue.replace(/(\d+)%/g, (match, number) => {
      return `${number} * 0.01`; 
    });

    document.getElementById('display').value = eval(currentValue); 
  } catch (error) {
    document.getElementById('display').value = 'Error'; // If there's an error
    setTimeout(() => {
      clearDisplay();
    }, 1500);
  }
}