import React, { Component } from 'react';

import { NavLink, Route, Switch, Redirect } from 'react-router-dom';

import './Detail.css';

import axios from 'axios';
class List extends Component {
    constructor() {
        super();

        this.state = {
            img: '/assets/shangou2.jpg',
            price:100,
            name:''
        }

    }

    async componentWillMount() {
        let r = this.props.location.pathname.slice(8);
        console.log(this.props,r);
        let goodlist = await axios.get("http://localhost:1904/goods/"+r);
        // console.log(goodlist.data.data[0].ori_price);
        let img = goodlist.data.data[0].img_url;
        let price = goodlist.data.data[0].ori_price;
        let name = goodlist.data.data[0].name;
        this.setState({
            img: '/assets/'+img,
            price:price,
            name:name
          });
       
    }

    async goto(){
        let goodlist = await axios.post("http://localhost:1904/goods",{
               img:this.state.img,
               price:this.state.price,
               name:this.state.name
        });
        console.log(goodlist);
    }

    render() {
        return <div>
            <div className="W_goods_detail_title">
                <header className="W_title">
                    <ul className="clearfix">
                        <li className="wb_back">

                            <a href="#/wanbiao" className="icon-d-back02"></a>
                        </li>
                        <li className="wb_title_middle wb_goods_tab">
                            <ul className="clearfix" id="wb_goods_tab">
                                <li v-for="(p,index) in pageheader">
                                    <a href="javascript:void(0);" v-text="p.name">商品</a>
                                </li>
                            </ul>
                        </li>
                        <li className="wb_more">
                            <a href="javascript:void(0);" className="to_more icon-a-nav02"></a>
                        </li>
                    </ul>
                </header>
                <div className="ol_show" style={{ display: 'none', top: 40 }}>
                    <div className="jiao"></div>
                    <a href="/">首页</a>
                    <a className="js_share">分享</a>
                    <a href="https://mu.wbiao.cn/member/footprints">足迹</a>
                </div>
            </div>

            <div className="main">

                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {/* 照片 */}
                        <div className="swiper-slide"><img src={this.state.img} alt="" /></div>
                    </div>

                    <div className="swiper-pagination"></div>

                </div>

                <div className="pr_title">
                    <div className="price">
                        <div className="price_a"> <span className="price_a_jiage">¥<i className="wbPrice">{this.state.price}</i></span> <span className="price_b_jiage">¥4200</span> <span className="price_a_flash">一口价</span> <span className="price_a_bargain fr"><p className="ico icon-d-goods-xin detail_footer_ico3 " data-index=""></p><p className="txt">收藏</p></span></div>
                    </div>
                    <div className="title"> <span className="title_b share_text">【天梭原装正品，全球联保两年】天梭TISSOT-力洛克系列 T006.407.16.033.00 自动机械男表</span></div>
                    <div className="lead">机芯稳定性、精度、动力储存全面提升 力洛克T41.1.423.33全新升级版</div>
                    <div className="price">
                        <div className="price_b"><span className="price_b_ico icon-a-goods-logo h"></span> <span className="price_text">顺丰包邮</span> <span className="price_b_sale fr">销售：3898</span></div>
                    </div>
                </div>

                <div className="pr_coice">
                    <div className="coice_content clearfix">
                        <div className="coice_content_title fl">已选</div>
                        <div className="coice_content_cont fl"> <span className="coice_content_cont_cont">真皮 银色</span> <span className="coice_content_cont_num">1</span>个</div>
                        <div className="icon-a-goods-more fr"></div>
                    </div>
                </div>

                <div className="pr_coupons">
                    <div className="coupons_stages clearfix">
                        <div className="coupons_stages_title fl">分期</div>
                        <div className="coupons_stages_contnet fl">每月<span className="coupons_stages_contnet_price">260</span>元x12期</div>
                        <div className="coupons_stages_more icon-a-goods-more fr"></div>
                    </div>
                </div>

                <div className="pr_distribution">
                    <div className="distribution clearfix">
                        <div className="distribution_title fl">配送</div>
                        <div className="distribution_content fl">
                            <div className="distribution_content_a"> <span>有现货</span> <span className="black">免运费</span></div>
                            <div className="distribution_content_b">下单后16:45前支付，预计1-3个工作日内发货</div>
                        </div>
                    </div>
                    <div className="brand clearfix" id="brand">
                        <a className="fl"><span className="brand_ico icon-d-goods-service2"></span> <span className="brand_text brand_textTwo">正规发票</span></a>
                        <a className="fl"><span className="brand_ico icon-d-goods-service2"></span> <span className="brand_text brand_textTwo">假一赔三</span></a>
                        <a className="fl"><span className="brand_ico icon-d-goods-service2"></span> <span className="brand_text brand_textTwo">7天质量退换</span></a>
                        <a className="fl"><span className="brand_ico icon-d-goods-service2"></span> <span className="brand_text brand_textTwo">全球联保</span></a>
                        <a className="fl"><span className="brand_ico icon-d-goods-service2"></span> <span className="brand_text brand_textTwo">免息分期</span></a>
                        <a className="fl"><span className="brand_ico icon-d-goods-service2"></span> <span className="brand_text brand_textTwo">正品保障</span></a>
                        <a className="fl"> <span className="brand_ico icon-a-goods-service"></span> <span className="brand_text ">实体店体验</span></a>
                        <a className="fl"> <span className="brand_ico icon-a-goods-service"></span> <span className="brand_text ">闪电发货</span></a>
                        <a className="fl"> <span className="brand_ico icon-a-goods-service"></span> <span className="brand_text ">货到付款</span></a>
                    </div>
                </div>

                <div className="W_popularity">
                    <p className="with">人气搭配 <span>搭配购买更优惠</span></p>
                    <div className="W_combination">
                        <a href="javascript:void(0);">
                            <p className="p1"><img src="/assets/dapei1.jpg" alt="" /></p>
                             {/* 价钱 */}
                            <p className="p2">{this.state.price}}</p>
                        </a> <span className="fl">+</span>
                        <a href="/goods/70810">
                            <p className="p1"><img src="/assets/dapei2.jpg" alt="" /></p>
                            <p className="p2">￥143</p>
                            <p className="p3">优惠￥95</p>
                        </a> <span className="fl">+</span> <span className="fl more">搭配更多</span></div>
                </div>

