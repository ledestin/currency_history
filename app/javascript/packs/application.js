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

$(function() {
  let data = {
    usd: [
      [1548912072000, 2], [1548915579000, 5], [1548919172000, 3],
      [1548922785000, 5]
    ]
  }
  window.chart = new Graph('graph_container', data)
  console.log('Hello World from Webpacker')
})
