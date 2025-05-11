import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="w-[75vw] mx-auto">
      <footer className="text-white py-4 mx-auto w-full ">
        <div className="grid grid-cols-2 mt-10  md:text-[1rem]  text-[0.5rem]  "  >
          <div>
            <p>
              Készítette:{' '}
              <a
                href="https://goshawk.hu"
                target="_blank"
                className="text-neutral-200  hover:text-white"
                rel="noopener noreferrer"
              >
                Goshawk1337
              </a>
            </p>
          </div>
          <div>
            <p className='text-justify  text-neutral-200 hover:text-white'>
              Vas Vármegyei Szakképzési Centrum Eötvös Loránd Szakképző Iskola
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
