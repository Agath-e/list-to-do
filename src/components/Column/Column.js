/* eslint-disable react/prop-types */

import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
//import Card from '../Card/Card';
//import {settings} from '../../data/dataStore';
//import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';

class Column extends React.Component {
 
  static propTypes = {
    titleCard: PropTypes.node,
    cards: PropTypes.array,
    name: PropTypes.node,
  }

  render() {
    const {title, icon} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon className={icon} />
          </span>
          {title}
        </h3>
        {/*<div className={styles.cards}>
          {this.state.cards.map(({key, ...cardProps}) => (
            <Card key={key} {...cardProps} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
          </div>*/}
      </section>
    );
  }
}

export default Column;