import styles from './Card.module.css'


function Card3() {
    return (
        <div className={styles.card}>
            <h1 className={styles.cardTitle}>Python Network Analyzer</h1>
            <p className={styles.cardText}>This is the description for the Application</p>
        </div>
    );
}

export default Card3