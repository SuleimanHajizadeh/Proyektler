function printNames( school, ...allNames ) {
    allNames( name => console.log(name));
};
printNames('ADNA','Ali','Veli','Mammad');

let names = [ 'Ali', 'Veli', 'Mammad'];
let [name1,name2,name3] = names;
console.log(name1,name2,name3);

let person = { age: 22, name: 'Suleiman'};
let age, name;
({age, name} = person);
console.log(name,age);