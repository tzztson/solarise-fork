import ags_1 from '../../../resources/images/landing/banner/ags_1.svg';
import ags_2 from '../../../resources/images/landing/banner/ags_2.svg';
import ags_3 from '../../../resources/images/landing/banner/ags_3.svg';

const AGSBoys = ({ right }: { right?: boolean }) => {
  const leftOne = (
    <>
      <img
        src={ags_1}
        alt='ags_1'
        className='w-[200px] xl:w-[257px] -rotate-[15deg] -translate-x-[100px] lg:-translate-y-[60px] xl:-translate-y-[200px]'
      />
      <img
        src={ags_2}
        alt='ags_2'
        className='lg:w-[180px] xl:w-[206px] -translate-x-[100px] xl:-translate-x-[150px]'
      />
    </>
  );
  const rightOne = (
    <>
      <img
        src={ags_2}
        alt='ags_2'
        className='order-2 w-[140px] lg:w-[100px] xl:w-[252px] rotate-[10deg] lg:-translate-y-[10px] xl:-translate-y-[90px] translate-x-[70px] lg:translate-x-[100px] xl:translate-x-[80px]'
      />
      <img
        src={ags_1}
        alt='ags_1'
        className='order-1 lg:w-[25px] xl:w-[258px] translate-y-[10px] translate-x-[110px]'
      />

    </>
  );

  return (
    <div
      className={`${
        right ? 'justify-end' : ''
      } lg:pt-[60px] xl:pt-[120px] pb-[20px] lg:pb-[50px] w-full hidden lg:flex`}
    >
      {right ? rightOne : leftOne}
    </div>
  );
};

export default AGSBoys;
