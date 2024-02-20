import React, { useState } from 'react'
import "../styles/Home.css"
import Navbar from '../components/Navbar'
import HeroBannerVideo from "../images/HeroBannerVideo.mp4";
import one from "../images/one.png";
import two from "../images/two.png";
import three from "../images/three.png";
import ek from "../images/ek.png";
import don from "../images/don.png";

import ChartComponent from "../components/Chart.jsx"
const Home = () => {
    const [show, setshow] = useState(false)
    const [discover, setdiscover] = useState(false)
    const [invest, setinvest] = useState(false)

    const handleshow = () => {
        setshow(true)
        setdiscover(false)
        setinvest(false)
    }
    const handlediscover = () => {
        setshow(false)
        setdiscover(true)
        setinvest(false)
    }
    const handleinvestor = () => {
        setshow(false)
        setdiscover(false)
        setinvest(true)
    }


    return (
        <div className='mainconatiner'>
            <div className='conatiner'>
                <div className='uppercontainer'>
                    <div className='logoconatiner'>
                        <Navbar />
                        <hr style={{ color: "#F2F2F2" }} />
                        <div className="video-background">
                            <video autoPlay muted loop playsInline>
                                <source width="100%" src={HeroBannerVideo} type="video/mp4" />

                                Your browser does not support the video tag.
                            </video>
                            {/* Content */}
                            <div className="content">
                                <div className='one'>Overcome Investment Barriers,</div>
                                <div className='two'>Build Sustainable Wealth</div>
                                <div className='three'>

                                    Dive into alternative markets with us and set your capital
                                </div>
                                <div className='four'>
                                    on the path of unparalleled growth.
                                </div>
                            </div>

                        </div>
                        <div className='cards'>
                            <div className='card1'>

                                <p className='dis'>Discover</p>
                                <p className='prime'>Prime Opportunities</p>
                                <br />
                                <br />
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", fontSize: "14px" }}>
                                    <span style={{ color: "#4375FB" }}>Greensteps  I</span>
                                    <span>Greensteps II</span>
                                    <span>Greensteps III</span>
                                </div>
                                <hr width={"90px"} style={{ height: "4.42px", backgroundColor: "#4375FB" }} />
                                <br />
                                <br />
                                <div>
                                    <p>In a world where the hustle and bustle of a metropolitan city can wear you down, everyone deserves a place to escape to— a real 'home away from home.' </p>
                                </div>
                                <br />
                                <div>
                                    <p>That's precisely what we're here to offer you. Our carefully curated real estate opportunities provide you with the perfect retreat from the urban chaos, all while potentially securing a solid investment in your future. </p>
                                </div>
                                <br />
                                <br />
                                <div>
                                    <p className='learn'>Learn More</p>
                                </div>
                            </div>
                            <div className='card2' style={{ display: "relative" }} >
                                <div className='img'>1</div>
                                <div className='cardinner'>

                                    <p className='blur'>Tags</p>
                                    <div style={{ display: "flex", gap: "5px" }} className='btn'>
                                        <button>Regular plot</button>
                                        <button>2,970 Sq ft*</button>
                                        <button style={{ color: "white", backgroundColor: "#0F1640" }}>Fractional Ownership</button>
                                    </div>

                                    <p className='blur'>Other Tags</p>
                                    <div className='tags'>
                                        <span>Electricity</span>
                                        <span>Agricultural Land</span>
                                        <span>Maintenance Inclusive</span>
                                        <span>Fence</span>
                                    </div>


                                    <p className='blur'>Price</p>
                                    <div className='pricediv'>
                                        <div className='bottom'>INR 1.75 Cr</div>
                                        <div className='bottom'>2900/ Sq yd</div>
                                        <div className='bottom'>INR 5,00,000</div>
                                    </div>
                                    <br />
                                    <div className='pricediv'>
                                        <button style={{ color: 'white', backgroundColor: "black" }}>+  Invest Now</button>
                                        <button>Contact Us</button>
                                    </div>
                                </div>


                            </div>
                            <div style={{ backgroundColor: "#131212", color: "white" }}>
                                <ChartComponent />
                            </div>
                            <div className='card4'>
                                <div>
                                    <p className='Access'>Access</p>
                                    <p className='Access' style={{ marginLeft: "50px", font: "italic" }}>Alternative</p>
                                    <p className='Access' style={{ marginLeft: "180px" }}>Investments</p>
                                </div>
                                <br />
                                <div style={{ width: "85%", margin: "auto" }}>
                                    <p>Unleashing the untapped potential of the alternative  markets through Rooba.Finance - Your gateway to superior returns and exclusive opportunities</p>
                                    <p>Discover the advantages of alternative market investments, unlock new horizons, and embark on a journey towards financial prosperity with our platform as your trusted partner. </p>
                                    <br />
                                    <div style={{ display: "flex" }}>
                                        <button style={{ height: "auto", width: "auto", margin: "5px", borderRadius: "2.5px" }}>Private Equity</button>
                                        <button style={{ height: "auto", width: "auto", margin: "5px", borderRadius: "2.5px" }}>Private Debt</button>
                                        <button style={{ height: "auto", width: "auto", margin: "5px", borderRadius: "2.5px" }}>Investment Management Firms</button>
                                    </div>
                                    <br />
                                    <div style={{ height: "52px", width: "195px", border: "1px solid white", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <p className='learn'>Learn More</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='whitecards'>
                            <br />
                            <br />
                            <br />
                            <div className='pinkbox'>
                                <p>Why you need exposure</p>
                                <p style={{ marginLeft: "220px" }}>to private markets</p>
                            </div>
                            <br />
                            <br />
                            <div className='cardbox'>
                                {
                                    [0, 1, 2, 3, 4, 6].map((el, index) => {
                                        return (
                                            <div className='crd' key={index + 1} style={{
                                                marginTop: index === 1 || index === 4 ? "15px" : "",
                                                backgroundColor: index !== 1 ? "#FAFAFA" : "white"
                                            }}>
                                                <div className='smallcrd'>
                                                    <p className='same'>Access to</p>
                                                    <p className='same'>innovation</p>
                                                    <br />
                                                    <p>Gain early access to disruptive technologies and innovative companies not available on public markets.</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                            <br />
                            <br />
                            <br />
                            <br />
                        </div>
                        <div className='computerdiv'>
                            <br /><br /><br /><br />
                            <div className='computer'>
                                <p className='how'>How to</p>
                                <p className='how' style={{ marginLeft: "100px" }}>Invest</p>
                            </div>
                            <div className='investcontainer'>
                                <div>
                                    <div className='accountcontainer'>
                                        <div style={{ display: "flex", justifyContent: "space-between", width: "372.41px" }}>
                                            <p className='create'>Create Account</p>
                                            <p className='create' style={{ textAlign: "right" }} onClick={handleshow} >+</p>
                                        </div>
                                        <hr />
                                        <br />
                                        {
                                            show ? <div><p>Investing in private markets facilitates portfolio diversification, mitigating risks associated with public markets </p>
                                                <br />
                                                <div className='startbtn' style={{ height: "35.49px", border: "1px solid black" }}>Start Now</div>
                                            </div> : ""
                                        }

                                    </div>
                                    {/*  */}
                                    <div className='accountcontainer'>
                                        <div style={{ display: "flex", justifyContent: "space-between", width: "372.41px" }}>
                                            <p className='create'>Discover Opportunities</p>
                                            <p className='create' style={{ textAlign: "right" }} onClick={handlediscover}>+</p>
                                        </div>
                                        <hr />
                                        <br />
                                        {
                                            discover ? <div>
                                                <p>Investing in private markets facilitates portfolio diversification, mitigating risks associated with public markets </p>
                                                <br />
                                            </div> : ""
                                        }


                                    </div>
                                    <div className='accountcontainer'>
                                        <div style={{ display: "flex", justifyContent: "space-between", width: "372.41px" }}>
                                            <p className='create'>Invest with Flexibility</p>
                                            <p className='create' style={{ textAlign: "right" }} onClick={handleinvestor}>+</p>
                                        </div>
                                        <hr />
                                        <br />
                                        {
                                            invest ? <div>
                                                <p>Investing in private markets facilitates portfolio diversification, mitigating risks associated with public markets </p>
                                                <br />
                                            </div> : ""
                                        }

                                    </div>
                                </div>

                                <div className='computerdisplay'>
                                    {
                                        show && <div>
                                            <img src={one} alt="" />
                                        </div>
                                    }
                                    {
                                        invest && <div>
                                            <img src={three} alt="" />
                                        </div>
                                    }
                                    {
                                        discover && <div>
                                            <img src={two} alt="" />
                                        </div>
                                    }

                                    <form action="">
                                        
                                    </form>
                                </div>
                            </div>
                            <br />
                            <br />
                            <br />

                        </div>
                        <div className='whitediv'>
                            <br /><br /><br />
                            <div className='investment'>
                                <p className='more1'>We’re more than an</p>
                                <p className='more2'>investment club</p>
                            </div>
                            <div className='para'>
                                <p>Our state-of-the-art platform ensures provenance through an unbroken chain of custody, and rigorous independent due diligence, both legal and financial. We're not just helping you invest; we're revolutionizing how investments are made, offering a dynamic approach that transcends traditional boundaries. Connect with a community of visionaries, and embark on an exclusive journey where innovation meets your financial aspirations. </p>
                            </div>
                            <br /><br /><br />
                            <div className='partner'>
                                <p className='temp'>Our Partners </p>
                                <hr />
                                <div style={{ display: "flex" }}>
                                    <img src={ek} alt="" />
                                    <img src={don} alt="" />
                                </div>
                            </div>
                            <br /><br /><br />  <br /><br /><br /> <br /><br /><br />
                        </div>
                        <div className='formdiv'>
                            <div className='blackdiv'>
                                <div style={{ marginTop: "450px" }}>
                                    <p className='one1' style={{ marginLeft: "50px" }}>Ready to</p>
                                    <p className='one2' style={{ marginLeft: "150px" }}>transcend</p>
                                    <p className='one1' style={{ marginLeft: "200px" }} >the ordinary?</p>
                                </div>

                            </div>
                            <div className='form'>
                                <div className='frm'>
                                    <p>Click here to start your journey into the future of private market investments. For more information, connect with us directly through the contact form below.</p>
                                    <br /><br /><br />
                                     <form action="">
                                        <label htmlFor="">Name</label>
                                        <br />
                                        <input type="text" />
                                        <hr />
                                        <br />
                                        <br />
                                        <label htmlFor="">Email</label>
                                        <br />
                                        <input type="text" />
                                        <hr />
                                        <br />
                                        <br />
                                        <label htmlFor="">Phone No</label>
                                        <br />
                                        <input type="text" />
                                        <hr />
                                        <br />
                                        <br />
                                        <label htmlFor="">Your Query</label>
                                        <br />
                                        <input type="text" />
                                        <hr />
                                        <br />
                                        <br />
                                     </form>
                                </div>
                            </div>
                        </div>
                        <div className='blank'>

                        </div>
                    </div>
                     
                </div>

            </div>
            
        </div>
    )
}

export default Home
