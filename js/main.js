/**
 * @name vigfoo_remove_duplicate_in_array
 * @description This function will remove duplicate items in array
 * @param {array} vigfooArray  array that has duplicate items
 */

 function vigfoo_remove_duplicate_in_array(vigfooArray){

    let uniqueItems = [...new Set(vigfooArray)];
    return(uniqueItems);
}

/*
Function call 

==> yourArray = ["male","female","male","male"]
let myUniqueArray = vigfoo_remove_duplicate_in_array(yourArray)

*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////