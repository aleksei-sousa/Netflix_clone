import '../../../src/index.css'
//import style from './Perguntas.module.css'
import './Perguntas.css'
import Input from '../form/Input.jsx'
import Sanfona from './sanfona/Sanfona.jsx'
export default function Perguntas () {

    const sanfona = {0:{'pergunta': 'O que é a Netflix?', 'resposta':` A Netflix é um serviço de streaming que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet.<br></br>Você pode assistir a quantos filmes e séries quiser, quando e onde quiser – tudo por um preço mensal acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes.`},1:{'pergunta': 'Quanto custa a Netflix', 'resposta': 'Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$18,90 a R$55,90 por mês. Sem contrato nem taxas extras.'},2:{'pergunta':'Onde posso assistir Netflix', 'resposta': 'Assista onde quiser, quando quiser. Faça login com sua conta Netflix em netflix.com para começar a assistir no computador ou em qualquer aparelho conectado à Internet compatível com o aplicativo Netflix, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames.<br></br>Você também pode baixar a sua série favorita com o aplicativo Netflix para iOS, Android ou Windows 10. Use downloads para levar a Netflix para onde quiser sem precisar de conexão com a Internet. Leve a Netflix com você para qualquer lugar.'},3:{
        'pergunta':'Como faço para cancelar?',
        'resposta':'A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento.'
    },4:{
        'pergunta':'O que eu posso assistir na Netflix?',
        'resposta':'A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser.'
    },5:{
        'pergunta':'A Netflix é adequada para crianças?',
        'resposta':'A experiência infantil da Netflix faz parte da sua assinatura para que as crianças se divirtam em seu próprio espaço com séries e filmes familiares sob a supervisão dos responsáveis.<br><br/>O recurso de controle parental, incluso nos perfis para crianças e protegido por PIN, permite restringir a classificação etária do conteúdo que as crianças podem ver e bloquear títulos específicos que você não quer que elas assistam.'
    }}


    //console.log(sanfona[0].pergunta)
    function animarResposta() {
        const resposta = document.querySelector('.resposta')
        console.log(resposta)
        resposta.classList.add('aparecer')

    }
    return(
        <div className='container_perguntas'>                     
            <div className='content_perguntas'>
                <h1 className='cards_titulo margin_auto'>Perguntas frequentes</h1>
                <div className='content_sanfonas'>
                    <Sanfona sanfona={sanfona[0]}/>
                    <Sanfona sanfona={sanfona[1]}/>
                    <Sanfona sanfona={sanfona[2]}/>
                    <Sanfona sanfona={sanfona[3]}/>
                    <Sanfona sanfona={sanfona[4]}/>
                    <Sanfona sanfona={sanfona[5]}/>
                </div>
                <Input />
            </div>
        </div>
    )
}