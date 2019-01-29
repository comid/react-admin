import React from 'react'
import {rdColor} from 'diana'
import './index.less'

export default class Follow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            col: '#666',
        }
    }

    // 组件渲染后，500毫秒改变一次组件颜色
    componentDidMount() {
        this.interval = setInterval(this.getRandomColor, 500)
    }

    // 组件将要死亡时清除计时器
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    getRandomColor = () => {
        this.setState({
            col: rdColor(),
        })
    }

    render() {
        const {col} = this.state
        return (
            <div className="animated flip ani-box">
                <div style={{color: col}}>
                    空白翻转
                </div>
            </div>
        )
    }
}
