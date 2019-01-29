import { handleActions } from 'redux-actions'

export const musicList = handleActions({
  'requestMusicList'(state, action) {
      console.log('请求列表：',action)
    return { ...state, loading: true }
  },
  'receiveMusicList'(state, action) {
    const { res } = action.payload
      console.log('返回列表：',res.song_list)
    return { data: res.song_list, loading: false }
  }
}, {})
