
import styles from '../Titulos/Titulos.module.css';
type TitulosProps = {
    primaryText: string;
    secondaryText: string;
}
const Titulos = ({ primaryText, secondaryText }: TitulosProps) => {
    return (
        <div className={styles.titulosContainer}>
            <h1 className={styles.primaryText}>{primaryText}</h1>
            <h1 className={styles.secondaryText}>{secondaryText}</h1>
        </div>
    )
}

export default Titulos
