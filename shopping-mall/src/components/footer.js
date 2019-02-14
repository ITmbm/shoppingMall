import React, { Component } from 'react';
class Footer extends Component {
    render() {
        return (
            <ul className="footer botcar">
                <li className="footer-active"><a href="./index.html"><i className="iconfont">{"\ue61f"}</i><span>首页</span></a></li>
                <li><a href="./classNameify.html"><i className="iconfont">{"\ue60a"}</i><span>分类</span></a></li>
                <li><a href="./car.html"><i className="iconfont">{"\ue602"}</i><span>购物车</span></a></li>
                <li><a href="./mine.html"><i className="iconfont">{"\ue619"}</i><span>我的</span></a></li>
            </ul>
        )
    }
}
export default Footer;