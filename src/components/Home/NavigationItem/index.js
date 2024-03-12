import { Link } from 'react-router-dom';

const NavigationItem = ({ to, pageName, currentPage, onClick }) => {
  return (
    <li>
      <Link
        className={`flex font-Source items-center justify-center ${currentPage === pageName ? 'text-color2' : 'text-color3'} text-[8px] py-[3px] px-[4px] ml-[8px] md:ml-[30px] md:text-[16px] transition delay-100 duration-300 relative overflow-hidden hover:text-color2 group `}
        to={to}
        onClick={() => onClick(pageName)}
      >
        {pageName}
        {currentPage === pageName ?
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-color2 rounded"></div>
          :
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-color2 origin-left rounded transform scale-x-0 transition-transform delay-100 duration-300 group-hover:scale-x-100"></div>
        }

      </Link>

    </li>
  );
};

export default NavigationItem;
