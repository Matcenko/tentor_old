import React, {useState} from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import classNames from 'classnames';
import style from './Slider.module.css';

const slides = [
    {
        src: require('./img/tackle_slide1.png'),
        id: 'wr34F4T',
        name: 'Товары для туризма'
    },
    {
        src: require('./img/boat_slide2.png'),
        id: 'ni1uFVT',
        name: 'Чехлы на лодочные моторы'
    },
    {
        src: require('./img/camping_slide3.png'),
        id: 'lJs66A',
        name: 'Тенты на моторые лодки'
    }];

const slideElements = slides.map(slide => {
    return (
        <div className={style.slide} key={slide.id} style={{backgroundImage: `url("${slide.src}")`}}>
            <img alt=''/>
            <p className={style.slideName}>{slide.name}</p>
        </div>)
});

const Slider = () => {
    const onChange = activeSlide => setActiveSlide(
        activeSlide > slides.length - 1 ?
            activeSlide - slides.length
            : activeSlide)

    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <section className={style.carouselWrapper}>
            <Carousel
                value={activeSlide}
                onChange={onChange}
                autoPlay={8000}
                centered
                draggable={false}
                infinite
                stopAutoPlayOnHover
                slides={slideElements}
            />
            <div className={style.dots}>
                {slides.map((slide, i) => {
                    return (
                        <div className={classNames(style.dot,
                            {[style.activeDot]: i === activeSlide})}
                             onClick={() => onChange(i)}
                             key={slide.id}
                        />)
                })}
            </div>
        </section>
    )
}

export default Slider;
