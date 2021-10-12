/* **Iteración #4: Map**

```jsx
4.1 Dado el siguiente array, devuelve un array con sus nombres 
utilizando .map().
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
empiece por 'A'.
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
cuando el valor de la propiedad isVisited = true.
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];
``` */

const students = [
    { id: 1, name: 'Abel' },
    { id: 2, name: 'Julia' },
    { id: 3, name: 'Pedro' },
    { id: 4, name: 'Amanda' }
];

let studentsNameNoReturn = students.map(student => student.name);

let studentsName = students.map((student) => {
    return student.name
});

console.log(studentsNameNoReturn);
console.log(studentsName);

const studentsAnacleto = [
    { id: 1, name: 'Abel' },
    { id: 2, name: 'Julia' },
    { id: 3, name: 'Pedro' },
    { id: 4, name: 'Amanda' }
];

let studentsAnacletoName = students.map((student) => {
    return student.name.charAt(0) === 'A' ? student.name = 'Anacleto' : student.name;
});

let studentsAnacletoNameIf = students.map((student) => {
    if (student.name.charAt(0) === 'A') {
        student.name = 'Anacleto'
    }
    return student.name;
});

console.log(studentsAnacletoName);
console.log(studentsAnacletoNameIf);

const cities = [
    { isVisited: true, name: 'Tokyo' },
    { isVisited: false, name: 'Madagascar' },
    { isVisited: true, name: 'Amsterdam' },
    { isVisited: false, name: 'Seul' }
];

let isVisitedCities = cities.map((city) => {
    return city.isVisited ? city.name = `${city.name} Visited` : city.name;
})

let oldVersionVisitedCities = [];
let myCity;
for (let index = 0; index < isVisitedCities.length; index++) {
    if (isVisitedCities[index].isVisited) {
        myCity = `${isVisitedCities[index].name} Visited`
        oldVersionVisitedCities.push(isVisitedCities[index].name)
    } else {
        oldVersionVisitedCities.push(isVisitedCities[index].name)
    }
}

console.log(isVisitedCities);