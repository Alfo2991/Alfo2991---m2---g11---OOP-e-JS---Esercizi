class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    compareAge(otherUser) {
        if (this.age > otherUser.age) {
            return this.firstName + ' è più vecchio di ' + otherUser.firstName;
        } else if (this.age < otherUser.age) {
            return this.firstName + ' è più giovane di ' + otherUser.firstName;
        } else {
            return this.firstName + ' ha la stessa età di ' + otherUser.firstName;
        }
    }
}

const user1 = new User('Mario', 'Rossi', 30, 'Roma');
const user2 = new User('Giuseppe', 'Verdi', 35, 'Milano');

// Test oggetti utente
console.log(user1);
console.log(user2);

// Test metodo compareAge
console.log(user1.compareAge(user2));
console.log(user2.compareAge(user1));
console.log(user1.compareAge(user1));


//ESERCIZIO 2 

class Pet {
    constructor(petName, ownerName, species, breed) {
      this.petName = petName;
      this.ownerName = ownerName;
      this.species = species;
      this.breed = breed;
    }
  
    hasSameOwner(otherPet) {
      return this.ownerName === otherPet.ownerName;
    }
  }
  
  const myPet = new Pet('Fido', 'Mario Rossi', 'Dog', 'Labrador');
  const otherPet = new Pet('Lessy', 'Giuseppe Verdi', 'Dog', 'Golden Retriever');
  
  console.log(myPet.hasSameOwner(otherPet)); // false   
  otherPet.ownerName = 'Mario Rossi';
  console.log(myPet.hasSameOwner(otherPet)); // true