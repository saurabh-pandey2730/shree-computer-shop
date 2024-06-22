
import { FaComputer } from "react-icons/fa6";
import { AiFillSlackCircle ,AiFillSetting } from "react-icons/ai";
export default function Services() {
  return (
    <div className="mb-12">
      <h1 className="text-center text-3xl hover:text-4xl font-bold mt-5 hover:text-blue-700 "> Our Services</h1>
      <div className="grid grid-cols-2 gap-6 m-4 lg:grid-cols-4  sm:grid-cols-2 md:grid-cols-3 flex justify-center lg:ml-36 lg:mt-8 ">
      <div className="h-44 w-44 hover:bg-white bg-blue-700 text-cyan-50  hover:text-red-600 rounded-lg hover:scale-105">
    <h2 className="text-center font-bold mt-3 text-xl  ">General services</h2>
   
    <div className="w-[95px] h-[95px] bg-white hover:bg-red-500 ml-10 mt-4 rounded-full">
    <FaComputer className="w-[80px] h-[80px] ml-1 pt-3 pl-1 text-blue-700  hover:text-white " />
    </div>
  </div>
  <div className="h-44 w-44 hover:bg-white bg-blue-700 text-cyan-50  hover:text-red-600 rounded-lg hover:scale-105">
    <h2 className="text-center font-bold mt-3 text-xl  ">Rental services</h2>
   
<div className="w-[95px] h-[95px] bg-white hover:bg-red-500 ml-10 mt-4 rounded-full">
    {/* <FaComputer className="w-[86px] h-[86px] ml-3 pt-6 text-blue-700  hover:text-white " /> */}
    <svg className="w-[90px] h-[90px] hover:text-white text-blue-700 mt-1 pl-2 pt-2  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 12c.263 0 .524-.06.767-.175a2 2 0 0 0 .65-.491c.186-.21.333-.46.433-.734.1-.274.15-.568.15-.864a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 12 9.736a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 16 9.736c0 .295.052.588.152.861s.248.521.434.73a2 2 0 0 0 .649.488 1.809 1.809 0 0 0 1.53 0 2.03 2.03 0 0 0 .65-.488c.185-.209.332-.457.433-.73.1-.273.152-.566.152-.861 0-.974-1.108-3.85-1.618-5.121A.983.983 0 0 0 17.466 4H6.456a.986.986 0 0 0-.93.645C5.045 5.962 4 8.905 4 9.736c.023.59.241 1.148.611 1.567.37.418.865.667 1.389.697Zm0 0c.328 0 .651-.091.94-.266A2.1 2.1 0 0 0 7.66 11h.681a2.1 2.1 0 0 0 .718.734c.29.175.613.266.942.266.328 0 .651-.091.94-.266.29-.174.537-.427.719-.734h.681a2.1 2.1 0 0 0 .719.734c.289.175.612.266.94.266.329 0 .652-.091.942-.266.29-.174.536-.427.718-.734h.681c.183.307.43.56.719.734.29.174.613.266.941.266a1.819 1.819 0 0 0 1.06-.351M6 12a1.766 1.766 0 0 1-1.163-.476M5 12v7a1 1 0 0 0 1 1h2v-5h3v5h7a1 1 0 0 0 1-1v-7m-5 3v2h2v-2h-2Z"/>
</svg>
    </div>
  </div>
  <div className="h-44 w-44 hover:bg-white bg-blue-700 text-cyan-50  hover:text-red-600 rounded-lg hover:scale-105">
    <h2 className="text-center font-bold mt-3 text-xl  ">Repair services</h2>
   
    <AiFillSetting className="w-[104px] h-[104px] mt-3 ml-9 "/>
  </div>
  <div className="h-44 w-44 hover:bg-white bg-blue-700 text-cyan-50  hover:text-red-600 rounded-lg hover:scale-105">
    <h2 className="text-center font-bold mt-3 text-xl  ">Parts wholeseller</h2>
    <AiFillSlackCircle  className="w-[104px] h-[104px] mt-3 ml-9 "/>
  </div>
 

  {/* <div className="h-44 w-44 bg-slate-300">01</div> */}


  
  
 
</div>
    </div>
  )
}
