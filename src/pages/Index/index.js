import React, { Component } from 'react'
import {Carousel} from 'antd-mobile'
import axios from 'axios'

export default class Index extends Component {
    state = {
        imgHeight: 176,
        swipers:[], // 轮播图数据
        isplay: false
    }
    // 获取轮播图数据
    async getSwipers(){
        let res=await axios.get('http://api-haoke-dev.itheima.net/home/swiper')
        console.log(res);
        this.setState({
            swipers:res.data.body
        },()=>{
            this.setState({
            isplay:true
            })
        })
        
    }
    componentDidMount() {
        // simulate img loading
        // 获取轮播图数据
        this.getSwipers()
    }
    //渲染轮播图函数
    renderSwipers(){
        return  this.state.swipers.map(val => (
            <a
            key={val.id}
            href="http://www.alipay.com"
            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
            <img
                src={`http://api-haoke-dev.itheima.net${val.imgSrc}`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
                this.setState({ imgHeight: 'auto' });
                }}
            />
            </a>
        ))
    }
    render() {
        return (
            <div className="index">
                首页
                {/* -----------------轮播图 */}
                    <Carousel
                        autoplay={this.state.isplay}
                        infinite
                        >
                        {this.renderSwipers()}
                    </Carousel>
            </div>
        )
    }
}
