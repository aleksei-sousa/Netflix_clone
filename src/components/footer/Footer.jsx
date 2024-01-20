import style from './Footer.module.css'
import './Footer.css'
export default function Footer () {
    return(
        <footer>
            <div className='footer_content'>
                <div className='ligue_para'><b>Dúvidas?</b> Ligue <a href="">0800 591 2876</a></div>
                <div className='grid_pai'>
                    <ul className='grid_filho filho1'>
                      <li className='footer_link'> <a href="">Perguntas Frequentes</a></li>
                      <li className='footer_link'> <a href="">Relações com investidores</a></li>
                      <li className='footer_link'> <a href="">Formas de assistir</a></li>
                      <li className='footer_link'> <a href="">Informações corporativas</a></li>
                      <li className='footer_link'> <a href="">Só na Netflix</a></li>
                    </ul>
                    <ul className='grid_filho filho2'>
                      <li className='footer_link'> <a href="">Central de Ajuda</a></li>
                      <li className='footer_link'> <a href="">Carreiras</a></li>
                      <li className='footer_link'> <a href="">Termos de Uso</a></li>
                      <li className='footer_link'> <a href="">Entre em contato</a></li>
                    </ul>
                    <ul className='grid_filho filho3'>
                      <li className='footer_link'> <a href="">Conta</a></li>
                      <li className='footer_link'> <a href="">Resgatar  Cartão pré-pago</a></li>
                      <li className='footer_link'> <a href="">Privacidade</a></li>
                      <li className='footer_link'> <a href="">Teste de velocidade</a></li>
                    </ul>
                    <ul className='grid_filho filho4'>
                      <li className='footer_link'> <a href="">Media Center</a></li>
                      <li className='footer_link'> <a href="">Comprar cartão pré-pago</a></li>
                      <li className='footer_link'> <a href="">Preferências</a></li>
                      <li className='footer_link'> <a href="">Avisos legais</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}