// async function(set interval becouse it is needed to be repeted)
setInterval(clock, 1000);

// make the ands accessable 
const secondHand = document.querySelector(".second");
const minuiteHand = document.querySelector(".miniute");
const hourHand = document.querySelector(".hour");

// define the clock function
function clock(){
    // get the current date
    const currentDate = new Date();
    // get the seconds
    var seconds  = currentDate.getSeconds()
    // get the miniute
    var miniute  = currentDate.getMinutes()
    // get the hour
    var hour  = currentDate.getHours()
    
    // calculate the ratio (to know how far the hand needs to rotate)
    const secondRatio = seconds / 60
    const miniuteRatio =(secondRatio + miniute)/ 60;  // to make the minute hand move gadually after the second hand
    // adds the second to the miniutes
    const hourRatio = (miniuteRatio + hour) / 12; // to make the hour hand move gradually after the miniute hand
    // adds the munites to the hours

    rotation(secondHand, secondRatio);
    rotation(minuiteHand, miniuteRatio);
    rotation(hourHand, hourRatio);

    
}

// to make the hand rotate when the time is changed
function rotation(hand, rotationRatio){
    // change the direction of the  hand by calculating the rotation degree
    // to display the hand based on the calculated degree
    hand.style.setProperty('--rotation', rotationRatio * 360)


}

clock();