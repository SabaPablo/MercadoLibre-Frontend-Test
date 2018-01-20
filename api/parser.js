const author = {
  name: 'Rodrigo',
  lastName: 'Lemos'
}

const parseItemsResponse = ({ results, filters }) => {
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
    pathFromRoot.map(category => categories.push(category.name))
  }

  return { author, categories, items }
}

const parseItemDetailResponse = ({ itemDetail, itemDescription }) => {
  // Item Detail structure that fits with API details.
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

  return { author, item }
}

module.exports = { parseItemsResponse, parseItemDetailResponse }
