import $ from 'jquery'
import Highcharts from 'highcharts'
import Moment from 'moment'
import Momenttz from 'moment-timezone'

function setupHighchartsTzSupport() {
  window.moment = Moment
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
    this.setupSeries()

    this.graph = Highcharts.chart(this.containerId, {
      title: {
        text: 'BRL to USD, EUR and AUD'
      },
      time: {
        timezone: Momenttz.tz.guess()
      },
      xAxis: {
          type: 'datetime'
      },
      yAxis: {
          title: {
              text: 'Exchange rate'
          }
      },
      series: Object.values(this.series)
    })
  }

  setupSeries() {
    this.series = Object.keys(this.data).reduce((memo, currency_name) => {
      memo[currency_name] = this.createSeries(currency_name)
      return memo
    }, {})
  }

  toggleSeries(name) {
    if (this.isSeriesCharted(name)) {
      this.removeSeriesFromChart(name)
    } else {
      this.addSeriesToChart(name)
    }
  }

  removeSeriesFromChart(name) {
    this.graph.get(`series-${name}`).remove()
  }

  addSeriesToChart(name) {
    this.graph.addSeries(this.series[name])
  }

  isSeriesCharted(name) {
    return !!this.graph.get(`series-${name}`)
  }

  createSeries(name) {
    return {
      type: 'line',
      id: `series-${name}`,
      name: `BRL to ${name.toUpperCase()}`,
      data: this.data[name]
    }
  }

  toggleUSD() {
    this.toggleSeries('usd')
  }

  toggleEUR() {
    this.toggleSeries('eur')
  }

  toggleAUD() {
    this.toggleSeries('aud')
  }
}

export { Graph }
