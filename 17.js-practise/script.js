let numbers = [12, 7, 3, 9, 6, 15, 8];

let squares = numbers.map(num => num * num);

console.log(squares);








let countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Austria",
    "Azerbaijan", "Bahamas", "Bahrain", "Brazil", "British Virgin Islands",
    "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Estonia", "Ethiopia",
    "Falkland Islands", "Faroe Islands"
  ];
  
  countries.forEach(country => {
    console.log(`${country} - ${country.length}`);
  });

  









  countries.forEach(country => {
    let first = country[0].toLowerCase();
    let last = country[country.length - 1].toLowerCase();
  
    if (first === "a" && last === "a") {
      console.log(country);
    }
  });

  










  const webTechs = [
    "HTML", "CSS", "JS", "React", "JS", "Redux", "Node", "JS", "MongDB"
  ];
  
  let longerThan4 = webTechs.filter(tech => tech.length > 4);
  
  console.log(longerThan4);

  







  const expensiveProducts = products.filter(p => p.price > 500);
console.log(expensiveProducts);













let total = products.reduce((sum, product) => sum + product.price, 0);
let average = total / products.length;

console.log("Cəm:", total);
console.log("Ortalama:", average);














let computerProducts = products.filter(p => p.category === "Computers");

console.log(computerProducts);
