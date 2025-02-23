import { hamburger } from "../assets/icons";

const Hamburger = () => {
  return (
    <div className="hidden max-lg:block   ">
      <button className="  border-2 rounded-full p-3  hover:bg-white fixed  sm:bottom-16 sm:right-11 z-10 bg-coral-red hover:border-black right-6 bottom-6">
        <img
          src={hamburger}
          // onClick={handleHamburgerClick}
          alt=" hamburger"
          width={25}
          height={25}
        />
      </button>
    </div>
  );
};

export default Hamburger;
