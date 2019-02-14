import React, { Component } from 'react';
class List extends Component {
    render() {
        return (
            <div className="main-list">
            <div className="header">
                 <a href="./index.html"><i className="iconfont home">{"\ue626"}</i></a>
                 <span>咖啡粉</span>
            </div>
            <ul className="contentlist">
                 <li>
                      <div className="topimg"><img src={require("../static/img/coffe-list1.jpg")}/></div>
                      <div className="text">
                           <p className="price"><i>￥</i><span>39</span></p>
                           <p className="onsale"><span className="chosen">精选</span><span className="all">一起拼</span></p>
                           <p className="proarea">星巴克合作基地制造商直供</p>
                           <p className="name">ANNY法式深焙袋冲咖啡2袋</p>
                           <p className="comt">643条好评</p>
                      </div>
                 </li>
                 <li>
                           <div className="topimg"><img src={require("../static/img/coffe-list1.jpg")}/></div>
                           <div className="text">
                                <p className="price"><i>￥</i><span>39</span></p>
                                <p className="onsale"><span className="chosen">精选</span><span className="all">一起拼</span></p>
                                <p className="proarea">星巴克合作基地制造商直供</p>
                                <p className="name">ANNY法式深焙袋冲咖啡2袋</p>
                                <p className="comt">643条好评</p>
                           </div>
                 </li>
                 <li>
                      <div className="topimg"><img src={require("../static/img/coffe-list1.jpg")}/></div>
                      <div className="text">
                           <p className="price"><i>￥</i><span>39</span></p>
                           <p className="onsale"><span className="chosen">精选</span><span className="all">一起拼</span></p>
                           <p className="proarea">星巴克合作基地制造商直供</p>
                           <p className="name">ANNY法式深焙袋冲咖啡2袋</p>
                           <p className="comt">643条好评</p>
                      </div>
                 </li>
                 <li>
                           <div className="topimg"><img src={require("../static/img/coffe-list1.jpg")}/></div>
                           <div className="text">
                                <p className="price"><i>￥</i><span>39</span></p>
                                <p className="onsale"><span className="chosen">精选</span><span className="all">一起拼</span></p>
                                <p className="proarea">星巴克合作基地制造商直供</p>
                                <p className="name">ANNY法式深焙袋冲咖啡2袋</p>
                                <p className="comt">643条好评</p>
                           </div>
                 </li>
                 <li>
                           <div className="topimg"><img src={require("../static/img/coffe-list1.jpg")}/></div>
                           <div className="text">
                                <p className="price"><i>￥</i><span>39</span></p>
                                <p className="onsale"><span className="chosen">精选</span><span className="all">一起拼</span></p>
                                <p className="proarea">星巴克合作基地制造商直供</p>
                                <p className="name">ANNY法式深焙袋冲咖啡2袋</p>
                                <p className="comt">643条好评</p>
                           </div>
                 </li>
                 <li>
                      <div className="topimg"><img src={require("../static/img/coffe-list1.jpg")}/></div>
                      <div className="text">
                           <p className="price"><i>￥</i><span>39</span></p>
                           <p className="onsale"><span className="chosen">精选</span><span className="all">一起拼</span></p>
                           <p className="proarea">星巴克合作基地制造商直供</p>
                           <p className="name">ANNY法式深焙袋冲咖啡2袋</p>
                           <p className="comt">643条好评</p>
                      </div>
                 </li>
            </ul>
       </div>
                        )
                    }
                }
                 
export default List;