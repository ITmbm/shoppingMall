import React, { Component } from 'react';
class Detail extends Component {
    render() {
        return (
            <div>
            <div className="main-detail">
            <div className="imgbox">
            <ul className="topimg">
                  <li><a href=""><img src={require("../static/img/coffe-list1.jpg")}/></a></li>
                  <li><a href=""><img src={require("../static/img/coffe-list2.jpg")}/></a></li>
                  <li><a href=""><img src={require("../static/img/coffe-list3.jpg")}/></a></li>
                  <li><a href=""><img src={require("../static/img/coffe-list4.jpg")}/></a></li>
                  <li><a href=""><img src={require("../static/img/coffe-list5.jpg")}/></a></li>
            </ul>
            <ol className="pots">
                <li className="active"></li>
                <li></li>
                <li></li>
                <li className="active"></li>
                <li></li>
            </ol>
           </div>
            <div className="detext">
                  <div className="title">ANNY法式深焙袋冲咖啡（2*30g、非速溶咖啡)</div>
                  <div className="collect"><img src={require("../static/img/shoucang.png")}/> <p>收藏</p></div>
                  <div className="cfsize">可冲约8杯咖啡  4.875元/杯</div>
                  <div><span className="pricesyb">￥</span><span className="price">39</span><span className="date"><img src={require("../static/img/date.png")}/> 生产周期 : 7天</span></div>
                  <span className="area">星巴克合作基地制造商直供</span>
                  <ul className="guar">
                      <li><img src={require("../static/img/guarantee.png")}/> 7天无忧退货</li>
                      <li><img src={require("../static/img/guarantee.png")}/> 先行赔付</li>
                      <li><img src={require("../static/img/guarantee.png")}/> 超时赔偿</li>
                      <li><img src={require("../static/img/guarantee.png")}/> 顺丰包邮</li>
                      <img className="arrow" src={require("../static/img/arrow-right.png")}/>
                  </ul>
                  
                  <div className="chosen">
                       <span className="item">已选择：</span>
                       <span>2*30g,1件</span>
                       <img src={require("../static/img/arrow-right.png")}/>
                   </div>
                  <div className="my-address">
                      <span className="item">配送至：</span>
                      <img src={require("../static/img/address.png")}/>
                      <span>北京市 市辖区 东城区</span>
                      <p>可配送</p>
                      <img className="arrow" src={require("../static/img/arrow-right.png")}/>
                  </div>
            </div>
            
          
            <div className="de-detail">
                <p className="title"><span>详情</span></p>
                <ul>
                       <li><span className="item">净重</span><span className="deval">2*30g</span></li>
                       <li><span className="item">认证</span><span className="deval">中国有机认证,国际雨林联盟认证，星巴克CFAFE认证</span></li>
                       <li><span className="item">是否含糖</span><span className="deval">无糖</span></li>
                       <li><span className="item">产地</span><span className="deval">中国大陆云南省普洱市</span></li>
                       <li><span className="item">产品分量</span><span className="deval">可充约8杯纯正黑咖啡</span></li>
                       <li><span className="item">净重</span><span className="deval">2*30g</span></li>
                       <li><span className="item">净重</span><span className="deval">2*30g</span></li>
                       <li><span className="item">净重</span><span className="deval">2*30g</span></li>
                       <li><span className="item">净重</span><span className="deval">2*30g</span></li>
                       <li><span className="item">净重</span><span className="deval">2*30g</span></li>
                </ul>
                <div className="de-img">
                    <img src={require("../static/img/cofede-1.jpg")}/>
                    <img src={require("../static/img/cofede-2.jpg")}/>
                    <img src={require("../static/img/cofede-3.jpg")}/>
                    <img src={require("../static/img/cofede-4.jpg")}/>
                    <img src={require("../static/img/cofede-5.jpg")}/>
                </div>
            </div>
            <div className="de-footer">
                <div className="de-serv"><img src={require("../static/img/service.png")}/> <span>客服</span></div>
                <div className="de-sig">单独购买</div>
                <div className="de-inv de-sig">邀新人拼团￥108</div>
   
            </div>
        </div>
        <div className="deguar">
               <h3>服务说明</h3>
               <ul>
                    <li><div><img src={require("../static/img/guarantee.png")}/><span>7天无忧退货</span><p>根据国家七天无理由退货规范，为您办理退货退款，具体退货政策见商品详情页。</p></div></li>
                    <li><div><img src={require("../static/img/guarantee.png")}/><span>先行赔付</span><p>争议可申诉，申诉成功，立即退款。</p></div></li>
                    <li><div><img src={require("../static/img/guarantee.png")}/><span>超时赔偿</span><p>未按承诺时间发货，系统自动赔付（赔款金额为订单商品金额的30%，上限500元）。</p></div></li>
                    <li><div><img src={require("../static/img/guarantee.png")}/><span>顺丰包邮</span><p>运费由商家承担</p></div></li>
               </ul>
               <span className="finish">完成</span>
           </div>
           </div>

                        )
                    }
                }
                 
export default Detail;