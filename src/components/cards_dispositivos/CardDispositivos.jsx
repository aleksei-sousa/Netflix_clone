import style from '../cards_tv/CardTv.module.css'
//import style from './CardDispositivos.module.css'
export default function CardDispositivos () {
    const mac = 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png'
    const video = 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v'
    return(
        <div className={style.cards_container}>
          <div className={style.cards_content_invertido }>
                <div className={style.cards_container_dispositivos}>
                    <img className={style.cards_midia}src={mac} alt=""/>
                    <div className={style.cards_container_video}>
                        <video
                            className={style.cards_video}
                            src={video}
                            autoPlay
                            muted
                            loop>
                        </video>
                    </div>
                </div>

                <div className={style.cards_texto}>
                    <h1 className={style.cards_titulo}>
                      Assista onde quiser
                    </h1>
                    <p className={style.cards_descricao}>
                      Assista a quantos filmes e séries quiser no celular, tablet, laptop e TV.
                    </p>
                </div>

            </div>
        </div>
    )
}