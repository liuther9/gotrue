/* eslint-disable react-hooks/rules-of-hooks */
import { ColumnDef } from "@tanstack/react-table"
import { isObject } from "lodash"
import { useState, useEffect } from "react"
import CustomTable from "./CustomTable"

const DefaultColumn: Partial<ColumnDef<any>> = {
	cell: ({
		getValue,
		row: { index },
		column: { id },
		column,
		table,
	}: {
		getValue: any
		row: any
		column: any
		table: any
	}) => {
		const initialValue = getValue()
		// We need to keep and update the state of the cell normally
		const [value, setValue] = useState(initialValue)
		const [focused, setFocused] = useState(false)
		const [open, setOpen] = useState(false)

		// When the input is blurred, we'll call our table meta's updateData function
		const onBlur = () => {
			table.options.meta?.updateData(index, id, value)
			setFocused(false)
		}

		// If the initialValue is changed external, sync it up with our state
		useEffect(() => {
			setValue(initialValue)
		}, [initialValue])

		return (Array.isArray(initialValue) || isObject(initialValue))
			? (<div><span onClick={() => setOpen(!open)}>{open ? '-' : '+'}[{id}]</span>{open && <CustomTable jsonData={initialValue} />}</div>)
			: `${value}`
			// : <input value={value as string || ''} onChange={(e) => setValue(e.target.value)} onBlur={onBlur} />
	},
}

export default DefaultColumn