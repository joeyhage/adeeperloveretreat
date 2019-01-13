import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default class Carousel extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            carouselItems: []
        };
    }
    
    render() {
        return (
            <section className='hero is-medium has-carousel'>
                <div className='hero-carousel carousel-animated carousel-animate-fade' data-autoplay='true' data-delay='10000'>
                    <div className='carousel-container'>
                        {this.state.carouselItems}
                    </div>
                    <div className='carousel-navigation is-overlay'>
                        <div className='carousel-nav-left'>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </div>
                        <div className='carousel-nav-right'>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                    </div>
                </div>
                <div className='hero-body has-text-centered' />
            </section>  
        );
    }
  
    componentDidMount() {
        this.setState({
            carouselItems: this.props.images.map((image, i) => (
                <div className={'carousel-item has-background' + (i === 0 ? ' is-active' : '')} key={i}>
                    <img className='is-background' src={image.src} alt={image.alt} />
                </div>   
            ))
        });
    }
}