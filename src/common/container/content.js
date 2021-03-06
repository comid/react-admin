import React from 'react'
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import Loadable from 'react-loadable'
import './content.less'

const { Content } = Layout

const Loading = () => <div>Loading...</div>

const Home = Loadable({
  loader: () => import('../pages/home'),
  loading: Loading,
})

const Follow = Loadable({
  loader: () => import('../pages/follow'),
  loading: Loading,
})

const Tools = Loadable({
  loader: () => import('../pages/tools/smallTools'),
  loading: Loading,
})

const Music = Loadable({
  loader: () => import('../pages/music'),
  loading: Loading,
})

const Todo = Loadable({
  loader: () => import('../pages/mock/todo'),
  loading: Loading,
})

const Album = Loadable({
  loader: () => import('../pages/gallary/album'),
  loading: Loading,
})

const Editor = Loadable({
  loader: () => import('../pages/tools/editor'),
  loading: Loading,
})

const TodoList = Loadable({
  loader: () => import('../pages/tools/todoList'),
  loading: Loading,
})

const Search = Loadable({
  loader: () => import('../pages/search'),
  loading: Loading,
})

const Waterfall = Loadable({
  loader: () => import('../pages/gallary/waterfall'),
  loading: Loading,
})

const Mock = Loadable({
  loader: () => import('../pages/mock/useMock'),
  loading: Loading,
})

const Contents = () => (
  <Content className="content" id="content">
    <Route path="/m/home" component={Home} />
    <Route path="/m/follow" component={Follow} />
    <Route path="/m/tools" component={Tools} />
    <Route path="/m/music" component={Music} />
    <Route path="/m/todo" component={Todo} />
    <Route path="/m/album" component={Album} />
    <Route path="/m/editor" component={Editor} />
    <Route path="/m/todoList" component={TodoList} />
    <Route path="/m/searchEngine" component={Search} />
    <Route path="/m/waterfall" component={Waterfall} />
    <Route path="/m/mock" component={Mock} />
  </Content>
)

export default Contents
