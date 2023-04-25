// Jake completed survey form.
// create an object labeled customer and added the following key:value pairs:
const customer = {
  firstName: "jake",
  lastName: "smith",
  email: "jaekSm!aol.com",
  phone: undefined,
  zipCode: "631",
  favoriteFlavors: 32,
  cupSize: "medium",
  favoriteStore: "Target",
  firstVisit: false,
};
// console.table(customer);

// gather the correct information. Modify the following properties in the customer object using bracket notation
(customer["email"] = ["Jak3Smith1992@email.com"]),
  (customer["phone"] = ["3195551234"]),
  (customer["zipCode"] = ["63132"]),
  (customer["favoriteFlavors"] = ["coffee", "strawberry", "matcha"]);
// console.table(customer);

// remove a couple of items from the survey. Delete the following properties in the customer object using the delete keyword.
delete customer["zipCode"];
delete customer["favoriteStore"];
// console.table(customer);

// added the following items to the survey: toppings, future flavors, and today's purchase cost
(customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"]),
  (customer.futureFlavors = ["mango"]),
  (customer.todaysPurchaseCost = 5.32);
// console.table(customer);

// In an array, print the keys in your survey
for (const property in customer) {
  console.table(property);
}
