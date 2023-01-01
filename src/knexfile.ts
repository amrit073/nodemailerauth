module.exports = {

	development: {
		client: 'postgresql',
		connection: {
			host: 'postgres',
			port: 5432,
			database: 'mailauth',
			user: 'postgres',
			password: 'root'
		},
		pool: {
			min: 2,
			max: 10
		},
	}
}
