import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HorizontalTicker } from "react-infinite-ticker";
import monkeyImage from './gigi.png';
import Xlogo from './xlogo.jpg';
import TG from './tg.png';
import DT from './dextools.svg';
import Marquee from "react-fast-marquee";

function App() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("EZUFNJMZTBpungQX2czEb9ZyCMjtdzsDGMK4UywDUa1F");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-sky-400 banana-cursor flex flex-col justify-between">
      {/* Sticky Navbar */}
      <div className="fixed top-2 left-0 right-0 z-50">
        <div className="w-[95%] h-[85px] mx-auto bg-white rounded-full flex justify-between items-center px-6">
          <div className="font-custom text-5xl text-amber-400 pl-[5%]">
            $GIGI
          </div>
          <div className="pr-[5%]">
            <a
              href="https://www.dextools.io/app/en/solana/pair-explorer/7y3KMHA91JEBoQ67P3mEJtVvXLg62FjWR1VDHhEFSX8Z?t=1715720852830"
              className="font-custom text-2xl md:text-3xl bg-amber-400 p-3 rounded-full border-2 border-black hover:scale-105 transition ease-in-out duration-200"
            >
              BUY NOW
            </a>
          </div>
        </div>
      </div>

      <div className='fixed bottom-8 right-8 z-50 bg-white p-5 font-custom rounded-full hidden md:block'>
        Powered by Community
      </div>

      {/* Main Content */}
      <div className="h-screen flex-grow flex justify-center items-center bg-cover bg-center relative overflow-clip z-10" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/gigi3.png)` }}>
        <div className=''>
          <div className='text-center font-custom font-bold mb-[5%]'>
            <h1 className='leading-none text-[150px] md:text-[180px] lg:text-[220px] 2xl:text-[260px] text-amber-400'>GIGI</h1>
          </div>
          <div className='flex justify-center'>
            <div className='grid content-center z-40'>
              <a
                href="https://www.dextools.io/app/en/solana/pair-explorer/7y3KMHA91JEBoQ67P3mEJtVvXLg62FjWR1VDHhEFSX8Z?t=1715720852830"
                className='font-custom text-4xl md:text-5xl lg:text-6xl bg-amber-400 p-6 rounded-xl border-2 border-black ring-4 ring-amber-600 ring-opacity-80 ring-offset-4 hover:scale-105 transition ease-in-out duration-200'
              >
                BUY NOW
              </a>
              <div className='pt-8 text-center font-custom text-2xl flex justify-center -mt-3'>
                <a href="https://www.dextools.io/app/en/solana/pair-explorer/7y3KMHA91JEBoQ67P3mEJtVvXLg62FjWR1VDHhEFSX8Z?t=1715720852830" className='p-2 hover:scale-110 transition ease-in-out duration-200'><img src={DT} alt='Xlogo' className='w-12 h-12 rounded-md'></img></a>
                <a href="https://twitter.com/gigithedoge" className='p-2 hover:scale-110 transition ease-in-out duration-200'><img src={Xlogo} alt='Xlogo' className='w-12 h-12 rounded-md'></img></a>
                <a href="https://t.me/gigcoinsol" className='p-2 hover:scale-110 transition ease-in-out duration-200'><img src={TG} alt='Tg logo' className='w-12 h-12'></img></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <Marquee speed={90}>
        <div className='h-16 flex items-center text-[30px] lg:text-5xl font-custom whitespace-nowrap border-y-2 border-black bg-white'> $gigi $gigi $gigi $gigi $gigi $gigi $gigi $gigi $gigi $gigi $gigi $gigi $gigi $gigi $gigi $gigi&nbsp;</div>
      </Marquee>

      {/* Tokenomics */}
      <div className='h-min w-screen flex justify-center bg-amber-400'>
        <div className='grid w-full'>
          <div className='pt-[10%] font-custom text-5xl md:text-6xl lg:text-8xl text-center'>
            Tokenomics
          </div>
          <div className='flex justify-center w-full'>
            <div className='bg-white rounded-xl h-[300px] w-[75%] md:w-[65%] mt-[5%] mb-[5%]'>
              <div className='w-full h-full flex justify-center items-center font-custom text-4xl md:text-5xl lg:text-6xl'>
                <div className='grid text-center'>
                  total supply
                  <div className="text-center pt-[2%] text-2xl md:text-4xl mx-6">
                    1,000,000,000 $GIGI
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center w-full'>
            <div className='bg-white rounded-xl h-[300px] w-[75%] md:w-[65%] mb-[10%]'>
              <div className='w-full h-full flex justify-center items-center font-custom text-4xl md:text-5xl lg:text-6xl'>
                <div className='grid text-center'>
                  token address
                  <div className="text-center pt-[2%] text-2xl md:text-4xl break-all mx-12">
                    EZUFNJMZTBpungQX2czEb9ZyCMjtdzsDGMK4UywDUa1F
                  </div>
                  <div className='flex justify-center'>
                    <button
                      className="text-xl mt-2 p-2 w-min bg-black text-white rounded-md hover:bg-gray-600 transition ease-in-out duration-150"
                      onClick={handleCopy}
                    >
                      {copied ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


/*<TweetButton className="mt-2" tweetText="It's a doge, it's a cat, it'...@dogecatonsol $DOGECAT" solAddress="<input SOL address here>"/>
<motion.div className="pt-8 flex items-center gap-2">
  <motion.div
    initial={{ y: -3 }} // Adjusted initial position
    animate={{
      y: [3, -3, 3, 0, 3, -3, 3, 0], // Adjusted motion range
      transition: { duration: 2.5, repeat: Infinity, repeatType: 'reverse' } // Increased duration
    }}
  >
    <div className="text-3xl font-custom">
      <a href="https://x.com/dogecatonsol" target="_blank" rel="noopener noreferrer" className="block p-2">
        FOLLOW ON
      </a>
    </div>
  </motion.div>
  <a href="https://x.com/dogecatonsol" target="_blank" rel="noopener noreferrer">
    <motion.img
      src={Xlogo}
      alt="X Logo"
      className="w-9 h-9 -mt-1 rounded-md"
      initial={{ y: -3 }} // Adjusted initial position
      animate={{
        y: [3, -3, 3, 0, 3, -3, 3, 0], // Adjusted motion range
        transition: { duration: 2.5, repeat: Infinity, repeatType: 'reverse' } // Increased duration
      }}
    />
  </a>
</motion.div>*/