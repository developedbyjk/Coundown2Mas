const countdownDisplay = document.getElementById("countdown-display")

function renderCountdown(){
    const christmas = 25
    // Task:
    // - Get today's date (you only need the day).
    const Todaysdate = new Date()
 
    
    // - Calculate remaining days.
    const cristmasDate = new Date('2023-12-25')
    const difference = cristmasDate - Todaysdate;
    
    
    
     const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    // - Display remaining days in countdownDisplay.
  
    
  document.getElementById('days').innerHTML =`<p>${days}<span id="small">Days</span></p>`;
  document.getElementById('hours').innerHTML =`<p>${hours} <span id="small">Hours</span></p>`;
  document.getElementById('minutes').innerHTML =`<p>${hours} <span id="small">Minutes</span></p>`;
  
  //logic to position santa
  const percentage = (days/25)*100;
  console.log(percentage)
  
  document.getElementById('anim').style.right =percentage + "%" ;
   document.getElementById('line').style.width =100 - percentage + "%" ;
//   document.getElementById('anim').style.right = '10px';
  
}



 
renderCountdown()



// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.