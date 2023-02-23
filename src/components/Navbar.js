import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  const [showNav, setShowNav] = useState(false);

  const navbarHandler = (e) => {
    e.preventDefault();
    setShowNav(!showNav);
  };

  return (
    <section className="relative">
      <article
        className={`fixed  ${
          visible ? "h-[6rem]" : "h-[4rem]"
        } px-[2rem] bg-white w-full ease-out duration-300 flex flex-row items-center justify-center`}
      >
        <RxHamburgerMenu
          className="text-black text-[2.5rem]"
          onClick={navbarHandler}
        />
        <img src="/images/logo.png" alt="" className="w-[12rem] mx-auto" />
      </article>

      <article
        className={
          showNav
            ? "absolute bottom-full duration-300 ease-in-out"
            : " absolute bg-white w-full -top-full  duration-300 ease-in-out"
        }
      >
        <AiOutlineClose onClick={navbarHandler} className="text-[3rem] text-right  my-[2rem] font-bold text-gray-500 w-full "/>

        <ul className="py-[15rem] text-center flex flex-col justify-center text-[1.5rem] font-light ">
          <li className="hover:text-[#EC5095] my-[1rem]"><a href="https://dosalas.cl/#quienes-somos">Quienes somos</a></li> 
          <li className="hover:text-[#EC5095] my-[1rem]"><a href="https://dosalas.cl/#que-hacemos">Que hacemos</a></li> 
          <li className="hover:text-[#EC5095]  my-[1rem]"><a href="https://dosalas.cl/#casos-y-noticias">Casos y noticias</a></li> 
          <li className="hover:text-[#EC5095]  my-[1rem]"><a href="https://dosalas.cl/#casos-y-noticias">Get in touch!</a></li> 

        </ul>
      </article>
    </section>
  );
};

export default Navbar;
