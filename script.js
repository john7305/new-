document.getElementById('predictionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const glucose = parseFloat(document.getElementById('glucose').value);
    const bloodPressure = parseFloat(document.getElementById('bloodPressure').value);
    const age = parseInt(document.getElementById('age').value);
    
    // Dummy prediction logic (replace with actual model)
    const prediction = (glucose > 125 && bloodPressure > 80 && age > 45) ? "High risk of diabetes" : "Low risk of diabetes";
    
    document.getElementById('result').innerText = prediction;
});

