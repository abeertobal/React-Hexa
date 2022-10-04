import './Kids.css'
import prev from '../../assets/img/prev.png'
import k1 from '../../assets/img/kid-01.jpg'
import k2 from '../../assets/img/kid-02.jpg'
import k3 from '../../assets/img/kid-03.jpg'
import next from '../../assets/img/next.png'


const Kids = () => {
    return(
        <>
            <div> 

            <div class="kid-section">
            <div class="writes">
                <h2>Kid's Latest</h2>
                <span>Details to details is what makes Hexashop different from the other themes.</span>
            </div>
            <br/>
            <div class="page">
                <div class="prev"><img class="signal" src={prev} alt=""/></div>
                <div class="page1">
                    <img src={k1} alt=""/>
                    <h4>School Collection<span class="g"/>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                    </h4>
                    <span>$80.00</span>
                </div>
                <div class="page2">
                    <img src={k2} alt=""/>
                    <h4>Summer Cap<span class="h"/>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                    </h4>
                    <span>$12.00</span>
                </div>
                <div class="page3">
                    <img src={k3} alt=""/>
                    <h4>Classic Kid<span class="k"/>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                    </h4>
                    <span>$30.00</span>
                </div>
                <div class="page4">
                    <img class="signal" src={next} alt=""/>
                </div>
            </div>
        </div>
        

            </div>
        </>
    )
}

export default Kids