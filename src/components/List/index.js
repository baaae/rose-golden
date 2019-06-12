import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types'

import ListPresentation from "./presentation";

/**
 * Implement with a class component and then try doing the same thing but with hooks.
 * TODO: add propTypes
 */

export class List extends React.Component {
  allComplexes = null
  state = {
    complexes: null
  }

  static onFilterUpdate(self, settings) {
    const fieldsThatMustBeTruthy = Object.keys(settings).filter((name) => settings[name])

    const nextComplexes = self.allComplexes.filter((complex) => fieldsThatMustBeTruthy.every((name) => complex[name] === true))
    // TODO: compare nextStae to previous state and update only if they differ
    self.setState({
      complexes: nextComplexes
    })
  }

  constructor(props) {
    super(props)

    this.onFilterUpdate = List.onFilterUpdate.bind(null, this)

    const { data: { postgres: { allComplexesList }}} = props
    this.state.complexes = allComplexesList
    this.allComplexes = allComplexesList
  }

  render() {
    return <ListPresentation complexes={this.state.complexes} onFilterUpdate={this.onFilterUpdate}/>
  }
}


// TODO: use PropTypes.shape instead to be more explicit about what we expect
List.propTypes = {
  data: PropTypes.object.isRequired
}

export default () => (
  <StaticQuery
    query={
      graphql`
        query getAllComplexesList {
          postgres {
  					allComplexesList {
  					  id
              name
              hasPrivateRoom
              hasMusicRoom
              hasWasher
              isHouse
  					}
          }
        }
      `}

    render={data => <List data={data} />}
  />
)
