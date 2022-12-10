import isObject from 'lodash/isObject'
import merge from 'lodash/merge'

function parsePlainObjectToSchema(data: any): any {

	return Object.entries(data).map(([name, dataItem]: [name: string, dataItem: any]) => {
		return { header: name, accessorKey: name, id: name }
	})
}

function deepMergeToPlainObject(data: any): any {
	if (Array.isArray(data)) {
		return merge({}, ...data.map((dataItem) => deepMergeToPlainObject(dataItem)))
	} else if (isObject(data)) {
		const object: any = {}
		for (const [name, value] of Object.entries(data)) {
			object[name] = deepMergeToPlainObject(value)
		}
		return object
	} else {
		return {}
	}
}

export default function gridHeaderGenerator(data: any) {
	data = deepMergeToPlainObject(data)
	return parsePlainObjectToSchema(data)
}
