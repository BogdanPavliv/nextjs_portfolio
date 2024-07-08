import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa'
import Link from 'next/link'

const socialLinks = [
  {
    icon: <FaGithub />,
    path: 'https://github.com/BogdanPavliv'
  },
  {
    icon: <FaFacebook />,
    path: 'https://www.facebook.com/bogdan.pavliv/'
  },
  {
    icon: <FaInstagram />,
    path: 'https://www.instagram.com/pavlivbodia/'
  }
]
const Social = () => {
  return (
    <div className='flex gap-6'>
      {socialLinks.map((item, index) => (
        <Link
          target='_blank'
          href={item.path}
          key={index}
          className='duration-3000 flex size-10 items-center justify-center rounded-full border-2 border-blue text-blue hover:bg-blue/20 hover:transition-all'
        >
          {item.icon}
        </Link>
      ))}
    </div>
  )
}

export default Social
