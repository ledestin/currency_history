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
    this.setupSeries()

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
      series: this.highchartsSeries()
    })
  }

  setupSeries() {
    this.series = Object.keys(this.data).reduce((memo, currency_name) => {
      memo[currency_name] = this.createSeries(currency_name)
      return memo
    }, {})
  }

  highchartsSeries() {
    return Object.keys(this.series).map((currency_name) => {
      return this.series[currency_name]
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
