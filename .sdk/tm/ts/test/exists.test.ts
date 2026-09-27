
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { LinearSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = LinearSDK.test()
    equal(testsdk instanceof LinearSDK, true,
      'LinearSDK.test() must return a client synchronously')
  })

})
