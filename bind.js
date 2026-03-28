function Person(name){ //person is a constructor func
    this.name=name;
}
const obj={};
const BoundPerson= Person.bind(obj);
const p=new BoundPerson("35");

console.log(p.name);
console.log(obj.name);

//bind method this ko obj se attach krta h
//but when hum new keyword k sath ksii bound func ko call krte h