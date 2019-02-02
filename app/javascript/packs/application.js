/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import $ from 'jquery'
import { Graph } from '../src/js/graph'
import { Settings } from '../src/js/settings'

$(function() {
  window.app = new App()
  console.log('Hello World from Webpacker')
})

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
