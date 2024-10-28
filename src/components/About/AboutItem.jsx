import React from 'react';
import PropTypes from 'prop-types';
import styles from './AboutItem.module.css';

export function AboutItem({ icon, title, description }) {
  return (
    <li className={ styles.aboutItem }>
      <img src={ icon } alt={ `${title} icon` } />
      <div className={ styles.aboutItemText }>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
}

AboutItem.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
