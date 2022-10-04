import './Women.css'
import prev from '../../assets/img/prev.png'
import w1 from '../../assets/img/women-01.jpg'
import w2 from '../../assets/img/women-02.jpg'
import w3 from '../../assets/img/women-03.jpg'
import next from '../../assets/img/next.png'


const Women = () => {
    return(
        <>
            <div> 

            <div className="section_women">
            <div className="writes">
                <h2>Women's Latest</h2>
                <span>Details to details is what makes Hexashop different from the other themes.</span>
            </div>
            <br/>
            <div className="page">
                <div className="prev"><img className="signal" src={prev} alt=""/></div>
                <div className="page1">
                    <img src={w1} alt=""/>
                    <h4>New Green Jacket<span className="d"/>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                    </h4>
                    <span>$75.00</span>
                </div>
                <div className="page2">
                    <img src={w2} alt=""/>
                    <h4>classNameic Dress<span className="e"/>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                    </h4>
                    <span>$45.00</span>
                </div>
                <div className="page3">
                    <img src={w3} alt=""/>
                    <h4>Spring Collection<span className="f"/>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                    </h4>
                    <span>$130.00</span>
                </div>
                <div className="page4">
                    <img className="signal" src={next} alt=""/>
                </div>
            </div>
        </div>


            </div>
        </>
    )
}

export default Women