let instance

class Databus {
  constructor() {
    if (!instance) {
      instance = this
      this.lazyLoad = {
        default: ''
      }
      this.watermarker = {
        width: 200,
        height: 150,
        font: '16px Microsoft YaHei',
        textColor: 'rgba(180, 180, 180, 0.3)',
        rotate: -30,
        textAlign: 'center',
        textBaseline: 'center'
      }
      this.permission = {
        list: ['1', '2', '3', '4']
      }
    }
    return instance
  }
}

export default Databus
