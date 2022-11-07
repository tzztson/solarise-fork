import ags_1 from '../../../resources/images/landing/team/pinksale.svg';
import ags_2 from '../../../resources/images/landing/team/interfi.svg';
import ags_3 from '../../../resources/images/landing/team/idopresales.svg';

import discord from '../../../resources/images/landing/banner/socials/discord.svg';
import twitter from '../../../resources/images/landing/banner/socials/twitter.svg';
import SocialLink from '../../socialLinks';

const TeamCard = ({ index }: { index: number }) => {
  const agsClassName =
    'absolute bottom-[9px] w-[100px] lg:w-[140px] xl:w-[186px] rounded-full';
  const agsImages = [
    <></>,
    <img src={ags_1} alt='ags_1' className={agsClassName} />,
    <img src={ags_2} alt='ags_2' className={agsClassName} />,
  ];
  const headings = ['', 'Uniwswap', 'Interfi Audit'];
  const contents = [
    '',
    '',
    '',
    '',
  ];

  return (
    <div className='group w-full h-[310px] md:h-[220px] lg:h-[350px] xl:h-[455px] bg-gradient-to-r from-[#396EB8] to-[#396EB8] rounded-[5px] p-[1px] lg:w-[280px] xl:w-[370px] 2xl:w-[437px]'>
      <div className='w-full h-full pt-[35px] md:pt-[0px] lg:pt-[35px] rounded-[4px] bg-[#0F0F1E] flex flex-col md:flex-row lg:flex-col items-center md:justify-around lg:justify-start'>
        <div className='relative w-[140px] lg:w-[180px] h-[140px] lg:h-[180px] xl:w-[242px] xl:h-[242px] flex justify-center items-center border-white border-[2px] rounded-full'>
          <div className='w-[120px] lg:w-[160px] h-[120px] lg:h-[160px] xl:w-[222px] xl:h-[222px] rounded-full bg-gradient-to-r from-[#000000] to-[#000000]'></div>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-[120px] lg:w-[160px] xl:w-[210px] h-[120px] lg:h-[160px] xl:h-[210px] group-first:bg-[#0F0F1E] bg-[#0F0F1E] blur-[50px] group-hover:animate-pulse'></div>
          {agsImages[index]}
        </div>
        <div className='pt-[20px] md:pt-0 lg:pt-[20px] text-white text-center'>
          <h3 className='font-bold text-[18px] md:text-[26px] lg:text-[20px] xl:text-[22px]'>
            {headings[index]}
          </h3>
          <p className='pt-[10px] lg:pt-0 text-[12px] md:text-[18px] lg:text-[12px] xl:text-[14px]'>
            {contents[index]}
          </p>
          <div className='pt-[15px] xl:pt-[30px] flex justify-center gap-[15px] lg:gap-[26px]'>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;