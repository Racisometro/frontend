import styles from './Background.module.css';

const Background = () => {
    const srcGoldFace = `${process.env.PUBLIC_URL}/assets/gold-face.svg`;
    const srcSilverFace = `${process.env.PUBLIC_URL}/assets/face.svg`;

    return (
        <div className={styles.background}>
            <img src={srcGoldFace} id={styles["top-face"]}/>
            <img src={srcSilverFace} id={styles["left-bottom-face"]} />
            <img src={srcSilverFace} id={styles["right-bottom-face"]} />
        </div>
    )
}

export default Background;