                <div className="pr_evaluate">
                    <div className="evaluate_title">
                        <span className="evaluate_title_a fl">评价(213)</span>
                        <span className="evaluate_title_d icon-a-goods-more fr"></span>
                        <span className="evaluate_title_c fr">98%</span>
                        <span className="evaluate_title_b fr">好评</span>
                    </div>
                    <div className="evaluate_content">
                        <div className="evaluate_content_a clearfix">
                            <div className="evaluate_content_a_head fl"> <img src="/assets/dapei2.jpg" alt="" /></div>
                            <div className="evaluate_content_a_name fl">二**子</div>
                            <div className="evaluate_content_grade fl" style={{ 'backgroundColor': '#FFBF80' }}>金卡会员</div>
                            <div className="evaluate_content_grade"></div>
                            <div className="evaluate_content_a_ico fr" data-index="5"><span className="icon-a-goods-wuxing"></span><span className="icon-a-goods-wuxing"></span><span className="icon-a-goods-wuxing"></span><span className="icon-a-goods-wuxing"></span><span className="icon-a-goods-wuxing"></span></div>
                        </div>
                        <div className="evaluate_content_b">手表外观还可以，表带有点硬，总体感觉还是蛮好的。不知道走时准不准，过二天就知道啦！</div>
                        <div className="evaluate_content_c">
                            <li className="lazy-load"> <img src="../assets/dapei2.jpg" alt="" /></li>
                            <li className="lazy-load"> <img src="../assets/dapei2.jpg" alt="" /></li>
                            <li className="lazy-load"> <img src="../assets/dapei2.jpg" alt="" /></li>
                        </div>
                        <div className="evaluate_content_d">
                            <span></span>
                            <span>真皮 银色</span>
                            <span>共3张图</span>
                        </div>

                    </div>
                    <div className="evaluate_more">
                        <li className="evaluate_more_whole">全部评价(213)</li>
                        <li className="CUSTOMER-SERVICE" service-code="wx_1000_1515726307656">咨询客服</li>
                    </div>
                </div>

                <div className="pr_shop">
                    <a href="/shop/13" className="shop_title clearfix" data-index="13">
                        <div className="shop_title_logo fl"> <img src="../assets/trade.jpg" alt="" /></div>
                        <div className="shop_title_txt fl">
                            <div className="shop_title_txt_a"> <span className="trade">天梭TISSOT</span> <span>自营</span> </div>
                            <div className="shop_title_txt_b">销量143754</div>
                        </div>
                    </a>
                    <a href="/shop/13" className="shop_content">
                        <div className="shop_content_text clearfix">
                            <li className="allShop shop_content_text_a fl">“325”</li>
                            <li className="allVermicalli shop_content_text_a fl">“41120”</li>
                        </div>
                        <div className="shop_content_text clearfix">
                            <li className="shop_content_text_b fl">全部商品</li>
                            <li className="shop_content_text_b fl">关注粉丝数</li>
                        </div>
                    </a>
                    <div className="shop_more">
                        <li><span className="shop_more_ico icon-a-goods-classNameify"></span> <span className="shop_more_text CUSTOMER-SERVICE" data-index="wx_1000_1515726307656">联系商家</span></li>
                        <li><span className="shop_more_ico icon-a-goods-store"></span> <span className="shop_more_text"><a href="/shop/13">进店逛逛</a></span></li>
                    </div>
                    <div className="pr_upMore" >
                        <span className="pr_upMore_ico icon-a-goods-upper"></span>
                        <span>点击进入商品信息</span>
                    </div>
                </div>
            </div>

            <div className="detail_footer">
                <div className="detail_footer_content">
                    <li>
                        <p className="detail_footer_ico icon-a-ntalk-goods CUSTOMER-SERVICE" service-code="wx_1000_1515726307656"></p>
                        <p className="p2">客服</p>
                    </li>
                    <li>
                        <a className="detail_footer_ico detail_footer_ico2"></a>
                        <a className="p2" href="/shop/23">店铺</a>
                    </li>
                    <li>
                        <a className="detail_footer_ico icon-d-goodscart"><i style={{ display: 'failed' }} v-text="number"></i></a>
                        <a className="p2" href="#/shopcar">购物车</a>
                    </li>
                    <li className="detail_footer_cart js_cart" >加入购物车</li>
                    <li className="detail_footer_purchase js_purchase" onClick={this.goto.bind(this)} >立即购买</li>


                    <div className="mui-popup mui-popup-in" style={{ display: 'zhuangtai' }}>
                        <div className="mui-popup-inner">
                            <div className="mui-popup-title">添加购物车成功</div>
                            <div className="mui-popup-text">是否继续浏览商品</div>
                        </div>
                        <div className="mui-popup-buttons">
                            <span className="mui-popup-button" >取消</span>
                            <a className="mui-popup-button mui-popup-button-bold" href="/wanbiao">继续浏览</a>
                        </div>
                    </div >

                </div >
            </div >
        </div >
    }
}

// List = withStorage(List);

export default List;