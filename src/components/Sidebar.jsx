import Avatar from '../img/eu.jpg'
import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'
import SocialMedia from './SocialMedia'

const Sidebar = () => {
  return (
    <aside id='sidebar'>
      <img src={Avatar} alt="Fernando Caires" />
      <p className="title">Dev Front-End</p>
      <SocialMedia />
      <InformationContainer />
      <a href="../curriculo.pdf" download className='btn'>Download curriculo</a>
    </aside>
  )
}

export default Sidebar