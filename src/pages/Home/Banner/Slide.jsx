import { Link } from 'react-router-dom'

const Slide = ({ image, text, h2 }) => {
  return (
    <div
      className='w-full bg-center bg-cover h-[36rem]'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div  className='flex items-center justify-center w-full h-full  bg-gradient-to-b from-[#004274]/50 to-[#004274]/100'>
        <div className='text-center'>
          <h2 className=' lg:text-3xl text-white font-bold mb-4' >
            {h2}
          </h2>
          <h1 data-aos="fade-left" className='text-3xl font-semibold text-white lg:text-8xl'>
            {text}
          </h1>
          <br />
          <Link
            to='/gallery'
            className='w-full px-5 py-4 mt-4 text-sm font-medium'
          >
           <button className="btn border-none rounded-none px-20 text-white bg-[#00AEEF] hover:bg-[#00AEEF]">See Gallery</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Slide