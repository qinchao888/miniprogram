import { list } from '../../mock/mock.js'
Page({
  data: {
    list: [],
    isLoading: false, // 正在加载
    hasQuery: false, // 已发起请求
    noMoreData: false, // 暂无数据
    isGettingData: false // 正在请求数据
  },
  onLoad () {
    console.log('list', list)
    this.onReachBottom()
  },
  onReachBottom () {
    if (this.data.isGettingData || this.data.noMoreData) return
    this.setData({
      isLoading: true,
      isGettingData: true
    })
    setTimeout(() => {
      if (this.data.list.length >= 30) {
        this.setData({
          noMoreData: true
        })
      } else {
        this.setData({
          list: this.data.list.concat(list)
        })
      }
      this.setData({
        hasQuery: true,
        isLoading: false
      })
      setTimeout(() => {
        this.setData({
          isGettingData: false
        })
      })
    }, 1000)
  }
})