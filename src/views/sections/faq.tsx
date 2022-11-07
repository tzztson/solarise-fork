import Ellipse from '../../components/animBack/ellipse';
import Disclosure from '../../components/landing/faq/disclosure';
import SpecialHeading from '../../components/typhography/specialHeading';

import curve from '../../resources/images/landing/faq/curve.svg';

const FAQSection = () => {
  const questions = ['How to connect your Metamask To Ethereum POW?','When and where can i buy Solaris token?', 'where will be the solaris finance pre-sale?', 'Why Solaris rewarding system is unique?', 'Are your contracts audited?', 'question6'];
  const answers = [
    'https://solaris-financee.gitbook.io/solaris-finance-ethw/important/how-to-use-ethereum-pow',
    'Solaris Finance will launch on Uniwswap launchpad platform at 20th Oct. 9.00 UTC.',
    'You can join on our Pre-Sale here: https://farm.uniwswap.com/launchpad',
    'Solaris is using a new type  of solution to provide the Uniw + ETHW rewards.  on each transaction, the fees generated are automatically transferred to the staking pool, and we have implemented other mechanism like early unstaking  penalties.',
    'Our contracts audited by a third-party auditor(InterFi), and passed all internal tests by our and the launchpad team. ',
  ];

  return (
    <section className='relative pt-[20px] pb-[20px] lg:pb-0 lg:pt-[50px] xl:pt-[100px] bg-[#2C1970] bg-opacity-30 px-[30px] md:px-[70px] lg:px-[100px] xl:px-[150px] 2xl:px-[15vw] flex flex-col'>
      <div className='background'>
        <img
          src={curve}
          alt='faq_curve'
          className='absolute right-0 -top-[300px] opacity-30 hidden'
        />
        <div className='absolute top-[60px] -left-[200px] blur-[177px] rotate-180'>
          <Ellipse width={600} height={465} gradient />
        </div>
        <div className='absolute -top-[200px] -right-[200px] blur-[300px] rotate-90'>
          <Ellipse width={786} height={786} gradient />
        </div>
        <div className='absolute w-[378px] h-[536px] -top-[10px] -right-[160px] bg-gradient-to-b from-[#184BFF55] to-[#174AFF] blur-[200px] opacity-50'></div>
      </div>
      <SpecialHeading backText='FAQS' backLeft>
        <span className='font-bold text-[20px] md:text-[32px] xl:text-[36px] 2xl:text-[2.5vw] text-white uppercase tracking-[2px]'>
          Any Questions
          <br className='2xl:hidden' /> We have got you covered?
        </span>
      </SpecialHeading>
      <div className='pt-[45px] lg:pt-[75px] flex flex-col gap-[15px] z-10'>
        <Disclosure title={questions[0]} content={answers[0]} />
        <Disclosure title={questions[1]} content={answers[1]} />
        <Disclosure title={questions[2]} content={answers[2]} />
        <Disclosure title={questions[3]} content={answers[3]} />
        <Disclosure title={questions[4]} content={answers[4]} />
      </div>
    </section>
  );
};

export default FAQSection;