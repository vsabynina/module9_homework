const parser = new DOMParser();
const xmlString = `
<list>
  <student>
    <name lang='en'>
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang='ru'>
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list> 
`;
const xmlDom = parser.parseFromString(xmlString, 'text/xml');
const listNode = xmlDom.querySelector('list');

const student1Node = listNode.firstElementChild;
const nameNode1 = student1Node.querySelector('name');
const firstNameNode1 = nameNode1.querySelector('first');
const secondNameNode1 = nameNode1.querySelector('second');
const ageNode1 = student1Node.querySelector('age');
const profNode1 = student1Node.querySelector('prof');
const langAtrr1 = nameNode1.getAttribute('lang');

const student2Node = listNode.lastElementChild;
const nameNode2 = student2Node.querySelector('name');
const firstNameNode2 = nameNode2.querySelector('first');
const secondNameNode2 = nameNode2.querySelector('second');
const ageNode2 = student2Node.querySelector('age');
const profNode2 = student2Node.querySelector('prof');
const langAtrr2 = nameNode2.getAttribute('lang');

const result = {
  list: [
    { 
      name: firstNameNode1.textContent + ' ' + secondNameNode1.textContent, 
      age: Number(ageNode1.textContent), 
      prof: profNode1.textContent, 
      lang: langAtrr1
    },
    { 
      name: firstNameNode2.textContent + ' ' + secondNameNode2.textContent, 
      age: Number(ageNode2.textContent), 
      prof: profNode2.textContent, 
      lang: langAtrr2
    },
  ]
}
console.log(result);