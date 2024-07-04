import Button from './Button';

const Hero = ({colorDeep, mainText, shadow, mobileShadow, subText, img}) => {
  return (
    <main className={`flex lg:flex-row lg:items-center flex-col items-start px-4 z-10 relative overflow-hidden md:px-16`}>
      <div className="flex flex-col gap-4 lg:w-1/2 justify-center lg:items-start lg:text-left w-full items-center text-center mb-5 md:mb-0">
        <h1 className='md:text-5xl text-4xl mx-auto lg:mx-0 font-bold leading-tight text-navy'>
          We're about <span style={{color: `${colorDeep}`}}>{mainText}!</span>
        </h1>
        <p className='leading-normal md:text-2xl text-lg text-navy'>{subText}</p>
        <Button 
          type='button'
          text='Get Started'
          className='mt-8 text-xl font-bold py-4 px-9 focus:outline-none md:w-2/5 lg:w-1/2 2xl:w-2/5'
          style={window.innerWidth > 767 ? { backgroundColor: `${colorDeep}`, boxShadow: `${shadow}` } : { backgroundColor: `${colorDeep}`, boxShadow: `${mobileShadow}` }}
        />
      </div>

      <div className = "lg:w-3/5 w-full lg:-mt-6 relative">
        <img  src={img} loading="eager" alt={img} className = "w-3/5 mx-auto" width = "500" height = "300"/>
      </div>
    </main>
  )
}

export default Hero