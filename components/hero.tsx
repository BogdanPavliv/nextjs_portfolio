import { Download } from 'lucide-react'
import Link from 'next/link'
import Social from '@/components/social'
import Photo from '@/components/photo'

const Hero = () => {
  return (
    <section className='w-f pt-40 overflow-hidden'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col items-center justify-between gap-10 xl:flex-row xl:pt-8'>
          {/* text */}

          <div className='text-center xl:text-left'>
            <span>Hello i&apos;m</span>
            <h1 className='text-[40px] font-bold capitalize leading-[3rem]'>
              Bogdan <br />
              <span className='under-line'>Pavliv</span>
            </h1>
            <div className='py-8'>
              <p>
                I have the perfect solution for your frontend development needs. By adopting a modern framework, like React, and incorporating TypeScript for enhanced type safety, we can create an exceptional user interface.
              </p>
            </div>
            <div className='mt-4 flex flex-col items-center justify-center xl:flex-row xl:justify-start xl:space-x-8'>
              <div className='flex gap-x-2'>
                <Link
                  href='https://res.cloudinary.com/ddingpqni/image/upload/v1732382887/Front-end-developer_cv_lreaxb.pdf'
                  target='_blank'
                  className='flex items-center space-x-2 rounded-full border-2 border-blue px-6 py-3 font-medium uppercase text-blue transition-all hover:bg-blue/80 hover:text-lighted'
                >
                  <span className='text-sm'>Download Cv</span>
                  <Download className='size-5' />
                </Link>
              </div>
              <div className='flex py-4 xl:py-0'>
                <Social />
              </div>
            </div>
          </div>
          {/* image */}

          <div>
            <Photo />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
