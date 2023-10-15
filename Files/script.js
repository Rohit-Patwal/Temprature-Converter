 



const icon =document.getElementById('icon');

icon.onclick = function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    icon.src = "Files/moon.png";
  }else{
    icon.src = "Files/sun.png";
  }
}



const input1 = document.getElementById("input1");
const select1 = document.getElementById("select1");
const select2 = document.getElementById("select2");
const outputText = document.getElementById("outputText");

function convertTemperature() {
  const value = parseFloat(input1.value);
  const fromSelect = select1.value;
  const toSelect = select2.value;

  if (fromSelect === toSelect) {
    outputText.textContent = "Same units selected. No conversion needed.";
    return;
  }

  if (fromSelect === "celsius" && toSelect === "fahrenheit") {
    const convertedValue = (value * 9) / 5 + 32;
    outputText.textContent = `${value}°C is equal to ${convertedValue.toFixed(
      2
    )}°F`;
  } else if (fromSelect === "celsius" && toSelect === "kelvin") {
    const convertedValue = value + 273.15;
    outputText.textContent = `${value}°C is equal to ${convertedValue.toFixed(
      2
    )}°K`;
  } else if (fromSelect === "fahrenheit" && toSelect === "celsius") {
    const convertedValue = ((value - 32) * 5) / 9;
    outputText.textContent = `${value}°F is equal to ${convertedValue.toFixed(
      2
    )}°C`;
  } else if (fromSelect === "fahrenheit" && toSelect === "kelvin") {
    const convertedValue = ((value - 32) * 5) / 9 + 273.15;
    outputText.textContent = `${value}°F is equal to ${convertedValue.toFixed(
      2
    )}°K`;
  } else if (fromSelect === "kelvin" && toSelect === "celsius") {
    const convertedValue = value - 273.15;
    outputText.textContent = `${value}°K is equal to ${convertedValue.toFixed(
      2
    )}°C`;
  } else if (fromSelect === "kelvin" && toSelect === "fahrenheit") {
    const convertedValue = (value - 273.15) * 9/5 + 32 
    outputText.textContent = `${value}°K is equal to ${convertedValue.toFixed(
      2
    )}°F`;
  }
}

input1.addEventListener("input", convertTemperature);
select1.addEventListener("change", convertTemperature);
select2.addEventListener("change", convertTemperature);
