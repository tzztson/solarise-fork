import MintButton from '../../components/button/mintButton';
import SpecialHeading from '../../components/typhography/specialHeading';
import AGSBoxContainer from '../../components/landing/about/agsBoxContainer';
import Text16 from '../../components/typhography/text16';
import Ellipse from '../../components/animBack/ellipse';

const AboutSection = () => {
  return (
    <section className='relative pt-[50px] md:pt-0 pb-0 md:pb-[60px] lg:pb-[220px] 2xl:max-w-[90vw] 2xl:mx-auto'>
      <div className='background'>
        <div className='absolute right-[50px] -top-[300px]'>
          <Ellipse width={254} height={600} />
        </div>
        <div className='absolute bottom-0 -translate-x-[350px] blur-[300px]'>
          <Ellipse width={1020} height={768} gradient />
        </div>
      </div>
      <SpecialHeading backText='about us' large>
        <span className='text-white font-bold text-[18px] md:text-[30px] lg:text-[30px] xl:text-[42px] 2xl:text-[2.5vw] tracking-[2px] uppercase flex items-center gap-[15px] 2xl:gap-[1.5vw]'>
          WHAT IS
          <span className='text-[24px] md:text-[40px] lg:text-[40px] xl:text-[58px] 2xl:text-[3vw]'>
            SOLARIS?
          </span>
        </span>
      </SpecialHeading>
      <Text16>
        Solaris is a deflationary yield farm protocol with various features designed to bring high APRs and double rewards, in addition to the most popular features like NFT farm boosting/launchpad etc.
      </Text16>
      <div className='mt-[30px] flex justify-center'>
        <MintButton type='COLORFUL' />
      </div>
      <div className='mt-[70px] lg:mt-[150px]'>
        <AGSBoxContainer />
      </div>
    </section>
  );
};

export default AboutSection;
