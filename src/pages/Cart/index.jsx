import React, { Component } from 'react';

import './Cart.css';

class Cart extends Component {

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
			{/* <div className="login-tips">登录后购物车的商品将保存到您账号中，
				<a href="#/login">现在登录</a>
			</div> */}
		</div>
        <main>
			{/* <div className="W-cart paddingTop80" id="W-cart" >
				<div className="empty-status">
					<div className="icon icon-a-empty-cart"></div>
					<p>购物车是空的</p>
					<div className="btns-wrap">
						<div className="btns left">
							<a href="#/wanbiao">逛逛首页</a>
						</div>
						<div className="btns right">
							<a href="javascript:0">查看收藏</a>
						</div>
					</div>
				</div>
			</div> */}
			<div className="shopping">

				<div className="shop-group-item" >
					<div className="shop-name">
						<input type="checkbox" className="check goods-check shopCheck"/>
						<h4><a href="#">苹果专卖店</a></h4>
						<div className="coupons">
							<span>领券</span>
							<em>|</em>
							<span className="btn-close">删除</span>
						</div>
					</div>
					<ul>
						<li>
							<div className="shop-info">
								<input type="checkbox" className="check goods-check goodsCheck"/>
								<div className="shop-info-img">
									<a href="#"></a>
								</div>
								<div className="shop-info-text">
									<h4>Apple MacBook Pro 13.3英寸笔记本电脑 银色(Core i5 处理器/8GB内存/128GB SSD闪存/Retina屏 MF839CH/A)</h4>
									<div className="shop-brief"><span v-text="s.intro"></span></div>
									<div className="shop-price">
										<div className="shop-pices">￥<b className="price" v-text="s.sale">100.00</b></div>
										<div className="shop-arithmetic">
											<a href="javascript:;" className="minus">-</a>
											<span className="num" v-text="s.qty">1</span>
											<a href="javascript:;" className="plus">+</a>
										</div>
									</div>
								</div>
							</div>
						</li>
                        
					</ul>
					<div className="shopPrice">本店总计：￥<span className="shop-total-amount ShopTotal">0.00</span></div>
				</div>
			</div>

			<div className="payment-bar">
				<div className="all-checkbox"><input type="checkbox" className="check goods-check" id="AllCheck"/>全选</div>
				<div className="shop-total">
					<strong>总价：<i className="total" id="AllTotal">0.00</i></strong>
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