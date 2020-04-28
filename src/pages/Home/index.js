import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
import {Route} from 'react-router-dom'
import Index from '../Index'
import Houselist from '../Houselist'
import News from '../News'
import Profile from '../Profile'
import '../../assets/fonts/iconfont.css'
import './home.css'
// tabbar数据
const tabItems = [{
    title: '首页',
    icon: 'icon-ind',
    path: '/home/index'
  },
  {
    title: '找房',
    icon: 'icon-findHouse',
    path: '/home/houselist'
  },
  {
    title: '资讯',
    icon: 'icon-infom',
    path: '/home/news'
  },
  {
    title: '我的',
    icon: 'icon-my',
    path: '/home/profile'
  }]
export default class Home extends Component {
    state={
        selectedTab: '/home/index',
        hidden: false,
        fullScreen: false,
    }
    renderTabBarItem() {
        return tabItems.map(item=>{
            return <TabBar.Item
            title={item.title}
            key={item.title}
            icon={<div className={`iconfont ${item.icon}`}></div>}
            selectedIcon={<div className={`iconfont ${item.icon}`}></div>
            }
            selected={this.state.selectedTab === item.path}
            onPress={() => {
                this.props.history.push(item.path)
            this.setState({
                selectedTab: item.path
            });
            }}
        >
        </TabBar.Item>
        })
    }
    render() {
        return (
            <div>
               我是home 
               {/* route页面 */}
               <Route path="/home/index" component={Index}></Route>
               <Route path="/home/houselist" component={Houselist}></Route>
               <Route path="/home/news" component={News}></Route>
               <Route path="/home/profile" component={Profile}></Route>

               {/* -----------tabbar栏 */}
             <TabBar
                    unselectedTintColor="#bbb"
                    tintColor="#21b97a"
                    barTintColor="white"
                    hidden={this.state.hidden}
                    noRenderContent={true} 
                    >
                   {this.renderTabBarItem()}
              </TabBar>
            </div>
            
           
        )
    }
}
