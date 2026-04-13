function count(){
    console.log(this.length);

}
let arr=[count,1,2,3];
arr[0]('hi');

/*here output  is 4 becasue 

    the func is beinbg called in the context of array .
    and in this case this refers to the array itself which  has four elements
    here argument 'hi' is passed but its not being used here*/