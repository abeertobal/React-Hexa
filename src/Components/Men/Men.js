import './Men.css'
import prev from '../../assets/img/prev.png'
import m1 from '../../assets/img/men-01.jpg'
import m2 from '../../assets/img/men-02.jpg'
import m3 from '../../assets/img/men-03.jpg'
import next from '../../assets/img/next.png'

const Men = () => {
    return(
        <>
            <div>

            <div className="section_men">
            <div className="writes">
                <h2>Men's Latest</h2>
                <span>Details to details is what makes Hexashop different from the other themes.</span>
            </div>
            <br/>
            <div className="page">
                <div className="prev"><img className="signal" src={prev} alt=""/></div>
                <div className="page1">
                    <img src={m1} alt=""/>
                    <h4>classNameic Spring <span className="a"/>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>

                    </h4>
                    <span>$120.00</span>
                </div>
                <div className="page2">
                    <img src={m2} alt=""/>
                    <h4>Air Force 1 X<span className="b"/>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                    </h4>
                    <span>$90.00</span>
                </div>
                <div className="page3">
                    <img src={m3} alt=""/>
                    <h4>Love Nana '20<span className="c"/>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                    </h4>
                    <span>$150.00</span>
                </div>
                <div className="page4">
                    <img className="signal" src={next} alt="" />
                </div>
            </div>
        </div>

            </div>

        </>
    )
}

export default Men