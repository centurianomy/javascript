// ===== closure: (security)to keep data private. =====

function bankAccount() {
    let balance = 1000;
    //bankAccount func finished
    return function withdraw(amount) { //return func remembers balance(this is where closure is created)
        balance -= amount;
        console.log("Balance:", balance);
    };
}

const account = bankAccount(); //starts from here
//after return account= withdraw function

account(100); // Balance: 900
account(200); // Balance: 700

//even after bankAccount func() is finished it is remembered in withdraw func()
// withdraw func keeps running again & again uses same stored variable(balance)
// that persistent memory = closure