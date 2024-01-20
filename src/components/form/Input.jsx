import {IoIosArrowForward} from 'react-icons/io'
import './Input.css'
export default function Input () {
    return(
        <div className='container_form'>
            <h4 className='titulo_input'>Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.</h4>
            <form className='input_container'>
                <input
                  className='input_email'
                  placeholder="Email"
                  type='email'
                />
                <button className='btn_submit' type="submit">
                    <p>Vamos lá</p>
                    <IoIosArrowForward/>
                </button>
            </form>
        </div>
    )
}