/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
import * as Knex from 'knex'
export function up(knex: Knex) {
	return knex.schema
		.createTable('users', (table: Knex.TableBuilder) => {
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
export function down(knex: Knex) {
	return knex.schema.dropTable('users')
}
