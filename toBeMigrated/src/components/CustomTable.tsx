import { SortingState, useReactTable, getCoreRowModel, getSortedRowModel, flexRender, RowData } from "@tanstack/react-table"
import { useVirtualizer } from "@tanstack/react-virtual"
import { useMemo, useState, useRef } from "react"
import gridBodyGenerator from "src/generator/gridBody"
import gridHeaderGenerator from "src/generator/gridColumns"
import headerGenerator from "src/generator/headerGenerator"
import styled from "styled-components"
import DefaultColumn from "./DefaultColumn"
import useSkipper from "./useSkipper"

const Container = styled.div`
display: flex;
width: 100%;
max-height: 90vh;
overflow: auto;

table {
	width: 100%;
	height: 100%;
	border: 1px solid black;
	overflow: scroll;
	border-collapse: collapse;
}

thead {
	border-bottom: 2px solid black;
	color: gray;
}

th {
	border-bottom: 1px solid black;
	border-right: 1px solid black;
	padding: 2px 4px;
}

tfoot {
	color: gray;
}

tfoot th {
	font-weight: normal;
}
`

const Tbody = styled.tbody<{ height?: any }>`
border-bottom: 1px solid black;
position: relative;
height: ${(props) => `${props.height}px`};
tr {
	max-height: fit-content;
	td {
		max-height: fit-content;
		border-bottom: 1px solid black;
		border-right: 1px solid black;
	}
}
`
declare module '@tanstack/react-table' {
	interface TableMeta<TData extends RowData> {
		updateData: (rowIndex: number, columnId: string, value: unknown) => void
	}
}

export default function CustomTable({ jsonData }: { jsonData: any }) {
	//TABLE
	const columns = useMemo(() => headerGenerator(jsonData), [jsonData])
	const body = useMemo(() => gridBodyGenerator(jsonData), [jsonData])
	const gridColumns = useMemo(() => gridHeaderGenerator(jsonData), [jsonData])

	const [sorting, setSorting] = useState<SortingState>([])

	const [data, setData] = useState(() => [...body])
	const [autoResetPageIndex, skipAutoResetPageIndex] = useSkipper()

	const table = useReactTable({
		data,
		columns: gridColumns,
		defaultColumn: DefaultColumn,
		state: {
			sorting,
		},
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		autoResetPageIndex,
		// Provide our updateData function to our table meta
		meta: {
			updateData: (rowIndex, columnId, value) => {
				// Skip age index reset until after next rerender
				skipAutoResetPageIndex()
				setData((old) =>
					old.map((row, index) => {
						if (index === rowIndex) {
							return {
								...old[rowIndex]!,
								[columnId]: value,
							}
						}
						return row
					})
				)
			},
		},
		debugTable: true,
	})

	//VIRTUALIZER
	const tableContainerRef = useRef<any>(null)

	const { rows } = table.getRowModel()
	const rowVirtualizer = useVirtualizer({
		horizontal: false,
		getScrollElement: () => tableContainerRef.current,
		count: rows.length,
		estimateSize: (i) => 150,
		overscan: 5,
	})

	return (
		<Container ref={tableContainerRef}>
			<table>
				<thead>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => {
								return (
									<th key={header.id} colSpan={header.colSpan} style={{ width: header.getSize() }}>
										{header.isPlaceholder ? null : (
											<div
												{...{
													className: header.column.getCanSort() ? 'cursor-pointer select-none' : '',
													onClick: header.column.getToggleSortingHandler(),
												}}
											>
												{flexRender(header.column.columnDef.header, header.getContext())}
												{{
													asc: ' 🔼',
													desc: ' 🔽',
												}[header.column.getIsSorted() as string] ?? null}
											</div>
										)}
									</th>
								)
							})}
						</tr>
					))}
				</thead>
				<Tbody>
					{rows.map((virtualRow: any) => {
						const row = rows[virtualRow.index]
						return (
							<tr key={row.id}>
								{row.getVisibleCells().map((cell: any) => {
									return (
										<td key={cell.id}>
											{flexRender(cell.column.columnDef.cell, cell.getContext())}
										</td>
									)
								})}
							</tr>
						)
					})}
				</Tbody>
			</table>
		</Container>
	)
}