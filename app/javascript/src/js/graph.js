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
    this.series = { usd: this.usdSeries(), eur: this.eurSeries(),
      aud: this.audSeries() }

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
        this.series.usd,
        this.series.eur,
        this.series.aud
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

  eurSeries() {
    return {
      type: 'line',
      id: 'series-eur',
      name: 'BRL to EUR',
      data: this.data.eur
    }
  }

  audSeries() {
    return {
      type: 'line',
      id: 'series-aud',
      name: 'BRL to AUD',
      data: this.data.aud
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
