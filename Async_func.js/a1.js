//async function

//async func humesha value ko promise k andar wrap krke print krta h 
async function test(){
    return 1;
}
console.log(test());


//expected O/P= 1
//actual O/P= Promise{ 1 } 

// conclusion: async func always return a promise even if we return a simple val