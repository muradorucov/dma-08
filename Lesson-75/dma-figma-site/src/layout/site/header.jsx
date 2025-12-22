import MailIcon from '../../assets/icons/mail'
import FbIcon from '../../assets/icons/fb'
import InstaIcon from '../../assets/icons/insta'
import WpIcon from '../../assets/icons/wp'

function Header() {
  return (
    <header className='bg-[#2B343B] text-white leading-[45px]'>
      <div className='flex justify-between container'>
        <div className='text-[14px] font-medium flex gap-[60px]'>
          <a href="#!" target="_blank" rel="noopener noreferrer">Servis məntəqələrimiz</a>
          <a href="#!" target="_blank" rel="noopener noreferrer">Tez-tez verilən suallar</a>
        </div>
        <div className='flex items-center gap-[30px]'>
          <a href="mailto:office@solitonservice.com" className='flex gap-[9px] items-center text-[16px] font-normal'>
            <MailIcon />
            <span>office@solitonservice.com</span>
          </a>
          <div className='flex gap-4 border-l border-white '>
            <a href="#!" target="_blank" rel="noopener noreferrer" className='pl-5'>
              <FbIcon />
            </a>
            <a href="#!" target="_blank" rel="noopener noreferrer">
              <InstaIcon />
            </a>
            <a href="#!" target="_blank" rel="noopener noreferrer">
              <WpIcon />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header