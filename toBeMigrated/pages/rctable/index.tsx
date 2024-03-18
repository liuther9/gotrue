import { useMemo } from 'react'
import Table from 'rc-table'
import headerGenerator from 'src/generator/headerGenerator'
import bodyGenerator from 'src/generator/bodyGenerator'
import jsonData from '../../../deal.json'
import styled from 'styled-components'

// import './index.less';
// import { ColumnsType, RenderedCell } from '@/interface';

interface RecordType {
  a?: string;
  b?: string;
  c?: string;
  d?: string;
  e?: string;
  key?: string;
}

const columns = [
  {
    title: '手机号',
    dataIndex: 'a',
    colSpan: 2,
    width: 100,
    key: 'a',
    render(o:any, row:any, index:any) {
      return index === 0 ? <a href="#">{o}</a> : o;
    },
    onCell: (_:any, index:any) => {
      const props: React.TdHTMLAttributes<HTMLTableCellElement> = {};

      // 第5行合并两列
      if (index === 4) {
        props.colSpan = 2;
      }

      if (index === 5) {
        props.colSpan = 6;
      }

      return props;
    },
  },
  {
    title: '电话',
    dataIndex: 'b',
    colSpan: 0,
    width: 100,
    key: 'b',
    onCell(_:any, index:any) {
      // 列合并掉的表格设置colSpan=0，不会去渲染
      if (index === 4 || index === 5) {
        return { colSpan: 0 };
      }
      return {};
    },
  },
  {
    title: 'Name',
    dataIndex: 'c',
    width: 100,
    key: 'c',
    onCell(_:any, index:any) {
      if (index === 5) {
        return { colSpan: 0 };
      }
      return {};
    },
  },
  {
    title: 'Address',
    dataIndex: 'd',
    width: 200,
    key: 'd',
    onCell(_:any, index:any) {
      const props: React.TdHTMLAttributes<HTMLTableCellElement> = {};
      if (index === 0) {
        props.rowSpan = 2;
      }
      if (index === 1 || index === 5) {
        props.rowSpan = 0;
      }

      if (index === 5) {
        props.colSpan = 0;
      }
      return props;
    },
  },
  {
    title: 'Gender',
    dataIndex: 'e',
    width: 200,
    key: 'e',
    onCell(_:any, index:any) {
      if (index === 5) {
        return { colSpan: 0 };
      }
      return {};
    },
  },
  {
    title: 'Operations',
    dataIndex: '',
    key: 'f',
    render() {
      return <a href="#">Operations</a>;
    },
    onCell(_:any, index:any) {
      if (index === 5) {
        return {
          colSpan: 0,
        };
      }
      return {};
    },
  },
  {
    title: '其它',
    children: [
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '住址',
        children: [
          {
            title: '街道',
            dataIndex: 'street',
            key: 'street',
          },
          {
            title: '小区',
            children: [
              {
                title: '单元',
                dataIndex: 'building',
                key: 'building',
              },
              {
                title: '门牌',
                dataIndex: 'number',
                key: 'number',
              },
            ],
          },
        ],
      },
    ],
  },
];

const data: RecordType[] = [
  { a: '13812340987', b: '0571-12345678', c: '张三', d: '文一西路', e: 'Male', key: '1' },
  { a: '13812340986', b: '0571-98787658', c: '张夫人', d: '文一西路', e: 'Female', key: '2' },
  { a: '13812988888', b: '0571-099877', c: '李四', d: '文二西路', e: 'Male', key: '3' },
  { a: '1381200008888', b: '0571-099877', c: '王五', d: '文二西路', e: 'Male', key: '4' },
  { a: '0571-88888110', c: '李警官', d: '武林门', e: 'Male', key: '5' },
  { a: '资料统计完毕于xxxx年xxx月xxx日', key: '6' },
];

const Container = styled.div`
  table {
    border-top: 1px solid black;
    border-left: 1px solid black;
  }
  td, th {
    border-bottom: 1px solid black;
    border-right: 1px solid black;
  }
`

const Rctable = () => {
	// const columns = useMemo(() => headerGenerator(jsonData), [])
	// const body = useMemo(() => bodyGenerator(jsonData), [])
	// console.log(body)
	return <Container><Table columns={columns} data={data} /></Container>
}

export default Rctable
