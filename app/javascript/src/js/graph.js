import Highcharts from 'highcharts'

class Graph {
  constructor(containerId, data) {
    this.containerId = containerId
    this.data = data
    this.init()
  }

  init() {
    this.chart = Highcharts.chart(this.containerId, {
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
      series: [
        this.usdSeries()
      ]
    })
  }

  usdSeries() {
    return {
      type: 'line',
      id: 'series-usd',
      name: 'BRL to USD',
      data: this.data.usd
    }
  }

  toggleUSD() {
    const series = this.chart.get('series-usd')
    if (series) {
      series.remove()
      return
    }

    this.chart.addSeries(this.usdSeries())
  }
}

export { Graph }
