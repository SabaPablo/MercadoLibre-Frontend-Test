const express = require('express')
const axios = require('axios')

const router = express.Router()

// Axios instance for MercadoLibre API Requests
const meliRequest = axios.create({
  baseURL: 'https://api.mercadolibre.com'
})

const author = {
  name: 'Rodrigo',
  lastName: 'Lemos'
}

router.get('/items', async ({ query: { q = '' } }, res, next) => {
  try {
    const { data: { results, filters } } = await meliRequest.get(
      `sites/MLA/search?q=${q}`
    )

    // Map Meli API results [] to internal app API array.
    const items = results.map(result => {
      return {
        id: result.id,
        title: result.title,
        price: {
          currency: result.currency_id
        },
        picture: result.thumbnail,
        condition: result.condition,
        free_shipping: result.shipping.free_shipping
      }
    })

    // Build json categories structure from path_from_root API array.
    const categories = []

    if (filters.length) {
      const { path_from_root: pathFromRoot } = filters[0].values[0]
      categories = pathFromRoot.map(category => category.name)
    }

    res.send({ author, categories, items })
  } catch (err) {
    next(err)
  }
})

router.get('/items/:id', async ({ params: { id } }, res, next) => {
  try {
    const [{ data: itemDetail }, { data: itemDescription }] = await Promise.all(
      [
        meliRequest.get(`items/${id}`),
        meliRequest.get(`items/${id}/description`)
      ]
    )

    const item = {
      id: itemDetail.id,
      title: itemDetail.title,
      price: {
        currency: itemDetail.currency_id
      },
      picture: itemDetail.pictures.length ? itemDetail.pictures[0].url : '',
      condition: itemDetail.condition,
      free_shipping: itemDetail.shipping.free_shipping,
      sold_quantity: itemDetail.sold_quantity,
      description: itemDescription.plain_text
    }

    res.send({ author, item })
  } catch (err) {
    next(err)
  }
})

module.exports = router
