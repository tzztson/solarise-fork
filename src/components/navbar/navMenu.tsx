import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
const NavMenu = ({
  startRoadmap,
  available,
  onClick,
}: {
  startRoadmap?: any;
  available?: boolean;
  onClick?: any;
}) => {
  return (
    <>
      <ScrollLink
        onClick={onClick}
        to='ABOUT'
        spy
        hashSpy
        smooth={true}
        offset={0}
        duration={500}
        activeClass='nav_link_active'
        className={`${startRoadmap ? 'nav_link' : 'sidebar_link'}`}
      >
        WHAT IS SLR
      </ScrollLink>
      <ScrollLink
        onClick={onClick}
        to='UTILITY'
        spy
        hashSpy
        smooth={true}
        offset={0}
        duration={500}
        activeClass='nav_link_active'
        className={`${startRoadmap ? 'nav_link' : 'sidebar_link'}`}
      >
        {`BENIFITS & UTILITY`}
      </ScrollLink>
      <ScrollLink
        onClick={onClick}
        smooth={true}
        offset={0}
        duration={500}
        to='ROADMAP'
        spy
        hashSpy
        activeClass='nav_link_active'
        className={`${startRoadmap ? 'nav_link' : 'sidebar_link'}`}
        onSetActive={startRoadmap}
      >
        ROADMAP
      </ScrollLink>
      <Link
        to={"//solaris-financee.gitbook.io/solaris-finance-ethw/"}
      >
        Docs
      </Link>
            <Link
        to={"//solarisfinance.app/pitchdeck/pitchdeck.pdf"}
      >
        Pitch-Deck
      </Link>
      <ScrollLink
        onClick={onClick}
        smooth={true}
        offset={0}
        duration={500}
        to='FAQ'
        activeClass='nav_link_active'
        className={`${startRoadmap ? 'nav_link' : 'sidebar_link'}`}
      >
        FAQS
      </ScrollLink>
    </>
  );
};

export default NavMenu;
