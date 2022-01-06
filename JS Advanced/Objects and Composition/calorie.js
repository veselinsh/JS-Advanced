function calories(arr){
    const catalogue = {};

    for(let i = 0;i<arr.length;i+=2){
      catalogue[arr[i]] = Number(arr[i+1]);
    }
    console.log(catalogue);
}
calories(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);