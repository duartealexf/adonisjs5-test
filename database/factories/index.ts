import Factory from '@ioc:Adonis/Lucid/Factory'

import Card from 'App/Models/Card'
import List from 'App/Models/List'

export const CardFactory = Factory.define(Card, ({ faker }) => {
  return {
    name: faker.lorem.sentence(),
  }
})
  .relation('lists', () => ListFactory)
  .build()

export const ListFactory = Factory.define(List, ({ faker }) => {
  return {
    name: faker.lorem.sentence(),
    items: new Array(faker.random.number({ min: 1, max: 5 }))
      .fill(0)
      .map(() => faker.lorem.sentence()),
  }
})
  .relation('card', () => CardFactory)
  .build()
