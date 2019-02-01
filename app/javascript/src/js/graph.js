import $ from 'jquery'
import Highcharts from 'highcharts'
import moment from 'moment'
import momenttz from 'moment-timezone'

function setupHighchartsTzSupport() {
  window.moment = moment
}

$(function() {
  setupHighchartsTzSupport()
})

class Graph {
  constructor(containerId, data) {
    this.containerId = containerId
    this.data = data
    this.init()
  }

  init() {
    this.series = { usd: this.usdSeries() }

    this.chart = Highcharts.chart(this.containerId, {
      title: {
        text: 'BRL to USD, EUR and AUD'
      },
      time: {
        timezone: momenttz.tz.guess()
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
        this.series.usd
      ]
    })
  }

  toggleSeries(name) {
    if (this.isSeriesCharted(name)) {
      this.removeSeriesFromChart(name)
    } else {
      this.addSeriesToChart(name)
    }
  }

  removeSeriesFromChart(name) {
    this.chart.get(`series-${name}`).remove()
  }

  addSeriesToChart(name) {
    this.chart.addSeries(this.series[name])
  }

  isSeriesCharted(name) {
    return !!this.chart.get(`series-${name}`)
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
    this.toggleSeries('usd')
  }
}

export { Graph }
