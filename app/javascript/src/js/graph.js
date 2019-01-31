import Highcharts from 'highcharts'

class Graph {
  constructor(containerId) {
    this.containerId = containerId
    this.init()
  }

  init() {
    Highcharts.chart(this.containerId, {
      title: 'BRL to USD, EUR and AUD'
    })
  }
}

export { Graph }
