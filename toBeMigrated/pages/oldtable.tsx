/* eslint-disable react/jsx-key */
import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { useTable, useBlockLayout } from 'react-table'
import { FixedSizeList } from 'react-window'
import scrollbarWidth from 'src/components/scrollBarWidth'
import headerGenerator from 'src/generator/headerGenerator'
import bodyGenerator from 'src/generator/bodyGenerator'
import jsonData from '../../deal.json'

const Styles = styled.div`
	padding: 1rem;
	overflow: auto;

	.table {
		display: inline-block;
		border-spacing: 0;
		border: 1px solid black;

		.tr {
			:last-child {
				.td {
					border-bottom: 0;
				}
			}
		}

		.th,
		.td {
			margin: 0;
			padding: 0.5rem;
			border-bottom: 1px solid black;
			border-right: 1px solid black;

			:last-child {
				border-right: 1px solid black;
			}
		}
	}
`
function App() {

	return (
		<Styles>
			{/* <Table columns={columns} data={data} /> */}
		</Styles>
	)
}

export default App
