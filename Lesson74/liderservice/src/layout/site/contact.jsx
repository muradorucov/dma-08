import PhoneIcon from "../../assets/icons/tel"
import PhoneIcon2 from "../../assets/icons/tel2"


function HeaderContact() {
  let data = [1, 2, 3, 4];
  return (
    <div className='bg-[#EFF4F8]'>
      <div className="container flex justify-between items-center py-[30px]">
        <img src="/logo.png" alt="" className="w-[174px] h-[60px]" />
        <ul className="grid grid-cols-2 gap-[10px_78px] justify-center font-medium text-[16px]">
          <li className={`${data.length === 1 ? 'col-span-2' : ''}`}>
            <a href="tel:+994123456789" className="flex gap-2.5">
              <PhoneIcon />
              <span>(+994 12) 565-1-565</span>
            </a>
          </li>
          <li>
            <a href="tel:+994123456789" className="flex gap-2.5">
              <PhoneIcon />
              <span>(+994 12) 565-1-565</span>
            </a>
          </li>
          <li className={`${data.length === 3 ? 'col-span-2' : ''}`}>
            <a href="tel:+994123456789" className="flex gap-2.5">
              <PhoneIcon />
              <span>(+994 12) 565-1-565</span>
            </a>
          </li>
          <li>
            <a href="tel:+994123456789" className="flex gap-2.5">
              <PhoneIcon />
              <span>(+994 12) 565-1-565</span>
            </a>
          </li>
        </ul>
        <a href="tel:+" className="w-[113px] h-[51px] flex items-center justify-center rounded-[10px] bg-linear-to-b from-[#F32735] to-[#A7111C]">
          <PhoneIcon2 />
          <span className="italic font-black text-[30px] text-white">180</span>
        </a>
      </div>
    </div>
  )
}

export default HeaderContact