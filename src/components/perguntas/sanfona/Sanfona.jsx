import './Sanfona.css'
export default function sanfona ({sanfona}) {

    return (
        <details>
            <summary className='pergunta'>
                <div className="container_janelas">
                    <div className="janela">
                        <p>{sanfona.pergunta}</p>

                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="elj7tfr3 e164gv2o4 default-ltr-cache-l7vm9h e1svuwfo1" data-name="Plus" alt=""><path fillRule="evenodd" clipRule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
            </summary>
            <div id='resposta' className='resposta' dangerouslySetInnerHTML={{__html: sanfona.resposta}}>
            </div>
        </details>
    )
}