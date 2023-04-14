const name = 'Jagdev', message = 'How are You', punctMark = '?';
//One Way of greeting
const greeting = message + ' ' + name + punctMark;
console.log('One way of greeting\n', greeting);
//Another Way of greeting
const greeting1 = `${message} ${name}${punctMark}`
console.log('Another way of greeting\n', greeting1);

const me = {
    name: 'JagdevSingh',
    email: 'jagdevsinghdosanjh@gmail.com',
    age: 50
};
//  const strTr=`<tr>`+
//  '<td>'+me.name+'</td>'+
//  '<td>'+me.email+'</td>'+
//  '<td>'+me.age+'</td>'+
//  '</tr>'
//  console.log(strTr);
const strTr =`
<tr>
<td>${me.name}</td>
<td>${me.email}</td>
<td>${me.age}</td>
</tr>
`;
console.log(strTr);