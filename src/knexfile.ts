module.exports = {

	development: {
		client: 'postgresql',
		connection: {
			host: 'postgres',
			port: 5432,
			database: 'mailauth',
			user: 'postgres',
			// password: process.env.DBPASS
		},
		pool: {
			min: 2,
			max: 10
		},
	}
}
