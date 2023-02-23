import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="py-[3rem] ">
      <div className="flex flex-row justify-center py-[2rem] text-[2rem]">

        <FaInstagram className="mr-[1rem] hover:text-gray-600"/>
        <FaFacebook className=" hover:text-gray-600"/>
      </div>
      <article className="flex flex-row text-[1rem] justify-around">
        <p>Dos Alas 2022 © All rights are reserved</p>


        <ul className="flex flex-row">
          <li className="mx-[1rem] hover:font-semibold hover:text-gray-600">
            <a href="https://dosalas.cl/#quienes-somos">Quienes somos</a>
          </li>
          <li className="mx-[1rem hover:font-semibold hover:text-gray-600">
            <a href="https://dosalas.cl/#que-hacemos">Que hacemos</a>
          </li>
          <li className="mx-[1rem] hover:font-semibold hover:text-gray-600">
            <a href="https://dosalas.cl/#casos-y-noticias">Casos y noticias</a>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Footer;
