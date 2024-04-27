import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import { HorizontalTicker } from "react-infinite-ticker";
import monkeyImage from './dcb1.png'; // Import the monkey image
import Xlogo from './xlogo.jpg';
import TG from './tg.png';
import './App.css';
import TweetButton from './TweetButton';
import Marquee from "react-fast-marquee";

function App() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("Bjj44cJrTMogwHvQ9sK8RaMeE5P3pALycMPdMws9gMfX");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000); // Hide the message after 2 seconds
  };

  return (
    <div>
      <div className="banana-cursor h-[94vh] md:min-h-[97vh] w-screen flex justify-center items-center bg-cover bg-center relative overflow-clip z-10" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/bg1.jpg)`}}>
        <div className=''>
          <div className='text-center font-custom font-bold -mt-[50%] md:-mt-[40%] mb-[10%]'>
            <h1 className='text-[84px] leading-none sm:text-[130px] md:text-[150px] lg:text-[180px] 2xl:text-[210px]'>DOGECAT</h1>
            <h2 className='-mt-3 text-2xl md:text-4xl'>POWERED BY SOLANA</h2>
          </div>
          <motion.img 
            src={monkeyImage} 
            alt="Monkey" 
            className="mt-6 mb-6 w-[80%] lg:w-[40%] h-auto absolute translate-x-2 -bottom-[15%] left-[10%] sm:-bottom-[10%] md:left-[10%] lg:bottom-[2%] lg:left-[1%] -z-10" 
            animate={{
              rotate: [-3, 3], // Rotate from -5 degrees to 5 degrees and back
            }}
            transition={{
              duration: 1.5, // Animation duration
              repeat: Infinity, // Repeat infinitely
              repeatType: "reverse", // Reverse animation direction on each repeat
              ease: "easeInOut", // Easing function
            }}
          /> {/* Image */}
          <div className='lg:absolute lg:bottom-[25%] lg:right-[20%] flex justify-center'>
            <div className='grid content-center z-40'>
              <a
                href="/"
                className='lg:-rotate-3 font-custom text-4xl md:text-5xl lg:text-6xl bg-amber-400 p-6 rounded-xl border-2 border-black ring-4 ring-amber-600 ring-opacity-80 ring-offset-4 hover:scale-105 transition ease-in-out duration-200'
              >
                BUY NOW
              </a>
              <div className='pt-8 text-center font-custom text-2xl lg:-rotate-3 flex justify-center -mt-3'>
                <a href="https://twitter.com/dogecatonsol" className='p-2 hover:scale-110 transition ease-in-out duration-200'><img src={Xlogo} alt='Xlogo' className='w-12 h-12 rounded-md'></img></a>
                <a href="https://t.me/dogecatonsol" className='p-2 hover:scale-110 transition ease-in-out duration-200'><img src={TG} alt='Tg logo' className='w-12 h-12'></img></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Marquee speed={90}>
        <div className='h-16 flex items-center text-[30px] lg:text-5xl font-custom whitespace-nowrap border-y-2 border-black'>$DC $DC $DC $DC $DC $DC $DC $DC $DC $DC $DC $DC $DC $DC $DC $DC $DC $DC $DC $DC $DC $DC $DC $DC $DC $DC $DC&nbsp;</div>
      </Marquee>
      <div className='h-min w-screen flex justify-center bg-amber-400'>
        <div className='grid w-full'>
          <div className='pt-[10%] font-custom text-5xl md:text-6xl lg:text-8xl text-center'>
            Tokenomics
          </div>
          <div className='flex justify-center w-full'>
            <div className='bg-black rounded-xl h-[300px] w-[75%] md:w-[65%] mt-[5%] mb-[5%]'>
              <div className='w-full h-full flex justify-center items-center text-white font-custom text-4xl md:text-5xl lg:text-6xl'>
                <div className='grid text-center'>
                  total supply
                  <div className="text-center pt-[2%] text-2xl md:text-4xl mx-6">
                    1,000,000,000 $DC
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center w-full'>
            <div className='bg-black rounded-xl h-[300px] w-[75%] md:w-[65%] mb-[10%]'>
              <div className='w-full h-full flex justify-center items-center text-white font-custom text-4xl md:text-5xl lg:text-6xl'>
                <div className='grid text-center'>
                  token address
                  <div className="text-center pt-[2%] text-2xl md:text-4xl break-all mx-12">
                    Bjj44cJrTMogwHvQ9sK8RaMeE5P3pALycMPdMws9gMfX
                  </div>
                  <div className='flex justify-center'>
                    <button
                      className="text-xl mt-2 p-2 w-min bg-gray-800 text-white rounded-md hover:bg-gray-600 transition ease-in-out duration-150"
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