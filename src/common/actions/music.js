import {createAction} from 'redux-actions'
import {music} from 'api'
import {createAjaxAction} from 'utils'


export const requestMusicList = createAction('requestMusicList')
export const receiveMusicList = createAction('receiveMusicList')
/**
 * music : api/下的music.js
 *        中的musicList方法
 */
export const fetchMusicList = createAjaxAction(music.musicList, requestMusicList, receiveMusicList)
