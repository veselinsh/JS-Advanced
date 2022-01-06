function walkTime(steps,lengthOfStep,speed){
    const distance = steps * lengthOfStep;
    let time = 0;
    time += Math.floor(distance/500);
    time += distance / (speed*1000/60);
    console.log(time);
}
walkTime(4000, 0.60, 5);