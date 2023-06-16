import React from 'react';
import './Contact.css';
import {MdCall, MdVideoCall} from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';

const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            {/* left side */}
            <div className="flexColStart c-left ">
                <span className='orangeText'>Our Contacts</span>
                <span className='primaryText'>Contact Us</span>
                <span className="secondaryText">We always ready to help you providing the best services. We believe living in a good place can make your life better.</span>

                <div className="flexColStart contactModes">
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Call</span>
                                    <span className="secondaryText">0039 348 644 2462</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Call now</div>
                        </div>

                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Chat</span>
                                    <span className="secondaryText">0039 348 644 2462</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Chat now</div>
                        </div>
                    </div>
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdVideoCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Video Call</span>
                                    <span className="secondaryText">0039 348 644 2462</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Video Call now</div>
                        </div>

                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <HiChatBubbleBottomCenter size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Message</span>
                                    <span className="secondaryText">0039 348 644 2462</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Message now</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* right side */}

            <div className="c-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
