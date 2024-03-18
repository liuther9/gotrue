const isObject = require('lodash/isObject')

function recurseObject(object: any, nestedKeyName: any, obj: any, count: any) {
	Object.entries(object).map(([key, dataItem]: [key: string, dataItem: any]) => {
		const newKeyName = nestedKeyName ? (nestedKeyName + '.' + key) : key
		let currentCount = count
		if (Array.isArray(dataItem)) {
			obj[newKeyName] = dataItem.map((item: any) => {
				const objNested: any = {}
				recurseObject(item, newKeyName, objNested, currentCount)
				return objNested
			})
		} else if (isObject(dataItem)) {
			obj['key'] = currentCount
			recurseObject(dataItem, newKeyName, obj, currentCount + 1)
		} else {
			obj[newKeyName] = dataItem
		}
	})
}

function rcBody(data: any): any {
	if (Array.isArray(data)) {
		let key = 0
		return data.map((object: any) => {
			const obj: any = {}
			recurseObject(object, null, obj, 0)
			obj['key'] = key
			key += 1
			return obj
		})
	} else if (isObject(data)) {
		const obj: any = {}
		recurseObject(data, null, obj, 0)
		return obj
	} else {
		return {}
	}
}

export default rcBody
