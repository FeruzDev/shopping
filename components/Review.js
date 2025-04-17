import React from 'react';
import Carousel from "@/components/Carousel";
import VideoReview from "@/components/VideoReview";

const Review = () => {
    return (

        <section className="content rev-bg" id="otz">
            <div className="all">
                <h3>СЛОВА БЛАГОДАРНОСТИ</h3>
                <h2>Отзывы пациентов</h2>
            </div>
            <div className="all revs">

                <Carousel />
            </div>

            <VideoReview />
        </section>
    );
};

export default Review;