import React, { Component } from 'react';

import { api } from '../../utils';

import { Table} from 'antd';



const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: text => <a href="javascript:;">{text}</a>,
    },
    {
      title: 'Num',
      dataIndex: 'num',
    },
    {
      title: 'Type',
      dataIndex: 'type',
    },
  ];


  const data = [
    {
      key: '1',
      name: '瑞士库尔沃',
      num: 32,
      type: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: '德国哈伯曼',
      num: 42,
      type: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: '永嘉闭锁',
      num: 32,
      type: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: '帝国TUDOR',
      num: 99,
      type: 'Sidney No. 1 Lake Park',
    },{
      key: '1',
      name: '瑞士库尔沃',
      num: 32,
      type: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: '德国哈伯曼',
      num: 42,
      type: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: '永嘉闭锁',
      num: 32,
      type: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: '帝国TUDOR',
      num: 99,
      type: 'Sidney No. 1 Lake Park',
    }
  ];


class Goods extends Component {
    constructor() {
        super();

        this.state = {
            info: {},
            recommed: []
        }
      
    }
    
    
    async componentWillMount() {
        
        let data = await api.get('/goods')
            
     

        console.log('data:', data);

        // this.setState({
        //     info: {
        //         ...datas.goods_info,
        //         imgurl: datas.goods_image,
        //     },
        //     recommed: datas.goods_commend_list
        // })
    }
    
    render() {
        let { info,recommed } = this.state;
        return (
            <div style = {{float:'left',width:'80%',height:800,padding: '30px'}}>
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} style = {{width:'80%',height:800,padding:'100px,0,0,100px'}}/>
            </div>
        )
    }
}

export default Goods;