function constructive(obj){
      if(obj.dizziness){
          obj.levelOfHydrated += obj.weight *  obj.experience * 0.1;
      }
      return obj
}
console.log(constructive({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  ))