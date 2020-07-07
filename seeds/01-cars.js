
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('CarInventoryData').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('CarInventoryData').insert([
        {Vin: 999999999, Make: "Ford", Model: "Explorer", Mileage: 9909},
        {Vin: 9999999, Make: "Ford", Model: "Explorer", Mileage: 9909},
        {Vin: 99999999, Make: "Ford", Model: "Explorer", Mileage: 9909},
        {Vin: 999999, Make: "Ford", Model: "Explorer", Mileage: 9909},
        {Vin: 99999, Make: "Ford", Model: "Explorer", Mileage: 9909},
        {Vin: 9999, Make: "Ford", Model: "Explorer", Mileage: 9909},
        {Vin: 999, Make: "Ford", Model: "Explorer", Mileage: 9909},
        {Vin: 99, Make: "Ford", Model: "Explorer", Mileage: 9909},
        {Vin: 9, Make: "Ford", Model: "Explorer", Mileage: 9909}
      ]);
    });
};
