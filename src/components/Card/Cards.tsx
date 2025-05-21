import styles from './Card.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './Card';
import 'swiper/swiper-bundle.css';

const cards = [
    {
        id: 1,
        title: '“Faith is the bird that feels the light and sings when the dawn is still dark.”',
        avatar: '/image/avatar/1.png',
        author: 'Rabindranath Tagore',
        description:
            'British Indian polymath who worked as a poet, writer, playwright, composer, philosopher, social reformer, and painter of the Bengal Renaissance',
    },
    {
        id: 2,
        title: '“Faith is the force of life. If a man lives, he must believe in something.”',
        avatar: '/image/avatar/2.png',
        author: 'Leo Tolstoy',
        description: 'Russian writer. He is regarded as one of the greatest and most influential authors of all time',
    },
    {
        id: 3,
        title: '“Take the first step in faith. You don’t have to see the whole staircase, just take the first step.”',
        avatar: '/image/avatar/3.png',
        author: 'Martin Luther King Jr',
        description:
            'American Baptist minister, activist, and political philosopher who was one of the most prominent leaders in the civil rights movement from 1955 until his assassination in 1968.',
    },
    {
        id: 4,
        title: '“Jump off the cliff and build your wings on the way down.”',
        avatar: '/image/avatar/4.png',
        author: 'Ray Bradbury',
        description:
            'One of the most celebrated 20th-century American writers, he worked in a variety of genres, including fantasy, science fiction, horror, mystery, and realistic fiction',
    },
    {
        id: 5,
        title: '“All our dreams can come true, if we have the courage to pursue them.”',
        avatar: '/image/avatar/5.png',
        author: 'Walt Disney',
        description:
            'A pioneer of the American animation industry, he introduced several developments in the production of cartoons. As a film producer, he holds the record for most Academy Awards earned and nominations by an individual',
    },
    {
        id: 6,
        title: '“Believe that life is worth living, and your belief will help create the fact.”',
        avatar: '/image/avatar/6.png',
        author: 'William James',
        description:
            'The first educator to offer a psychology course in the United States, he is considered to be one of the leading thinkers of the late 19th century, one of the most influential philosophers and is often dubbed the "father of American psychology."',
    },
    {
        id: 7,
        title: '“You have to trust that the dots will somehow connect in your future. You have to trust in something — your gut, destiny, life, karma, whatever.”',
        avatar: '/image/avatar/7.png',
        author: 'Steve Jobs',
        description:
            'Steve Jobs was an American entrepreneur, visionary designer, and co-founder of Apple Inc. Renowned for blending technology with elegant, user-centered design, he helped create groundbreaking products like the Macintosh, iPod, iPhone, and iPad, reshaping personal computing, music, and mobile industries.',
    },
    {
        id: 8,
        title: '“Faith is the force of life. If a man lives, he must believe in something.”',
        avatar: '/image/avatar/8.png',
        author: 'Mahatma Gandhi',
        description: `Indian lawyer, anti-colonial nationalist, and political ethicist who employed nonviolent resistance to lead the successful campaign for India's independence from British rule`,
    },
    {
        id: 9,
        title: '“The future belongs to those who believe in the beauty of their dreams.”',
        avatar: '/image/avatar/9.png',
        author: 'Eleanor Roosevelt',
        description: 'American political figure, diplomat, and activist. She was the longest-serving first lady of the United States',
    },
];

const Cards = () => {
    return (
        <div className={styles.cards}>
            <div className={styles.h2}>
                <h2>
                    Famous people <br /> have their beliefs
                </h2>
                <p>Leo Tolstoy, Martin Luther King Jr,</p>
                <p>Ray Bradbury Walt Disney and other</p>
            </div>
            <div className={styles.blocks}>
                <div className={styles.container}>
                    <div className={styles.column1}>
                        <Card data={cards[0]} />
                        <Card data={cards[1]} />
                        <Card data={cards[2]} />
                        <Card data={cards[6]} />
                    </div>
                    <div className={styles.column2}>
                        <Card data={cards[3]} />
                        <Card data={cards[4]} />
                        <Card data={cards[5]} />
                        <Card data={cards[7]} />
                        <Card data={cards[8]} />
                    </div>
                    <div className={styles.column3}>
                        <Card data={cards[6]} />
                        <Card data={cards[7]} />
                        <Card data={cards[8]} />
                    </div>
                </div>
            </div>
            <div className={styles.swiper}>
                <Swiper
                    breakpoints={{
                        320: { slidesPerView: 1.5, spaceBetween: 16 },
                        600: { slidesPerView: 1.5, spaceBetween: 20 },
                        900: { slidesPerView: 2.3, spaceBetween: 24 },
                        1200: { slidesPerView: 3.3, spaceBetween: 32 },
                    }}
                    loop={true}
                    slidesPerGroup={1}
                >
                    {cards.map(card => (
                        <SwiperSlide key={card.id} className={styles.swiperSlide}>
                            <Card data={card} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Cards;
