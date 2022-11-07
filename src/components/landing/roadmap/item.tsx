import Text16 from '../../typhography/text16';

const RoadmapItem = ({
  index,
  active,
}: {
  index: number;
  active?: boolean;
}) => {
  const titles = [
         'Research & Planning',
         'Pre-Launch Phase',
         'Pre-Launch Phase',
         'Launch',
                
                
  ];
  const contents = [
    'The management of the project team is established and market research is carried out.',
    'Plan and implementation of the development phase of the project.',
    'Marketing plan and start community building before going to market.',
    'Launch of our products: double rewarding system, referral program, jackpot games, SolarisPad, Incubation Program'
  ];
  return (
    <div className='flex items-center relative'>
      <div
        className={`${
          index % 2 === 0
            ? 'order-2 translate-x-[90vw] lg:translate-x-[49.5vw] 2xl:translate-x-[31vw] xl:mr-[10vw] 2xl:mr-0'
            : 'order-2 xl:order-1 translate-x-[90vw] lg:translate-x-[49.5vw] xl:translate-x-0 xl:ml-[10vw] 2xl:ml-0'
        } p-[1px] w-[521px] 2xl:w-[700px] rounded-tl-[40px] lg:rounded-tl-[70px] rounded-br-[40px] lg:rounded-br-[70px] overflow-hidden`}
      >
        <div
          className={`${
            active ? 'bg-gradient-to-r from-[#0F0F1E] to-[#396EB8]' : ''
          }`}
        >
          <div
            className={`${
              active ? 'bg-[#434353] animate-bgOpacity' : 'bg-[#434353]'
            } w-full h-full pt-[20px] pl-[20px] lg:pl-[30px] pr-[20px] md:pr-[35px] lg:pr-[37px] xl:pr-[57px] rounded-tl-[40px] lg:rounded-tl-[69px] rounded-br-[40px] lg:rounded-br-[69px] pb-[20px] md:pb-[30px]`}
          >
            <div className='text-white text-[16px] md:text-[32px] lg:text-[24px] xl:text-[30px] 2xl:text-[1.8vw] font-bold flex items-center justify-between'>
              {titles[index-1]}
              <span className='text-[20px] md:text-[36px] lg:text-[32px] xl:text-[3.125vw]'>
                0{index}
              </span>
            </div>
            <div className='2xl:pr-[44px]'>
              <Text16 pxSmall alignLeft>
                {contents[index-1]}
              </Text16>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          index % 2 === 0
            ? 'order-1 translate-x-[90vw] lg:translate-x-[49.5vw] 2xl:translate-x-[31vw]'
            : 'order-1 xl:order-2 translate-x-[90vw] lg:translate-x-[49.5vw] xl:translate-x-0'
        } h-[2.5px] w-[20vw] lg:w-[6vw] xl:w-[7vw] bg-white`}
      ></div>
      <div
        className={`absolute top-1/2 right-0 -translate-y-1/2 translate-x-[60%] md:translate-x-1/2 w-[20px] lg:w-[30px] xl:w-[40px] h-[20px] lg:h-[30px] xl:h-[40px] rounded-full bg-white p-[5px] lg:p-[8px] xl:p-[12px]`}
      >
        <div className='w-full h-full rounded-full bg-[#E1057D]' />
      </div>
    </div>
  );
};

export default RoadmapItem;
