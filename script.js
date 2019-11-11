// Write your JavaScript code here!
window.addEventListener("load", function(){
   let form = document.querySelector("form");
   form.addEventListener("submit", function(){
       let pilotNameInput = document.querySelector("input[name=pilotName]");
       let copilotNameInput = document.querySelector("input[name=copilotName");
       let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
       let cargoMassInput = document.querySelector("input[name=cargoMass]");
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

       if(fuelLevelInput.value < 10000){    
         let visibilityTime = document.getElementById('faultyItems');
         visibilityTime.style.visibility = 'visible'; 
         document.getElementById('pilotStatus').innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;       
         document.getElementById('copilotStatus').innerHTML = `Pilot ${copilotNameInput.value} is ready for launch`;       
         document.getElementById('fuelStatus').innerHTML = "Fuel level too low for launch";
         document.getElementById('launchStatus').innerHTML = "Shuttle not ready for launch";
         document.getElementById('launchStatus').style.color = "red";
       };
       
       if (cargoMassInput.value > 10000){
         let visibilityTime = document.getElementById('faultyItems');
         visibilityTime.style.visibility = 'visible'; 
         document.getElementById('pilotStatus').innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;       
         document.getElementById('copilotStatus').innerHTML = `Pilot ${copilotNameInput.value} is ready for launch`;  
         document.getElementById('cargoStatus').innerHTML = "Cargo mass too high for launch";
         document.getElementById('launchStatus').innerHTML = "Shuttle not ready for launch";
         document.getElementById('launchStatus').style.color = "red";
       };
       
       if (fuelLevelInput.value > 10000 && cargoMassInput.value < 10000){
         let visibilityTime = document.getElementById('faultyItems');
         visibilityTime.style.visibility = 'visible'; 
         document.getElementById('pilotStatus').innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;       
         document.getElementById('copilotStatus').innerHTML = `Pilot ${copilotNameInput.value} is ready for launch`;
         document.getElementById('launchStatus').innerHTML = "Shuttle is ready for launch";
         document.getElementById('launchStatus').style.color = "green";
       };     
       event.preventDefault();    
   });     

fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
   response.json().then(function(json){
      const missionTarget = document.getElementById("missionTarget");
      missionTarget.innerHTML = `
      <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[0].name}</li>
            <li>Diameter: ${json[0].diameter}</li>
            <li>Star: ${json[0].star}</li>
            <li>Distance from Earth: ${json[0].distance}</li>
            <li>Number of Moons: ${json[0].moons}</li>
         </ol>
         <img src="${json[0].image}">
      `;
   });
});

});

