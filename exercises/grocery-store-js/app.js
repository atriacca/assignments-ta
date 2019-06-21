var shopper = {
    name: "pat",
    age: 33,
    isMember: true,
    groceryCart: ['bananas', 'milk', 'cheese', 'eggs'],
    isSenior: function() {
        if (this.age >= 55) {
            return true;
        } else {
            return false;
        }
    }
 }
 console.log("Is " + shopper.name + " a senior? " + shopper.isSenior())