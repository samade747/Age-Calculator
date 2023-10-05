
// calulate age 

function calculateAge() {
    var dobInput = document.getElementById('dob').value;
    var dob = new Date(dobInput);
    var dobmili = dob.getTime();
    
    var currentDate = new Date();
    var datemili = currentDate.getTime();
    
    var minus = datemili - dobmili;
    
    var formula = minus / (1000 * 60 * 60 * 24 * 365);
    
    document.getElementById('result').textContent = ' Your age is ' +  Math.floor(formula) + 'years.';
    
    }
    function checkEnter(event) {
        if (event.key === "Enter") {
            calculateAge();
        }
    }