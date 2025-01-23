import footerimg from '../assets/image/capture.png'
import logo from '../assets/image/logo.svg'
const FooterComponents = () => {
  return (
    <div className='p-5 pt-10 max-w-7xl m-auto relative'>
      <div className='flex flex-col gap-4 items-center justify-center border-b-2 border-gray-100 relative z-20'>
        <h1 className='font-source text-slate-950 font-semibold text-6xl text-center'>
            Start project
        </h1>
        <div>
            <img src={footerimg} alt="" className='max-w-5xl h-[300px] sm:h-[450px] w-full object-cover'  />
        </div>
      </div>
      <div className='flex flex-wrap justify-around sm:justify-between pt-14 pb-5 gap-4 relative z-20'>
        <div>
            <img src={logo} alt=""/>
        </div>
        <div className='flex items-center gap-2'>
            <a href="" className='font-open text-gray-500 tracking-wide'>Instagram</a>/
            <a href="" className='font-open text-gray-500 tracking-wide'>Tokopedia</a>/
            <a href="" className='font-open text-gray-500 tracking-wide'>Shopee</a>
        </div>
      </div>
      <div className='h-2/3 max-w-48 md:max-w-[480px] w-full absolute bg-gray-100 -right-[10%] bottom-0 z-10'>

      </div>
    </div>
  )
}

export default FooterComponents
