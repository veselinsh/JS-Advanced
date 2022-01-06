function towns(arr){
     const result = [];
     let [Town,Latitude,Longitude] = arr[0].slice(2,-2).split(' | ');
     for(let i = 1;i<arr.length;i++){
          let [name,propLat,propLong] = arr[i].slice(2,-2).split(' | ');
          propLat = Number(propLat).toFixed(2);
          propLong = Number(propLong).toFixed(2);
          result.push({
               Town : name,
               Latitude : Number(propLat),
               Longitude : Number(propLong),
          })
     }
     console.log(JSON.stringify(result));
   
}
towns(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']);