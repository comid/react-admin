import React from 'react'
import { Tabs } from 'antd'
import Age from './components/age'
import Bmi from './components/bmi'
import Salary from './components/salary'
import House from './components/house'
import './index.less'

const { TabPane } = Tabs

const Tools = () => {
  return (
    <div>
      <Tabs defaultActiveKey="gzm">
        <TabPane tab="工资帽" key="gzm"><Salary /></TabPane>
        <TabPane tab="房租" key="fz"><House /></TabPane>
        <TabPane tab="身体指数" key="stzs"><Bmi /></TabPane>
        <TabPane tab="多大了" key="ddl"><Age /></TabPane>
        <TabPane tab="施工中" key="zgz" disabled>施工中</TabPane>
      </Tabs>
    </div>
  )
}

export default Tools
