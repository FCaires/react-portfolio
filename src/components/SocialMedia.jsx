import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'

import '../styles/components/socialmedia.sass'

const SocialMedia = () => {
    return (
        <section id="social-media">
            <a className='social-btn' href="https://www.linkedin.com/in/fernandocaires15/" target="_blank" id="LinkedIn" key="LinkedIn"><FaLinkedinIn /></a>
            <a className='social-btn' href="https://github.com/FCaires" target="_blank" id="Github" key="Github"><FaGithub /></a>
            <a className='social-btn' href="https://instagram.com/fernandocaiires" target="_blank" id="instagram" key="instagram"><FaInstagram /></a>
        </section>
    )
}

export default SocialMedia