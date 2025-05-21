import styles from './Card.module.scss';

interface ICard {
    data: {
        title: string;
        avatar: string;
        author: string;
        description: string;
    };
}

const Card = ({ data }: ICard) => {
    return (
        <div className={`${styles.card} df fdc jcsb`}>
            <div>
                <div className={`${styles.header} df aic`}>
                    <img src={data.avatar} alt='person avatar' />
                    <p>{data.author}</p>
                </div>
                <p className={styles.text}>{data.title}</p>
            </div>
            <p className={styles.footer}>{data.description}</p>
        </div>
    );
};

export default Card;
