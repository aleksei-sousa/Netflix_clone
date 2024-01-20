import style from '../cards_tv/CardTv.module.css'
export default function CardAnimacoes () {

    const tv = 'https://occ-0-2856-3851.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABUIQf-EOyyk3NFohgiSUVv5tl73COXhof_N8Gz2GD6IqJ0Cz-DzUfRzj2NhSocLHDrNUlFL3NK2fDG6MCKzVHt3kCmSOjrf4SuVb.png?r=190'
    return(
        <div className={style.cards_container}>
          <div className={style.cards_content}>


                <div className={style.cards_texto}>
                    <h1 className={style.cards_titulo}>
                      Crie Perfis para crianças
                    </h1>
                    <p className={style.cards_descricao}>
                        Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso.
                    </p>
                </div>
                <div className={style.cards_container_midia}>

                    <img className={style.cards_midia}src={tv} alt=""/>


                </div>
            </div>
        </div>
    )
}