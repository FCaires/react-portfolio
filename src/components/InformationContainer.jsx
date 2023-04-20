import '../styles/components/informationcontainer.sass'

import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'

const InformationContainer = () => {
    return (
        <section id='information'>
            <div className="info-card">
                <AiFillPhone id='phone-icon' />
                <div>
                    <h3>Telefone</h3>
                    <p>(71)99135-7268</p>
                </div>
            </div>
            <div className="info-card">
                <AiOutlineMail id='email-icon' />
                <div>
                    <h3>E-mail</h3>
                    <p>fc.caires@hotmail.com</p>
                </div>
            </div>
            <div className="info-card">
                <AiFillEnvironment id='pin-icon' />
                <div>
                    <h3>Localização</h3>
                    <p>Dias D'Ávila / BA</p>
                </div>
            </div>
        </section>
    )
}

export default InformationContainer