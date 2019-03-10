module.exports = function getZerosCount(number, base) {
  let simpleNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,  41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251];
 
  let factorizeBase = []
   for (let i=0; i < simpleNumbers.length; i++) {
     if ( base % simpleNumbers[i] === 0) {
      factorizeBase.push(simpleNumbers[i]) 
     }
   }
    let ZerosCount = 0;
    let lastItemCount = 0;
    let lastItem = factorizeBase[factorizeBase.length-1];
   
    let lastItemDegree = 0;
    let z = base
    for (let i = 0; ; i++ ) {
        if (z % lastItem === 0 && z >= lastItem) {
          let y = z/lastItem;
          lastItemDegree++;
          z = y;
          } else break
        }

    for(let n=1; ;n++) {
    let count = Math.floor(number/Math.pow(lastItem, n));
    lastItemCount += count;
    if (count < 1) break ;
    }
   
    if (lastItemDegree > 0) {
    lastItemCount = Math.floor(lastItemCount/lastItemDegree)
    } 
    
    if(factorizeBase.length>1) {
    let preLastItemCount = 0;
    let preLastItem = factorizeBase[factorizeBase.length-2];
   
    let preLastItemDegree = 0;
    let k = base
    for (let j = 0; ; j++ ) {
      if (k % preLastItem === 0 && k >= preLastItem) {
          let z = k/preLastItem;
          preLastItemDegree++;
          k = z;
      } else break
    }
     
    for(let m=1; ;m++) {
      let count2 = Math.floor(number/Math.pow(preLastItem, m));
      preLastItemCount += count2;
      if (count2 < 1) break ;
    }
   
    if (preLastItemDegree > 0) {
    preLastItemCount = Math.floor(preLastItemCount/preLastItemDegree)
  } 
  
    if (lastItemCount < preLastItemCount) {
      ZerosCount = lastItemCount;
    } else { 
      ZerosCount = preLastItemCount;
    }
  } else {
   ZerosCount = lastItemCount}
   
   return ZerosCount 
 }
 
