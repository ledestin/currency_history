import $ from 'jquery'
import { Settings } from './settings'
import { Graph } from './graph'

class App {
  constructor() {
    Settings.load()
    this.activateButton(this.userSelectedOrDefaultButton())

    const data = {
      usd: this.getSeriesData('usd'),
      eur: this.getSeriesData('eur'),
      aud: this.getSeriesData('aud')
    }
    this.graph = new Graph('graph_container', data, Settings.selectedCurrency)
  }

  getSeriesData(name) {
    return $('#graph_container').data(name)
  }

  activateButton(button) {
    $('button').removeClass('active')
    $(button).addClass('active')
    Settings.selectCurrency(button.id)
  }

  userSelectedOrDefaultButton() {
    return $(`#${Settings.selectedCurrency}`)[0]
  }
}

export { App }
