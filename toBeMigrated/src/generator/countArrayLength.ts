import { isObject } from 'lodash'
let maxLength: any = 0
function countArrayLength(object: any, len: any) {
	Object.entries(object).map(([key, value]: [key: any, value: any]) => {
		if (Array.isArray(value)) {
			if (value.length > maxLength) maxLength = value.length
			value.map(i => countArrayLength(i, maxLength))
		} else if (isObject(value)) {
			countArrayLength(value, maxLength)
		}
	})
	return maxLength
}

export default countArrayLength