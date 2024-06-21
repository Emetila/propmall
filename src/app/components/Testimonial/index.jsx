import React from "react";
import style from './style.module.css';
import { clientReviews } from "./review";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

export const Testimonial = () => {
    return (<section>
        <div className={style.title}>
            <h1>What our investors say About Us</h1>
            <div className={style.reviewcontainer}>
                <div className={style.reviews}>
                    {/* <MdKeyboardDoubleArrowLeft className={style.arrow} /> */}
                    {clientReviews.map((clientReviews) => (
                        <div>
                            <div className={style.reviewbox}>
                                <h2 className={style.name}>{clientReviews.name}</h2>
                                <p className={style.occupation}>{clientReviews.occupation}</p>
                                <img className={style.reviewimg} src={clientReviews.Image} />
                            </div>

                            <div className={style.reviewbody}>
                                <FaQuoteLeft className={style.quote} />
                                <p className={style.body}>{clientReviews.text}</p>
                                <FaQuoteRight className={style.quoteright} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
    )
}