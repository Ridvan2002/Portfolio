import styles from './Card.module.css';
// import FileManager from '../assets/FileManager.png';
import Button from '../Button/Button.jsx';

function Card1() {
    const handleButtonClick = () => {
        alert('Button clicked!');
    };

    return (
        <div className={styles.card}>
            <img className={styles['card-image']} src='/assets/FileManager.png' alt="File Manager" />
            <h1 className={styles['card-title']}>
                <a href="https://github.com/Ridvan2002/Andriod_Task_Manager/blob/ed101d95285bc30272e890e6f5d450273818112a/FILE_MANAGER_PREVIEW.mp4" target="_blank" rel="noopener noreferrer">
                    Android Mobile Application
                </a>
            </h1>
            <p className={styles['card-text']}>This is the description for the Application</p>
            <div className={styles['button-container']}>
                <Button onClick={handleButtonClick} />
            </div>
        </div>
    );
}

export default Card1;
