import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="w-[64.583vw] mx-auto">
      <footer className="text-white py-4 mx-auto">
        <div className="flex flex-row max-w-screen-xl mt-16 gap-x-6">
          <p>
            Készítette:{' '}
            <a
              href="https://goshawk.hu"
              target="_blank"
              className="text-neutral-200 hover:text-white"
              rel="noopener noreferrer"
            >
              Biri Zsombor
            </a>
          </p>
          <p className='ml-10 text-neutral-200 hover:text-white'>
            Vas Vármegyei Szakképzési Centrum Eötvös Loránd Szakképző Iskola
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
