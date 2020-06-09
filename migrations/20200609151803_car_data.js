
exports.up = function(knex) {
  return knex.schema.createTable('NewCarData', tbl => {
      //creates ID
      tbl.increments();
      //Vin Number
      tbl.integer("Vin", 10).notNullable().unique();
      //Make
      tbl.string("Make").notNullable();
      //model
      tbl.string("Model").notNullable();
      //mileage
      tbl.integer("Mileage").notNullable();
      //transmissionType
      tbl.string("Trans Type").nullable();
      //titleStatus
      tbl.boolean("Clean Title?").nullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('NewCarData');
};
