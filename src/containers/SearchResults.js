import React, { Component } from 'react'
import { connect } from 'react-redux'
import MDSpinner from 'react-md-spinner'
import ListItems from '../components/ListItems'
import { withRouter } from 'react-router-dom'
import qs from 'query-string'

import { fetchItems } from '../redux/modules/search'

class SearchResults extends Component {
  componentDidMount() {
    const { dispatch, result: { searchTerm } } = this.props

    // Only when you navigate directly to /items?search=
    // without using the search form.
    if (!searchTerm) {
      const query = qs.parse(this.props.location.search)
      dispatch(fetchItems(query.search || ''))
    }
  }

  render() {
    const { isFetchingData } = this.props.result

    return (
      <section className="results-section">
        {isFetchingData ? (
          <MDSpinner singleColor="#999999" />
        ) : (
          <ListItems result={this.props.result} />
        )}
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    result: state.search
  }
}

export default withRouter(connect(mapStateToProps)(SearchResults))
