export const loginUser = async ({
	identity,
	password,
	time = '2 hours',
}: {
	identity: string
	password: string
	time?: string
}) => {
	await fetch('https://api.chsittt.kz/rpc/login', {
		method: 'POST',
		body: JSON.stringify({
			identity,
			password,
		}),
		headers: {
			'Accept-Time': time,
			'Content-Type': 'application/json',
			'Access-Control-Request-Method': 'POST',
			'Origin': 'http://www.chsittt.kz',
			// 'Content-Profile': 'authentication'
		}
	})
}
