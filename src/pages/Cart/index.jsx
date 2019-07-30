import React, { Component } from 'react';

import './Cart.css';

import axios from 'axios';
import { totalmem } from 'os';

class Cart extends Component {

    constructor() {
        super();

        this.state = {

            cart: [],
            current: false
        }
        this.total = this.total.bind(this);
        // this.add = this.add.bind(this);
    }

    total() {
        let i = 0
        this.state.cart.map(item => { i = i + item.price * item.num * 1 })
        return i
    }

    add(name, num) {
        console.log(this, name, num);
        // this.state.cart.map((item,idx)=>{
        //     if(item.name==name){
        //         this.setState((preState,props)=>({

        //             name:preState.num+1

        //             }))

        // }})


        this.state.cart.forEach(item => {
            if (item.name === name) {
                item.num = item.num * 1 + 1
            }
            return item
        })
        this.setState({
            current: !this.state.current
        })


        // this.state.cart.num
    }

    reduce(name, num) {
        console.log(this, name, num);


        this.state.cart.forEach(item => {
            if (item.name === name) {
                if (item.num != 0) {
                    item.num = item.num * 1 - 1
                }

            }
            return item
        })
        this.setState({
            current: !this.state.current
        })


        // this.state.cart.num
    }

    async componentWillMount() {

        let goodlist = await axios.get("http://localhost:1904/reg");
        console.log(goodlist);
        // let img = goodlist.data.data[0].img_url;
        // let price = goodlist.data.data[0].ori_price;
        // let name = goodlist.data.data[0].name;
        // this.setState({
        //     img: '/assets/'+img,
        //     price:price,
        //     name:name
        //   });
        let cart = [];
        for (let i = 0; i < goodlist.data.data.length; i++) {
            // this.setState({
            //         img: goodlist.data.data[i].img,
            //         price: goodlist.data.data[i].price,
            //         name: goodlist.data.data[i].name
            // });

            // this.state.name.push(goodlist.data.data[i].name);
            // this.state.price.push(goodlist.data.data[i].price);

            let str = {
                img: goodlist.data.data[i].img,
                price: goodlist.data.data[i].price,
                name: goodlist.data.data[i].name,
                num: goodlist.data.data[i].num
            }
            cart.push(str);
            // console.log(this.state.img[0]);
            // console.log(cart);
        }
        this.setState({ cart })
        console.log(this.state);


    }


    render() {
        return <div>
            <div className="W-cart-head" id="W-cart-head">
                <header className="W_title">
                    <ul className="clearfix">
                        <li className="wb_back">
                            <a href="javascript:window.history.back();" className="icon-d-back02"></a>
                        </li>
                        <li className="wb_title_middle wb_title">购物车</li>
                        <li className="rewrite_right">
                            <a href="javascript:void(0);" className="" id="w-editAll">编辑</a>
                            <a href="javascript:void(0);" className="h" id="w-editFinish">完成</a>
                        </li>

                    </ul>
                </header>

            </div>
            <main>

                <div className="shopping">

                    <div className="shop-group-item" >
                        <div className="shop-name">
                            <input type="checkbox" className="check goods-check shopCheck" />
                            <h4><a href="#">苹果专卖店</a></h4>
                            <div className="coupons">
                                <span>领券</span>
                                <em>|</em>
                                <span className="btn-close">删除</span>
                            </div>
                        </div>
                        <ul>

                            {/* <li>
                                <div className="shop-info">
                                    <input type="checkbox" className="check goods-check goodsCheck" />
                                    <div className="shop-info-img">
                                        <img alt="" />
                                        <a href="#"></a>
                                    </div>
                                    <div className="shop-info-text">
                                        <h4></h4>
                                        <div className="shop-brief"><span v-text="s.intro"></span></div>
                                        <div className="shop-price">
                                            <div className="shop-pices">￥<b className="price" ></b></div>
                                            <div className="shop-arithmetic">
                                                <a href="javascript:;" className="minus">-</a>
                                                <span className="num" v-text="s.qty">1</span>
                                                <a href="javascript:;" className="plus">+</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li> */}
                            {

                                // console.log(this.state.cart) 
                                this.state.cart.map(item => {
                                    return <li>
                                        <div className="shop-info">
                                            <input type="checkbox" className="check goods-check goodsCheck" />
                                            <div className="shop-info-img">
                                                <img src={item.img} alt="" />
                                                <a href="#"></a>
                                            </div>
                                            <div className="shop-info-text">
                                                <h4></h4>
                                                <div className="shop-brief"><span v-text="s.intro">{item.name}</span></div>
                                                <div className="shop-price">
                                                    <div className="shop-pices">￥{item.price}<b className="price" ></b></div>
                                                    <div className="shop-arithmetic">
                                                        <a href="javascript:;" className="minus" onClick={this.reduce.bind(this, item.name, item.num)}>-</a>
                                                        <span className="num" >{item.num}</span>
                                                        <a href="javascript:;" className="plus" onClick={this.add.bind(this, item.name, item.num)}>+</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                })
                            }


                        </ul>
                        <div className="shopPrice" >本店总计：￥<span className="shop-total-amount ShopTotal">{this.total()}</span></div>
                    </div>
                </div>

                <div className="payment-bar">
                    <div className="all-checkbox"><input type="checkbox" className="check goods-check" id="AllCheck" />全选</div>
                    <div className="shop-total">
                        <strong>总价：<i className="total" id="AllTotal">{this.total()}</i></strong>
                        <span>减免：123.00</span>
                    </div>
                    <a href="#" className="settlement">结算</a>
                </div>
            </main>
        </div>
    }
}

// Cart = withStorage(Cart)

export default Cart;