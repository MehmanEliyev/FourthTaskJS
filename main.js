
//! ----------------- TASK 1 (reverse characters of the string) -----------------


//? ---- 1st method (with string and arrays methods) -----

    let str = "Salam";

    reverse = a => {
        let arr = a.split("");              // make array from string
        let revArr = arr.reverse();         // reverse array's elements
        let result = revArr.join("");       // return string from array
        console.log ("1st method : " + result);
    }
    reverse (str);



//? ---- 2nd method (without string and arrays methods) -----

    let new_str = "";

    function customRev (a) {
        for(let i = a.length; i > 0 ; i--){
            new_str += a[i-1];
        }
        console.log ("2nd method : " + new_str);      
    }
    customRev(str);



//! ------------------ TASK 2 (to find the common element of an array) ----------------------------


//? ---- 1st method (without array methods) -----

    let arr1 = [3,4,1,2];
    let arr2 = [1,5,4,3,2,6];

    for(let i = 0 ; i < arr1.length ; i++){
        for( let j = 0; j < arr2.length ; j++){
            if(arr1[i] == arr2[j]){
                arr2.splice(j,1);
            }
        }
    }
    console.log( '\n' + "1st method. Common element : " +  arr2.toString() )

    
    //? ---- 2nd method (with concat and sort methods) -----

    let new_arr = arr1.concat(arr2);                                    // concat combine only distinct elements
    let distinct = new_arr.length - arr1.length;                        // check if th new elements add in the new_arr or not
    let string = "";                          

    if(distinct > 0 ){
        for(let i = 0; i < distinct; i++){
            string += new_arr.pop() + ",";                              // new_arr.pop() return removed elements
        }console.log("2nd method. Common element : " +  string);        
    }


//! ------------------ TASK 3 (to find the distinct element of an array) ----------------------------

//? ---- 1st method (without array methods) -----

    let arr3 = [1,2,6,4,5,3];
    let arr4 = [7,8,6,10,11,9];

    for(let i = 0 ; i < arr3.length ; i++){
        for( let j = 0; j < arr4.length ; j++){
            if ( arr3[i] == arr4[j] ){
                console.log( '\n' + "1st method. Distinct element : " + arr3[i] )
            }
        }
    }


//? ---- 2nd method (with concat and sort methods) -----

    let arr5 = arr3.concat(arr4);
    arr5.sort();

    for(let i = 0 ; i < arr5.length; i++) {
        if (arr5[i] == arr5[i+1]){
            console.log("2nd method. Distinct element : " + arr5[i])
        }
    }

