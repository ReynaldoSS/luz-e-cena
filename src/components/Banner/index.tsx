import styles from './Banner.module.css';
import Titulos from './Titulos';
type BannerProps = {
    src: string;
    alt: string;
}
const Banner = ({ src, alt }: BannerProps) => {
    return (
        <div>
            <img src={src} alt={alt} className={styles.banner}>
            </img>
            <Titulos primaryText="Onde a realidade" secondaryText="encontra a fantasia!" />
        </div>
    )
}

export default Banner
