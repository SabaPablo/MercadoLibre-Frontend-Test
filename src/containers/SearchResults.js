import React, { Component } from 'react'
import { connect } from 'react-redux'
import MDSpinner from 'react-md-spinner'
import ListItems from '../components/ListItems'

class SearchResults extends Component {
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

export default connect(mapStateToProps)(SearchResults)
