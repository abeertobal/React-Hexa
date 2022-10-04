import './Container.css'


const Container = () => {
    return(
        <>
            <div> 

            <div className="section">
                <div className="img_left">
                    <div className="image1">
                        <h4>We Are Hexashop</h4>
                        <span>Awesome, clean &amp; creative HTML5 Template</span>
                        <br/>
                        <button className="border"> Purchase Now! </button>
                    </div>
                </div>  
                <div className="img_right"> 
                    <div className="T_img">
                        <div className="image2">
                            <div className="write">
                                <h4>Women</h4>
                                <span>Best Clothes For Women</span>
                            </div>    
                        </div>
                        <div className="image3">
                            <div className="write">
                                <h4>Men</h4>
                                <span>Best Clothes For Men</span>
                            </div>    
                        </div>
                    </div>        
                       
                    <div className="T_img">
                        <div className="image4">
                            <div className="write">
                                <h2>Kids</h2>
                                <i>Best Clothes For Kids</i>
                            </div>
                        </div>
                        <div className="image5">
                            <div className="write">
                                <h2>Accessories</h2>
                                <i>Best trend Accessories</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div>
        </>
    )
}

export default Container