/* eslint-disable react/jsx-key */
import type { NextPage } from 'next'
import jsonData from '../../newdata.json'
import CustomTable from 'components/CustomTable'

const JsonGrid: NextPage = () => {
	return <CustomTable jsonData={jsonData} />
}

export default JsonGrid
