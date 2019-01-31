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
  let data = [[10, 2], [20, 5], [30, 3], [40, 5]]
  new Graph('graph_container', data)
  console.log('Hello World from Webpacker')
})
