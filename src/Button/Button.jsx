import styles from './Button.module.css';

function Button({ onClick }) {
    return (
        <button className={styles.button} onClick={onClick}>
            Click me
        </button>
    );
}

export default Button;