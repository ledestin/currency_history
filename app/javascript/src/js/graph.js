import Highcharts from 'highcharts'

class Graph {
  constructor(containerId, data) {
    this.containerId = containerId
    this.data = data
    this.init()
  }

  init() {
    Highcharts.chart(this.containerId, {
      title: {
        text: 'BRL to USD, EUR and AUD'
      },
      xAxis: {
          type: 'datetime'
      },
      yAxis: {
          title: {
              text: 'Exchange rate'
          }
      },
      series: [{
        type: 'line',
        name: 'BRL to USD',
        data: this.data
      }]

    })
  }
}

export { Graph }
