import styles from './Card.module.css';
// import profilePic from '/assets/Ridvan.png'

function Card() {
    return (
        <div className={styles.card}>
            <div className={styles['card-image-container']}>
                <img className={styles['card-image']} src='/assets/Ridvan.png' alt="profile picture" />
            </div>
            <div className={styles['card-content']}>
                <h2 className={styles['card-title']}>Education
                </h2>
                <p className={styles['card-text']}>
                Georgia State University, B.Sc. in Computer Science

Associate of Science in Core Curriculum (ASCC)
                 </p>
            </div>
        </div>
    );
}

export default Card;
