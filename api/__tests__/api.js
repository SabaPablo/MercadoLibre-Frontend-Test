const fs = require('fs')
const parser = require('../parser')

describe('Parser of Items from MELI API', () => {
  // Mock response from MELI API of Items
  const data = JSON.parse(
    fs.readFileSync('./api/__mockData__/items.json', 'utf8')
  )

  test('Can map data from MELI API with Internal API', () => {
    const { results, filters } = data
    const parsedResult = parser.parseItemsResponse({ results, filters })

    expect(parsedResult.author).toEqual({ name: 'Rodrigo', lastName: 'Lemos' })
    expect(parsedResult.categories).toEqual([
      'Celulares y Teléfonos',
      'Celulares y Smartphones',
      'iPhone'
    ])
    expect(parsedResult.items).toEqual([
      {
        id: 'MLA701558492',
        title: 'Celular Apple Iphone 6 16gb + Protector + Garantia + Local',
        price: {
          currency: 'ARS'
        },
        picture:
          'http://mla-s1-p.mlstatic.com/642433-MLA26243121762_102017-I.jpg',
        condition: 'used',
        free_shipping: false
      },
      {
        id: 'MLA694937054',
        title: 'Iphone 5s 16gb Lte 4g + 2 Fundas + Templado + Envio Gratis!',
        price: {
          currency: 'ARS'
        },
        picture:
          'http://mla-s1-p.mlstatic.com/607790-MLA26517012096_122017-I.jpg',
        condition: 'new',
        free_shipping: true
      },
      {
        id: 'MLA702591859',
        title: 'Celular Apple Iphone 6 16gb + Protector + Garantia + Envio',
        price: {
          currency: 'ARS'
        },
        picture:
          'http://mla-s2-p.mlstatic.com/830568-MLA26243190607_102017-I.jpg',
        condition: 'used',
        free_shipping: true
      }
    ])
  })

  test('If there are no categories, there will be an empty array of categories as result', () => {
    const { results } = data
    const filters = [] // No categories
    const parsedResult = parser.parseItemsResponse({ results, filters })

    expect(parsedResult.author).toBeDefined()
    expect(parsedResult.items).toBeDefined()
    expect(parsedResult.categories).toBeDefined()
    expect(parsedResult.categories).toEqual([])
  })
})

describe('Parser of Item Details from MELI API', () => {
  // Mock response from MELI API of Items
  const itemDetail = JSON.parse(
    fs.readFileSync('./api/__mockData__/itemDetail.json', 'utf8')
  )
  const itemDescription = JSON.parse(
    fs.readFileSync('./api/__mockData__/itemDetail.json', 'utf8')
  )

  test('Can map MELI Item Detail/Description API with the internal API', () => {
    const parsedResult = parser.parseItemDetailResponse({
      itemDetail,
      itemDescription
    })

    expect(parsedResult.author).toEqual({ name: 'Rodrigo', lastName: 'Lemos' })
    expect(parsedResult.item.id).toBe('MLA701558492')
    expect(parsedResult.item.title).toBe(
      'Celular Apple Iphone 6 16gb + Protector + Garantia + Local'
    )
  })
})
