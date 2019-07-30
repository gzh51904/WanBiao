import React,{Component,Fragment} from 'react';

import {api} from '../../utils';

import { Table} from 'antd';

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: text => <a href="javascript:;">{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Disabled User',
      age: 99,
      address: 'Sidney No. 1 Lake Park',
    },
  ];
  
  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

class Home extends Component{
    constructor(){
        super();

        this.state = {
            recommend:[],
            datalist:[]
        }

        this.goto = this.goto.bind(this);
    }
    // 生命周期函数
    async componentWillMount(){
        let {data} = await api.get('index.php?act=index',{
            // params:{
            //     act:'index'
            // }
        })

        console.log(data)

        let recommend = data.datas[0].adv_list.item;
        let datalist = data.datas.slice(1).map(item=>item.goods)

        // 设置轮播图
        this.setState({
            recommend,
            datalist
        })
    }

    // 页面跳转
    goto(id){
        let {history} = this.props;

        let pathname = '/goods/'+id;console.log('id',id,pathname)

        history.push({
            pathname
        })
    }

    render(){
        console.log(888)
        let {recommend,datalist} = this.state;
        return (
                <div style = {{float:'left',width:'80%',height:800,padding: '30px'}}>
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} style = {{width:'80%',height:800,padding:'100px,0,0,100px'}}/>
                </div>
        )
    }
}

export default Home;
