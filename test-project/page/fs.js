/* global Page */
import { TestSreen } from '../lib/TestScreen'

Page({
  onInit () {
    new TestSreen().start({})
  }
})
