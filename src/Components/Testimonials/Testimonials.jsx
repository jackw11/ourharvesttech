import React, { useRef, useState } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/profile.png'
import user_2 from '../../assets/profile.png'
import user_3 from '../../assets/profile.png'
import user_4 from '../../assets/profile.png'

const Testimonials = () => {
    const slider = useRef();
    const [tx, setTx] = useState(0);
    const [canGoBack, setCanGoBack] = useState(false);
    const [canGoForward, setCanGoForward] = useState(true);

    const slideForward = () => {
        if(tx > -50){
            const newTx = tx - 25;
            setTx(newTx);
            slider.current.style.transform = `translateX(${newTx}%)`;
            setCanGoBack(true);
            if(newTx <= -50){
                setCanGoForward(false);
            }
        }
    }

    const slideBackward = () => {
        if(tx < 0){
            const newTx = tx + 25;
            setTx(newTx);
            slider.current.style.transform = `translateX(${newTx}%)`;
            setCanGoForward(true);
            if(newTx >= 0){
                setCanGoBack(false);
            }
        }
    }

    return (
        <div className='testimonials'>
            {canGoForward && <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>}
            {canGoBack && <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>}
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Name</h3>
                                    <span>Location</span>
                                </div>
                            </div>
                            <p>Role and description</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Name</h3>
                                    <span>Location</span>
                                </div>
                            </div>
                            <p>Role and description</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Name</h3>
                                    <span>Location</span>
                                </div>
                            </div>
                            <p>Role and description</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Name</h3>
                                    <span>Location</span>
                                </div>
                            </div>
                            <p>Role and description</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials
