import { Link } from 'react-router-dom';

const MintButton = ({ type, mintPage }: buttonType) => {
  return (
    <Link
      to={"//www.farm.solarisfinance.app"}
      className={`cursor-pointer overflow-hidden ${
        mintPage ? 'hidden' : 'block'
      } ${
        type === 'COLORFUL' ? 'w-[150px]' : 'w-[150px] lg:w-[170px]'
      }  hover:animate-pulse xl:w-[220px] h-[40px] xl:h-[64px] transition-all duration-200 hover:rounded-tr-[100px] hover:rounded-bl-[100px]`}
    >
      <div
        className={`group w-full h-full flex items-center  ${
          type === 'COLORFUL'
            ? 'bg-gradient-to-r from-[#D95C6B] to-[#D95C6B] hover:bg-gradient-to-l'
            : 'bg-[#D95C6B] hover:bg-gradient-to-r hover:from-[#D95C6B] hover:to-[#5480BE]'
        }`}
      >
        <div
          className={`w-full uppercase font-bold text-[13px] lg:text-[13px] xl:text-[14px] text-center ${
            type === 'COLORFUL'
              ? 'text-white group-hover:text-slate-700'
              : 'text-[#03041A] group-hover:text-white'
          }`}
        >
          {type !== 'COLORFUL' ? (
            'Open DAPP'
          ) : (
            <>
              <span className='lg:hidden'>{'Open DAPP!'}</span>
              <span className='hidden lg:block'>{'Open DAPP!'}</span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

interface buttonType {
  type?: string;
  mintPage?: boolean;
}

export default MintButton;
