import React, { Component } from 'react';
class Car extends Component {
    render() {
        return (
            
            <div className="main-car">
            <div className="header">
                 <a href=""><i className="iconfont home">{"\ue626"}</i></a>
                  <span>购物车</span>
            </div>
            <div className="context">
                 <i className="iconfont">{"\ue6ab"}</i>
                 <p>购物车还是空的，赶紧行动吧!</p>
                 <div><a href="">去逛逛</a></div>
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
                 
export default Car;