import React, { Component } from 'react';
class Index extends Component {
    render() { 
        return (
      <div>
            <div className="main">
        <div className="main-header">
            <div className="header-nav">
                <ul className="upnav">
                    <li><a href="" className="nav-active">推荐</a></li>
                    <li><a href="">咖啡</a></li>
                    <li><a href="">饮食</a></li>
                    <li><a href="">男装</a></li>
                    <li><a href="">女装</a></li>
                    <li><a href="">眼镜</a></li>
                </ul>
                <span className="iconfont downup-arrow">{"\ue635"}</span>
                <div className="category-box">
                    <div className="title">
                        <span>全部频道</span>
                        <span className="icon-arrow arrow-up"></span>
                    </div>
                    <div className="detail">
                        <ul>
                            <li className="active"><a href="">推荐</a></li>
                            <li><a href="">咖啡</a></li>
                            <li><a href="">饮食</a></li>
                            <li><a href="">男装</a></li>
                            <li><a href="">女装</a></li>
                            <li><a href="">眼镜</a></li>
                            <li><a href="">内衣配饰</a></li>
                            <li><a href="">母婴</a></li>
                            <li><a href="">鞋靴</a></li>
                            <li><a href="">运动</a></li>
                            <li><a href="">箱包</a></li>
                            <li><a href="">美妆个护</a></li>
                            <li><a href="">家纺</a></li>
                            <li><a href="">餐厨</a></li>
                            <li><a href="">电器</a></li>
                            <li><a href="">家装</a></li>
                            <li><a href="">家具</a></li>
                            <li><a href="">数码</a></li>
                            <li><a href="">汽配</a></li>
                            <li><a href="">健康保健</a></li>
                            <li><a href="">定制</a></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="main-section">
            <div className="banner">
                <ul>
                    <li><a href=""><img src={require("../static/img/lunbo1.jpg")}/></a></li>
                    <li><a href=""><img src="" alt=""/></a></li>
                    <li><a href=""><img src="" alt=""/></a></li>
                    <li><a href=""><img src="" alt=""/></a></li>
                    <li><a href=""><img src="" alt=""/></a></li>
                    <li><a href=""><img src="" alt=""/></a></li>
                </ul>
                <ol>
                    <li className="active"></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ol>
            </div>
            <div className="guarantee_g">
                <p>
                    <span>大牌制造商</span>
                    <span>七天无忧退货</span>
                    <span>全平台包邮</span>
                </p>
            </div>
            <div className="operate_g">
                <ul>
                    <li>
                        <a href="">
                            <img src={require("../static/img/pin.png")}/>
                            <span>一起拼</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={require("../static/img/healthy.png")}/>
                            <span>健康正餐</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={require("../static/img/man.png")}/>
                            <span>品质男装</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={require("../static/img/nv.png")}/>
                            <span>花漾女神</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={require("../static/img/hong.png")}/>
                            <span>美妆个户</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={require("../static/img/shui.png")}/>
                            <span>厨具水具</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={require("../static/img/bing.png")}/>
                            <span>休闲茶饮</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={require("../static/img/jia.png")}/>
                            <span>家居家纺</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={require("../static/img/dian.png")}/>
                            <span>家用电器</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={require("../static/img/xie.png")}/>
                            <span>男女鞋靴</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="floors">
                <div className="centerImg"><a href=""><img src={require("../static/img/centerImg.jpg")}/></a></div>
                <div className="production">
                    <a href="" className="title">
                        <h3>大牌制造商</h3>
                    </a>
                    <ul>
                        <li><a href="">
                                <h3>adidas制造商</h3><span>男裤</span><img src={require("../static/img/nanzhuang.jpg")}/>
                            </a></li>
                        <li><a href="">
                                <h3>优视路制造商</h3><span>眼镜</span><img src={require("../static/img/yanjing.jpg")}/>
                            </a></li>
                        <li><a href="">
                                <h3>NICOLE制造商</h3><span>女装</span><img src={require("../static/img/nvzhuang1.jpg")}/>
                            </a></li>
                        <li><a href="">
                                <h3>MUJI原料制造商</h3><span>美妆个护</span><img src={require("../static/img/meizhuang1.jpg")}/>
                            </a></li>
                        <li><a href="">
                                <h3>AMANI制造商</h3><span>鞋靴</span><img src={require("../static/img/xiexue1.jpg")}/>
                            </a></li>
                        <li><a href="">
                                <h3>Vera Wang制造商</h3><span>家纺</span><img src={require("../static/img/jiafang.jpg")}/>
                            </a></li>
                        <li><a href="">
                                <h3>SWAN制造商</h3><span>电器</span><img src={require("../static/img/dianqi.jpg")}/>
                            </a></li>
                        <li><a href="">
                                <h3>希尔顿酒店制造商</h3><span>餐厨</span><img src={require("../static/img/canchu.jpg")}/>
                            </a></li>
                        <li><a href="">
                                <h3>MC Airlaids制造商</h3><span>母婴</span><img src={require("../static/img/muying.jpg")}/>
                            </a></li>
                        <li><a href="">
                                <h3>SONY制造商</h3><span>数码</span><img src={require("../static/img/shuma1.jpg")}/>
                            </a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
      </div>
        )
    }
}
 
export default Index;