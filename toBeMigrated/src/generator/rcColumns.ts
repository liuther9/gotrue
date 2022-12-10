import isObject from 'lodash/isObject'
import merge from 'lodash/merge'

function parsePlainObjectToSchema(data: any, key: any): any {

	return Object.entries(data).map(([name, dataItem]: [name: string, dataItem: any]) => {
		const accessorIdName = key ? (key + '.' + name) : name

		return Object.keys(dataItem).length > 0
			? { title: name, children: parsePlainObjectToSchema(dataItem, accessorIdName) }
			: {
				title: name,
				key: accessorIdName,
				dataIndex: accessorIdName,
				onCell: (_: any, index: any) => {
					return {}
				}
			}
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

export default function rcColumns(data: any) {
	data = deepMergeToPlainObject(data)
	console.log(data)
	return parsePlainObjectToSchema(data, null)
}
