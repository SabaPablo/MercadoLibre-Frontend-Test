import React, { Component } from 'react'
import { connect } from 'react-redux'
import MDSpinner from 'react-md-spinner'
import ItemDetail from '../components/ItemDetail'
import { withRouter } from 'react-router-dom'

import { fetchItemDetail } from '../redux/modules/item'

class ItemDetailResult extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch, match: { params } } = this.props

    dispatch(fetchItemDetail(params.id))
  }

  render() {
    const { isFetchingData } = this.props.result

    return (
      <div>
        {isFetchingData ? (
          <MDSpinner singleColor="#999999" />
        ) : (
          <ItemDetail result={this.props.result} />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    result: state.item
  }
}

export default withRouter(connect(mapStateToProps)(ItemDetailResult))