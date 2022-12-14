import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Logo = ({ mintPage, top }: { mintPage?: boolean; top?: boolean }) => {
  return mintPage ? (
    <Link
      to='/'
      className='font-bold py-[15px] text-[52px] lg:text-[28px] xl:text-[34px] 2xl:text-[50px] text-white'
    >
      SOLARIS
    </Link>
  ) : (
    <ScrollLink
      smooth={true}
      offset={-300}
      duration={500}
      to='HOME'
      className='cursor-pointer font-bold text-[42px] lg:text-[28px] xl:text-[20px] text-white'
    >
      <span
        className={`${
          top &&
          'hidden md:block absolute lg:static top-1 -translate-x-5'
        } `}
      >
        SOLARIS
      </span>
    </ScrollLink>
  );
};

export default Logo;
