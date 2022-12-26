const plzreturn = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(4);
		} 
	})
}
(async () => {
	const value = await plzreturn();
	console.log(value)
})();
