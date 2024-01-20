import style from '../cards_tv/CardTv.module.css'
//import style from './CardDispositivos.module.css'
export default function CardBaixar () {
    const celular = 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg'
    const poster = 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png'
    const animacao = 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif'
    return(
        <div className={style.cards_container}>
          <div className={style.cards_content_invertido }>
                <div className={style.cards_container_dispositivos}>
                    <img className={style.cards_midia}src={celular} alt=""/>
                    <div className={style.downloading}>
                        <img className={style.poster} src={poster} alt="" />
                        <div className={style.download_texto}>
                            <p className={style.stg_thgs}>Stranger Things</p>
                            <p className={style.down_andamento}>Download em andamento...</p>
                        </div>
                        <img className={style.download_gif} src={animacao} loop autoPlay muted></img>
                    </div>
                </div>

                <div className={style.cards_texto}>
                    <h1 className={style.cards_titulo}>
                      Baixe séries para assistir offline
                    </h1>
                    <p className={style.cards_descricao}>
                      Assista em um avião, trem ou submarino...
                    </p>
                </div>

            </div>
        </div>
    )
}