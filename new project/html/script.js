document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get the values from the form
    const age = document.getElementById('age').value;
    const familyHistory = document.getElementById('family-history').value;
    const lifestyle = document.getElementById('lifestyle').value;
  
    // Simple risk calculation logic
    let riskMessage = '';
  
    if (age >= 50 || familyHistory === 'yes' || lifestyle === 'high') {
      riskMessage = 'You may be at a higher risk for breast cancer. Please consult a healthcare provider for further screening.';
    } else if (lifestyle === 'moderate') {
      riskMessage = 'You may have a moderate risk for breast cancer. It’s important to monitor your health regularly.';
    } else {
      riskMessage = 'Your risk seems lower, but regular check-ups are recommended.';
    }
  
    // Display the result
    document.getElementById('result-message').textContent = riskMessage;
  });
  