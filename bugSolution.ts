function greeter(person: string) {
  return "Hello, " + person;
}

let user = ["Jane Doe", "John Smith"];

// Corrected code
user.forEach(name => {
  console.log(greeter(name));
});
//or

function greeter2(persons: string[]) {
    persons.forEach(person => console.log("Hello, "+person))
}

greeter2(user)