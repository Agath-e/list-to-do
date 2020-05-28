/* eslint-disable react/prop-types */

import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {
  static propTypes = {
    titleCard: PropTypes.node,
  }

  render () {
    const {titleCard} = this.props;
    return (
      <section className={styles.component}>
        <h4>{titleCard}</h4>
      </section>
    );
  }
}

export default Card;