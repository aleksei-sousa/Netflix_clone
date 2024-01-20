import Input from '../form/Input';
import Header from '../header/Header';
import './Topo.css'

export default function Topo () {
    const background_image = 'https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/9c050122-05ae-4838-89ad-f8acbf3d0d77/BR-pt-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg'
    return(
        <div className='top_container'>
            <Header/>
            <div className="top_background">
                <img
                alt="" aria-hidden="true" data-uia="nmhp-card-hero+background+image" 
                className='background_image'
                src={background_image}> 
                </img>

                <div className="home_text">
                    <h1 className='home_titulo'>Os maiores sucessos do Brasil e do mundo. As melhores histórias. Tudo na Netflix.
                    </h1>
                    <p className='home_sub_titulo'>Assista onde quiser. Cancele quando quiser.</p>
                    
                    <Input />
                   
                </div>

                <div className="background_shadow" style={{background: "rgba(0 0 0 40%)"}}></div>



            </div>
        </div>
    )
}


