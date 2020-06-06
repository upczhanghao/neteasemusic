import axios from './axios'

// 封装各种接口请求

export const getBanner = () => axios.get('banner?type=2')
export const getPersonalized = () => axios.get('personalized?limit=6')
export const getNewAlbum = () => axios.get('album/newest')
export const getNewSong = () => axios.get('personalized/newsong')
export const getPlayList = (id) => axios.get('playlist/detail', id)
export const getAlbum = (id) => axios.get('album', id)
