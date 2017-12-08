let arr = [6, 20, 26];
let k = 2;


var result = [];

var ksum = (arra, kValue) => {
    
    var arrayLength = arra.length;
    var temp = arrayLength - kValue + 1;
    if(arrayLength === 1){
        result.push(arra[0] * kValue);
    }
    

    else if (arrayLength > 1 && temp > 0) {
        var array1 = [];
        var array2= arra.map(function(array1) {
            return array1;
        })

        result.push(array2[0] * kValue);
        
        var addValues = (arra, tem) => {
            for (let i = 0; i < tem; i++) {
                var addedNumber = 0;
                do{
                    for (let j = 0; j < kValue ; j++) {
                        addedNumber += array2[j];
                    }
                    tem --;
                    result.push(addedNumber);
                    addedNumber = 0;
                    array2.splice(1, 1);
                }while(tem > 0);

                arra.splice(0, 1);
                ksum(arra, kValue);
            }
            
        }
        addValues(arr, temp);
    }else{
        for (let i = 0; i < arra.length; i++) {
            result.push(arra[i]*kValue);
        }
    }
    
    return result;
}


var answer = ksum(arr, k);
console.log(answer);

