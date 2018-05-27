import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const Loader = ({ width, height }) => (
  <div className={styles.backdrop}>
    <div className={styles.sk_fading_circle} style={{ width, height }}>
      <div className={`${styles.sk_circle1} ${styles.sk_circle}`} />
      <div className={`${styles.sk_circle2} ${styles.sk_circle}`} />
      <div className={`${styles.sk_circle3} ${styles.sk_circle}`} />
      <div className={`${styles.sk_circle4} ${styles.sk_circle}`} />
      <div className={`${styles.sk_circle5} ${styles.sk_circle}`} />
      <div className={`${styles.sk_circle6} ${styles.sk_circle}`} />
      <div className={`${styles.sk_circle7} ${styles.sk_circle}`} />
      <div className={`${styles.sk_circle8} ${styles.sk_circle}`} />
      <div className={`${styles.sk_circle9} ${styles.sk_circle}`} />
      <div className={`${styles.sk_circle10} ${styles.sk_circle}`} />
      <div className={`${styles.sk_circle11} ${styles.sk_circle}`} />
      <div className={`${styles.sk_circle12} ${styles.sk_circle}`} />
    </div>
  </div>
);

Loader.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

Loader.defaultProps = {
  width: 40,
  height: 40,
};

export default Loader;
