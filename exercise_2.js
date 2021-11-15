const jsonString = `
{
  "list": [
   {
    "name": "Petr",
    "age": "20",
    "prof": "mechanic"
   },
   {
    "name": "Vova",
    "age": "60",
    "prof": "pilot"
   }
  ]
 }
`;
const data = JSON.parse(jsonString);
const list = data.list;
const person1 = list[0];
const person2 = list[1];
const result = {
  list: [
    { 
      name: person1.name, 
      age: Number(person1.age), 
      prof: person1.prof 
    },
    { 
      name: person2.name, 
      age: Number(person2.age), 
      prof: person2.prof 
    },
  ]
}
console.log(result);