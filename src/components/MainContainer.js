const MainContainer = () => {

  return (
    <section className="flex flex-row bg-gradient-to-r from-black via-gray-700 to-black pt-[8rem]">
      <article className="py-[3rem]  text-white pl-[7.5rem] w-[50%]">
        <p className="text-[3rem] font-semibold">CONTÁCTANOS</p>
        <p className="text-[2rem] w-[85%] py-[2rem] font-[400]">
          permítenos ponernos en contacto y descubre cómo podemos ayudar a tu
          marca.
        </p>
        <p className=" text-[.9rem] w-1/3">
          Horario de atención de lunes a jueves de 9 am a 6 pm y viernes de 9 a
          3 pm
          <br />
          Tel: 5563921100
        </p>
      </article>
      <article className="py-[3rem] pr-[7.5rem] mx-auto">
        <form className="flex flex-col w-[25rem]">
          <input type="text" placeholder="Nombre y apellido"  className="py-[.5rem] my-[1rem] border-b-2 border-gray-100 bg-transparent text-white"/>

          <input type="email" placeholder="Email" className="py-[.5rem] my-[1rem] border-b-2 border-gray-100 bg-transparent text-white"/>
          <input type="tel" placeholder="Teléfono" className="py-[.5rem] my-[1rem] border-b-2 border-gray-100 bg-transparent text-white"/>

          

          <textarea placeholder="Cómo te podemos ayudar?" className="py-[.5rem] my-[1rem] border-b-2 border-gray-100 bg-transparent text-white"></textarea>
          
          <button type="submit" className="py-[.5rem] my-[1rem] bg-white w-1/4 rounded-md mx-auto font-semibold">Enviar</button>
        </form>
        
      </article>
    </section>
  );
};

export default MainContainer;
