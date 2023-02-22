const allLessons = {
  lesson1: {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã'
  },
  lesson2: {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
    turno: 'noite'
  },
  lesson3: {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite'
  }
};

const viewStudents = (object) => {
let teste = Object.keys(object);
let total = 0;
for (let i in teste) {
  if (object[teste[i]].materia === 'Matemática') {
    total += object[teste[i]].numeroEstudantes
  }  
}
return total
}
console.log(viewStudents(allLessons));

const report = (obj, prof) => {
let total = 0;  
let relatorio = {};
let valores = Object.values(obj);
for (let i in valores) {
  if (valores[i].professor === prof) {
    relatorio.professor = prof;
    relatorio.materia = valores[i].materia;
    relatorio.estudantes = total += valores[i].numeroEstudantes
  }
}
return relatorio;
};
console.log(report(allLessons, 'Maria Clara'));