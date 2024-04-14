
function ctf(celsius) {

    const fahrenheit = (9/5)*celsius + 32;
    return fahrenheit;
  }
  
  const celsiusInput = document.getElementById("celsius");
  const resultOutput = document.getElementById("result");
  
  document.getElementById("convert").addEventListener("click", function() {
  
    const celsius = celsiusInput.value;
    const fahrenheit = ctf(celsius);
    resultOutput.value = "Your Result is : "+fahrenheit+" F";
    
  });