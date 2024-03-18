import React, { useMemo } from 'react'
import 'antd/dist/antd.css'
import { Table } from 'antd'
import rcBody from 'src/generator/rcBody'
import newJson from '../../newdata.json'
import rcColumns from 'src/generator/rcColumns'
import styled from 'styled-components'
import countArrayLength from 'src/generator/countArrayLength'

const Container = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	overflow: auto;

	table {
		overflow: scroll;
		border-collapse: collapse;
	}

	tr th {
		text-align: center;
		padding: 0 3px;
	}
`
const sharedOnCell = (_: any, index: any) => {
	if (index === 4) {
		return {
			// colSpan: 0
		}
	}

	return {}
}

const columns = [
	{
		title: 'Name',
		dataIndex: 'name',
		render: (text: string) => <a>{text}</a>,
		onCell: (_: any, index: any) => ({
			colSpan: index < 4 ? 1 : 1,
		}),
	},
	{
		title: 'Age',
		dataIndex: 'age',
		onCell: sharedOnCell,
		rowSpan: 5,
	},
	{
		title: 'Home phone',
		colSpan: 2,
		dataIndex: 'tel',
		onCell: (_: any, index: any) => {
			if (index === 2) {
				return {
					rowSpan: 2,
				}
			} // These two are merged into above cell

			if (index === 3) {
				return {
					rowSpan: 0,
				}
			}

			if (index === 4) {
				return {
					// colSpan: 0
				}
			}

			return {}
		},
	},
	{
		title: 'Phone',
		colSpan: 0,
		dataIndex: 'phone',
		onCell: sharedOnCell,
	},
	{
		title: 'Address',
		dataIndex: 'address',
		onCell: sharedOnCell,
	},
]

const Antd = () => {
	// const header = useMemo(() => rcColumns(newJson), [])
	// const body = useMemo(() => rcBody(newJson), [])
	// const len = newJson.map(i => countArrayLength(i, 0))
	// console.log(len)
	// console.log(body)
	return (
		<Container>
			<div>asd</div>
			{/* <Table columns={header} dataSource={body} bordered /> */}
		</Container>
	)
}

export default Antd
