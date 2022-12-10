import {
  generateTable,
  generateHTMLTable,
  generateExcel,
  parseDataToSchema
} from 'json5-to-table'
import { useMemo } from 'react'
import headerGenerator from 'src/generator/headerGenerator'
import bodyGenerator from 'src/generator/bodyGenerator'
import styled from 'styled-components'
import data from '../../newdata.json'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
	table {
		display: inline-block;
		border-spacing: 0;
		border: 1px solid black;
		border-right: 0;
  }
  td, th {
    box-sizing: border-box;
    margin: 0;
    border-bottom: 1px solid black;
    border-right: 1px solid black;
  }
  td {
    min-width: 100px;
  }
`

const Table = () => {
  // const schema = useMemo(() => parseDataToSchema(data), [])
  // const columns = useMemo(() => headerGenerator(data), [])
  // const table = useMemo(() => generateTable(data, schema), [schema])
  // const html = useMemo(() => generateHTMLTable(data, schema), [schema])
  // console.log(schema)
  // console.log(columns)

  // console.log(table)
  
  return <div>asd</div>
  // return <Wrapper dangerouslySetInnerHTML={{ __html: html }}></Wrapper>
}
export default Table