import test from 'japa'

import Card from 'App/Models/Card'
import { CardFactory } from 'Database/factories'

test.group('Card model', () => {
  test('instance test', (assert) => {
    const sut = CardFactory.make()
    assert.instanceOf(sut, Card)
  })
})
