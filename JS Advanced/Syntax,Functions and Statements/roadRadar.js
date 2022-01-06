function roadRadar(speed,place){
    let difference = 0;
      if(place === 'city'){
         difference = speed - 50;
         if(difference > 0 && difference <= 20){
             console.log(`The speed is ${difference} km/h faster than the allowed speed of ${50} - speeding`);
         }else if(difference > 20 && difference <= 40){
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${50} - excessive speeding`);
         }else if(difference > 40){
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${50} - reckless driving`);
         }else{
             console.log(`Driving ${speed} km/h in a ${50} zone`);
         }
      } else if(place === 'interstate'){
        difference = speed - 90;
        if(difference > 0 && difference <= 20){
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${90} - speeding`);
        }else if(difference > 20 && difference <= 40){
           console.log(`The speed is ${difference} km/h faster than the allowed speed of ${90} - excessive speeding`);
        }else if(difference > 40){
           console.log(`The speed is ${difference} km/h faster than the allowed speed of ${90} - reckless driving`);
        }else{
            console.log(`Driving ${speed} km/h in a ${90} zone`);
        }
      } else if(place === 'residential'){
        difference = speed - 20;
        if(difference > 0 && difference <= 20){
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${20} - speeding`);
        }else if(difference > 20 && difference <= 40){
           console.log(`The speed is ${difference} km/h faster than the allowed speed of ${20} - excessive speeding`);
        }else if(difference > 40){
           console.log(`The speed is ${difference} km/h faster than the allowed speed of ${20} - reckless driving`);
        }else{
            console.log(`Driving ${speed} km/h in a ${20} zone`);
        }
      }else if(place === 'motorway'){
        difference = speed - 130;
        if(difference > 0 && difference <= 20){
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${130} - speeding`);
        }else if(difference > 20 && difference <= 40){
           console.log(`The speed is ${difference} km/h faster than the allowed speed of ${130} - excessive speeding`);
        }else if(difference > 40 ){
           console.log(`The speed is ${difference} km/h faster than the allowed speed of ${130} - reckless driving`);
        }else{
            console.log(`Driving ${speed} km/h in a ${130} zone`);
        }
      }
}
roadRadar(40, 'city')