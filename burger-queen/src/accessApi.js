function bingo(a) {
    let numbersBingo = [2,9,14,7,15];
    let result = typeof(a);
    result.includes(numbersBingo);
    /*let numbersBingo = [2, 9, 14, 7, 15];
    let result = a.map((element) => {
      if(element.includes(numbersBingo)){
        console.log("WIN")
      } else {
        console.log("LOSE")
      }
    })*/
    console.log(result);
    return result;}

    bingo([21,13,2,7,5,14,7,15,9,10]);