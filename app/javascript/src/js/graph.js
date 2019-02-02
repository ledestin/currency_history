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
  constructor(containerId, data, selectedCurrency) {
    this.containerId = containerId
    this.data = data
    this.selectedCurrency = selectedCurrency
    this.init()
  }

  init() {
    this.setupSeries()

    this.graph = Highcharts.chart(this.containerId, {
      title: {
        text: 'BRL to USD or EUR or AUD'
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
      series: [this.series[this.selectedCurrency]]
    })
  }

  setupSeries() {
    this.series = Object.keys(this.data).reduce((memo, currency_name) => {
      memo[currency_name] = this.createSeries(currency_name)
      return memo
    }, {})
  }

  showSeries(name) {
    if (this.isSeriesCharted(name)) return

    while(this.graph.series.length > 0)
      this.graph.series[0].remove(true);
    this.addSeriesToChart(name)
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

  showUSD() {
    this.showSeries('usd')
  }

  showEUR() {
    this.showSeries('eur')
  }

  showAUD() {
    this.showSeries('aud')
  }
}

export { Graph }
