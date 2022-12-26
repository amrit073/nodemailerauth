module.exports = {

	development: {
		client: 'postgresql',
		connection: {
			host: '127.0.0.1',
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
