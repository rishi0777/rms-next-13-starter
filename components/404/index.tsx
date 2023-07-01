import styles from './index.module.scss';

const Custom404 = () => (
  <div className={styles.container}>
    <div className={`${styles.heading}`}>404</div>
    <div className={styles.vl} />
    <div className={styles.desc}>This page could not be found</div>
  </div>
);

export default Custom404;
