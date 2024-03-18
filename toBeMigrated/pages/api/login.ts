import type { NextRequest, NextResponse } from 'next/server'

export const config = {
	runtime: 'experimental-edge',
}

export const fetchApi = async (body: { identity: string, password: string, time: string }) => {
	const { identity, password, time } = body
	const res = await fetch('https://api.chsittt.kz/rpc/login', {
		method: 'POST',
		headers: new Headers({
			'Accept-Time': time,
			'Content-Type': 'Application/json',
			'Access-Control-Request-Method': 'POST',
			Origin: 'http://www.chsittt.kz',
		}),
		credentials: 'same-origin',
		body: JSON.stringify({ identity, password }),
	})
	return res
}
// export default async function handler(req: NextRequest, res: NextResponse) {
// 	const { identity, password, time } = req.body
// 	try {
// 		const result = await fetch('https://api.chsittt.kz/rpc/login', {
// 			method: 'POST',
// 			headers: {
// 				'Accept-Time': time,
// 				'Content-Type': 'Application/json',
// 				'Access-Control-Request-Method': 'POST',
// 				Origin: 'http://www.chsittt.kz'
// 			},
// 			body: JSON.stringify({
// 				identity,
// 				password,
// 			}),
// 		})
//     res.status(200)
//       .send({
//         result
//       })
// 	} catch (error) {
// 		return error
// 	}
// };
