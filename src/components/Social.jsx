import { FaDiscord, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import xIcon from '../assets/img/icon/x.svg'
import telegram from '../assets/img/icon/telegram.svg'
import dexscreener from '../assets/img/icon/dexscreener.svg'
import dextools from '../assets/img/icon/dextools.svg'


export default function Social({ className }) {
  const socialIcons = [

    {
      name: 'x',
      icon: xIcon,
      url: ''
    },
    {
      name: 'telegram',
      icon: telegram,
      url: ''
    },
    {
      name: 'dexscreener',
      icon: dexscreener,
      url: ''
    },
    {
      name: 'dextools',
      icon: dextools,
      url: ''
    },
  ];
  return (
    <ul className={`social-icon d-flex align-items-center flex-wrap gap-2 ${className}`}>
      {socialIcons.map((item, index) => (
        <li key={index}>
          <a href={item.url} data-aos="fade-up" data-aos-duration="1800" data-aos-delay="" data-aos-offset="0"target="_blank" className="social-links d-flex align-items-center justify-content-center ms-1">
            <img src={item.icon} alt="" />
          </a>
        </li>
      ))}
    </ul>
  )
}