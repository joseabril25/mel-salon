import React, { Component } from 'react';
import Link from 'next/link';
import OwlCarousel from 'react-owl-carousel3';

const options = {
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 5000,
    responsive: {
        0:{
            items:2,
        },
        576:{
            items:4,
        },
        768:{
            items:4,
        },
        1024:{
            items:5,
        },
        1200:{
            items:6,
        }
    }
}

class Partner extends Component {
    render() {
        return (
            <section className="ml-partner-area mt-minus-top">
                <div className="container">
                    <div className="row">
                    </div>
                </div>
            </section>
        );
    }
}

export default Partner;