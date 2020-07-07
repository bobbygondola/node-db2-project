
exports.up = function(knex) {
    return knex.schema.renameTable('NewCarData', 'CarInventoryData');
};

exports.down = function(knex) {
    return knex.schema.renameTable('CarInventoryData', 'NewCarData');
};
