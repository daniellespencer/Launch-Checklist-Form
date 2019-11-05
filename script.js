// Write your JavaScript code here!
window.addEventListener("load", function(){
   let form = document.querySelector("form");
   form.addEventListener("submit", function(){
       let pilotNameInput = document.querySelector("input[name=pilotName]");
       let copilotNameInput = document.querySelector("input[name=copilotName");
       let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
       let cargoMassInput = document.querySelector("input[name=cargoMass]")
       if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === ""){
          alert("All fields are required!");
          event.preventDefault();
       };
       if(isNaN(fuelLevelInput.value)){
          alert("Fuel Level (L) input must be a number")
          event.preventDefault();
       };

       if(isNaN(cargoMassInput.value)){
         alert("Cargo Mass (kg) input must be a number")
         event.preventDefault();
       };

       document.getElementById('pilotStatus').innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
       document.getElementById('copilotStatus').innerHTML = `Pilot ${copilotNameInput.value} is ready for launch`;

       let visibilityTime = document.getElementById('faultyItems');
       visibilityTime.style.visibility = 'visible';
       setTimeout(function(){visibilityTime.value = "20 seconds" }, 20000000);   

       if(fuelLevelInput < 10000){          
          document.getElementById('fuelStatus').innerHTML = "Fuel level too low for launch";
          document.getElementById('launchStatus').innerHTML = "Shuttle not ready for launch";
          document.getElementById('launchStatus').style.color = "red";
       };

       if (cargoMassInput > 10000){
          document.getElementById('cargoStatus').innerHTML = "Cargo mass too high for launch";
          document.getElementById('launchStatus').innerHTML = "Shuttle not ready for launch";
          document.getElementById('launchStatus').style.color = "red";
       };

       if (fuelLevelInput > 10000 && cargoMassInput < 10000){
          document.getElementById('launchStatus').innerHTML = "Shuttle is ready for launch";
       };
   });

   
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
