import React, { Component } from 'react';
class Mine extends Component {
    render() {
        return (
            <div className="main-car">
                <div className="header hdcar">
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
                <div className="off"></div>
                <div className="tan">
                    <div className="context">
                        <p className="num">验证手机号</p>
                        <input className="innum" type="text" id="" placeholder="请输入手机号"/>
                        <input className="incheck" type="text" id="" placeholder="请输入验证码"/>
                        <input className="getnum" type="button" id="" value="获取验证码"/>
                        <p className="tip">若输入的手机号未注册,系统会自动帮您注册</p>
                        <div className="next"><a href="">下一步</a></div>
                    </div>
                </div>
            </div>
                        )
                    }
                }
                 
export default Mine;