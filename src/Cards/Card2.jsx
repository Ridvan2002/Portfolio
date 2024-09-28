import styles from './Card.module.css'
import Button2 from '../Button/Button2.jsx'

function Card2() {
    return (
        <div className={styles.card}>
            <img className = {styles['card2-image']} src = '/assets/realestate.webp' alt = "realestate"/>
            <h1 className={styles.cardTitle}>Real Estate Website</h1>
            <br />
            <Button2/>
            <p className={styles.cardText}>This is the description for the Website</p>
        </div>
    );
}

export default Card2