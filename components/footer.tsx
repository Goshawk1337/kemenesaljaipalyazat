import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className='w-[64.583vw] mx-auto '>
      <footer className="bg-neutral-900 text-white py-4 mx-auto">
        <div className="max-w-screen-xl mt-16 space-x-4">
          <p className="">Készítette: <a href="https://goshawk.hu" target='_blank' className="text-neutral-400 hover:text-white">Gosk</a></p>
        </div>
      </footer>
    </div>


  );
}

export default Footer;
