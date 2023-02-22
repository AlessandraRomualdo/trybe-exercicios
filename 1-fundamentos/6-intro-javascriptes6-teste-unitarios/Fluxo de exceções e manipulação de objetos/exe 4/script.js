const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const attObject = (objeto, chave, valor) => {
objeto[chave] = valor;
};
attObject(lesson2, 'turno', 'noite');
console.log(lesson2);

const listKeys = (object) => Object.keys(object);
console.log(listKeys(lesson3));

const sizeObject = (object) => {
  let obj = Object.keys(object);
  return obj.length;
};
console.log(sizeObject(lesson3));

const listValue = (object) => Object.values(object);
console.log(listValue(lesson2));

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons)

const totalStudents = (object) => {
  let total = 0;
  let keys = Object.keys(object);
  for (const key in keys) {
   total += object[keys[key]]['numeroEstudantes'];
  }
  return total;
}
console.log(totalStudents(allLessons));

const showValue = (object, i) => {
let objValues = Object.values(object);
  return objValues[i];
};
console.log(showValue(lesson1, 3));

const checks = (object, key, value) => {
  let appetizer = Object.entries(object);
  let equal = false;
  for (let i in appetizer) {
    if (appetizer[i][0] === key && appetizer[i][1] === value) {
      equal = true
    }
  }
  return equal
};
console.log(checks(lesson1, 'turno', 'manhã'));