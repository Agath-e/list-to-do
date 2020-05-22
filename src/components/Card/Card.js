import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {
  static propTypes = {
    titleCard: PropTypes.node,
  }

  render () {
    return (
      <section className={styles.component}>
          <h4>{this.props.titleCard}</h4>
      </section>
    )
  }
}

export default Card;