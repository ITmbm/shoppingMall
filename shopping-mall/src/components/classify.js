import React, { Component } from 'react';
class Classify extends Component {
    render() {
        return (
            
            <div className="main-classify">
                <a href="" className="header-search">
                    <i className="iconfont">{"\ue637"}</i>
                    <span>请输入您想要的商品</span>
                </a>
                <div className="main-side">
                    <ul>
                        <li className="active">咖啡</li>
                        <li>饮食</li>
                        <li>男装</li>
                        <li>女装</li>
                        <li>眼镜</li>
                        <li>内衣配饰</li>
                        <li>母婴</li>
                        <li>鞋靴</li>
                        <li>运动</li>
                        <li>箱包</li>
                        <li>美妆个护</li>
                        <li>家纺</li>
                        <li>餐厨</li>
                        <li>电器</li>
                        <li>家装</li>
                        <li>家具</li>
                        <li>数码</li>
                        <li>汽配</li>
                        <li>健康保健</li>
                        <li>定制</li>
                    </ul>
                </div>
                <div className="main-text">
                    <a href="" className="ban"><img src={require("../static/img/classifyCofBn.jpg")}/></a>
                        <p>咖啡</p>
                        <ul className="context">
                            <li><a href="./list.html"><img src={require("../static/img/coff.jpg")}/><span>咖啡粉</span></a></li>
                                <li><a href=""><img src={require("../static/img/cofd.jpg")}/><span>咖啡豆</span></a></li>
                        </ul>
                </div>
                            <ul className="footer botcar">
                            <li className="footer-active"><a href="./index.html"><i className="iconfont">{"\ue61f"}</i><span>首页</span></a></li>
                            <li><a href="./classNameify.html"><i className="iconfont">{"\ue60a"}</i><span>分类</span></a></li>
                            <li><a href="./car.html"><i className="iconfont">{"\ue602"}</i><span>购物车</span></a></li>
                            <li><a href="./mine.html"><i className="iconfont">{"\ue619"}</i><span>我的</span></a></li>
                            </ul>
           </div>
                        )
                    }
                }
                 
export default Classify;