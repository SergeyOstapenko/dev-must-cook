import styles from './Section.module.scss'

export const Section = ({ title, children, right}) => {
const className= right ? styles.rightTitle : styles.leftTitle;


  return (
    <section className={styles.section}>
      <div>
        {title && <h2 className={className}>{title}</h2>}
        {children}
      </div>
    </section>
  );
};

// `${left ? ${styles.left} : ${styles.right}}`