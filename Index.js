const fullName = 'Porawit Pumlamjeak'; // String DataType
//Primitive Type
let Tphone = 1154129658; // Number DataType
let isMale = true; // Boolean DataType
let Mali; // Undefined DataType
let addRess = null; // null DataType
let bigNumber = 15n; //BigNumber DataType

console.log(fullName, Tphone, isMale, Mali, addRess, bigNumber); // Print

//Reference Type
const customer = { //Object
    name: 'Metta', //property
    Tel: 1150, //property
    city: 'Pathumthani', //property
    isFemale: true //property
};
console.log('MyName Is = ' + customer.name);// Prine

customer.Tel = 1122; //Update Value in object
console.log(customer.Tel);
customer.weight = 55; //Add Value in object
console.log(customer.weight);

const landom = [2,15,4,8,9,25,90];//Array จะเข้าถึงตัวเลขต่างๆที่เราใส่ไปได้ด้วย index เริ่มต้นตำแหน่งที่ 0
console.log(landom[3]);//เข้าถึงตัวเลขด้วย index ตำแหน่งที่ 3
console.log(landom[6]);//เข้าถึงตัวเลขด้วย index ตำแหน่งที่ 6

landom.push(100); // push Method จะเพิ่มค่าเข้าไปด้านหลัง
console.log(landom);

landom.pop(); // pop Method จะลบค่าด้านหลังสุดออกไป
console.log(landom);

landom.unshift(1); // unshift Method จะเพิ่มค่าเข้าไปด้านหน้า
console.log(landom);

landom.shift(); // shift Method จะลบค่าด้านหน้าสุดออกไป
console.log(landom);