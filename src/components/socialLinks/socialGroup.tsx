import SocialLink from './index';

const SocialGroup = ({ noOriginal }: { noOriginal?: boolean }) => {
  return (
    <div className='socials flex items-center gap-[20px] xl:gap-[32px] 2xl:gap-[60px]'>
      <SocialLink type='TELEGRAM' to={"//t.me/solarisfinance"} />
      <SocialLink type='YOUTUBE' to={"//www.farm.solarisfinance.app"} />
      <SocialLink type='DISCORD' to={"//www.farm.solarisfinance.app"} />
      <SocialLink type='TWITTER' to={"//twitter.com/solarisethw"} />
    </div>
  );
};

export default SocialGroup;
