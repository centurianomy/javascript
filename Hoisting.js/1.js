/*In this code snippet we have a -variable test- and a -function test- with the same name.*/

/* 2 phases in js:    
    1. Hoisting- memo creation phase
    2. Execution- runinng code line by line
*/



function test(){
    console.log('Testing here');
}
test();
var test=1;

/*TypeError: test is not a function

    because during hoisting func declaration is set in memo,
    but in execution phase -var test = 1- i.e test becomes a number (overrides tets func)
    thats why when we try to call test() as function an error is passed.
*/

