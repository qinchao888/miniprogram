Component({
  properties: {
    isLoading: { // （必填）是否正在加载
      type: Boolean,
      value: false
    },
    hasQuery: { // （必填）是否发起过请求
      type: Boolean,
      value: true
    },
    noMoreData: { // （必填）没有更多数据
      type: Boolean,
      value: false
    },
    length: { // （必填）数据列表总数
      type: Number,
      value: 0
    },
    limit: { // 数据列表数大于limit时显示我是有底线
      type: Number,
      value: 5
    },
    height: { // px（已使用区域的高度）
      type: [String, Number],
      value: 0
    },
    loadingText: {
      type: String,
      value: '正在加载'
    },
    nodataImg: { // 暂无数据图片
      type: String,
      value: 'https://oss.qianbaocard.com/20190731/3e9c454a6e3f46db903fe407a98add3f.png'
    },
    nodataText: { // 暂无数据文本
      type: String,
      value: '暂无数据'
    },
    imgWidth: { // 图片宽度
      type: [String, Number],
      value: 240
    },
    imgHeight: { // 图片高度
      type: [String, Number],
      value: 120
    },
    unit: { // 传入的height高度的单位
      type: String,
      value: 'rpx'
    }
  },
  data: {
    nodataH: wx.getSystemInfoSync().windowHeight
  },
  observers: {
    height (h) {
      this.calculate(h)
    }
  },
  methods: {
    calculate (height) { // 计算高度
      const rate = 750 / wx.getSystemInfoSync().windowWidth
      const h = wx.getSystemInfoSync().windowHeight
      let nodataH = ''
      if (this.data.unit === 'px') { // px
        nodataH = h - height
      } else { // rpx
        nodataH = h - height / rate
      }
      this.setData({
        nodataH
      })
    }
  }
})
/** 案例：
 * <load-more loading-text="正在加载..." is-loading="{{isLoading}}" has-query="{{hasQuery}}" length="{{orderList.length}}" no-more-data="{{noMoreData}}" nodata-img="http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noAddress-26d570cefa.png" imgWidth="{{372}}" imgHeight="{{372}}" nodata-text="{{nodataText}}" height="{{184}}"></load-more>
 */