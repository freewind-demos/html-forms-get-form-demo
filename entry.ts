const form1 = document.forms.namedItem('form1')
console.log(form1);

const form2 = (document.forms as any).form2
console.log(form2);

const form3 = (document.forms as any)['form3'];
console.log(form3);

const form4 = (document as any).form4;
console.log(form4);
