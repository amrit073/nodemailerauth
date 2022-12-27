/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
	return knex.schema
		.createTable('users', table => {
			table.increments('id').primary();
			table.string('username').notNullable();
			table.string('password').notNullable();
			table.string('email').notNullable();
			table.boolean('verified').notNullable();
			table.integer('code').notNullable();
		})


}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
	return knex.schema.dropTable('users')
}
