import { useState } from "react";

export default function Preview() {
  const [actualColor, setActualColor] = useState("p-5 bg-white");
  const [hidden, setHidden] = useState("border-2 border-black hidden");
  const [data, setData] = useState({
    //SCOPE -> candidate_read_curriculum_skills
    //get/curriculum/{curriculumId}/skill

    languages: [
      {
        id: 1,
        comments: "",
        category: 1301,
        writing: "Nulo",
        speaking: "Conversacion",
        reading: "Alto",
      },
      {
        id: 2,
        comments: "",
        category: 1301,
        writing: "Excelente",
        speaking: "Medio",
        reading: "Basico",
      },
      {
        id: 3,
        comments: "",
        category: 1301,
        writing: "Basico",
        speaking: "Alto",
        reading: "Excelente",
      },
    ],

    //SCOPE -> candidate_read_curriculum_personal_data
    //get/curriculum/{curriculumId}/personaldata
    name: "Diego Andres Molina Romero",
    country: "Colombia",
    province: "Bogota D.C.",
    country_province: "Colombia, Bogota D.C.", //Created
    mobile_phone: "1234567890",
    web_pages: "www.linkedin.com",
    freelance: "Disponible",
    nationalities: "Colombiano, Español",
    workPermits: "Colombia, Alemania, España",
  });

  function changeColor(event) {
    event.preventDefault();
    var id = event.target.id;
    switch (id) {
      case "red":
        setActualColor("bg-red-300");
        break;
      case "blue":
        setActualColor("bg-blue-300");
        break;
      case "orange":
        setActualColor("bg-orange-300");
        break;
      case "green":
        setActualColor("bg-green-300");
        break;
    }
  }

  function myFunction(event) {
    event.preventDefault();
    var x = event.target.id;
    if (hidden === "border-2 border-black hidden") {
      setHidden("border-2 border-black inline");
    } else {
      setHidden("border-2 border-black hidden");
    }
  }

  return (
    <main>
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="flex-shrink mx-4 text-xl font-mono">
          ¡Diseña tu CV!
        </span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <br />

      {/*Full container*/}
      <div className="grid grid-cols-6 gap-2">
        {/*Preview container*/}
        <div className="col-span-4 border-2 border-orange-800 h-screen md:p-2 sm:p-2 xs:p-1">
          {/*First option*/}
          {/**************/}
          <div className="grid grid-cols-6 gap-1 h-full">
            {/*border-2 border-pink-600*/}
            {/*First col*/}
            <div
              id="change"
              className={`col-span-2 border-2 border-green-800 md:p-2 sm:p-2 xs:p-1 ${actualColor}`}
            >
              {/*className="col-span-2 border-2 border-green-800 md:p-2 sm:p-2 xs:p-1"*/}
              {/*Name*/}
              <div className="md:pt-4 sm:pt-2 xs:pt-1 md:text-center sm:text-center xs:text-center">
                <span className="font-mono font-bold md:text-xl sm:text-sm xs:text-xs">
                  {data.name}
                </span>
              </div>
              {/*Line*/}
              <div className="relative flex py-1 items-center">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="flex-shrink mx-1 font-mono md:text-xl sm:text-sm xs:text-xs">
                  ⧫
                </span>
                <div className="flex-grow border-t border-gray-400"></div>
              </div>
              {/*Container info*/}
              <div className="md:pl-5 md:pr-2 sm:pl-2 sm:pr-2 xs: xs:">
                {/*
              country: "Colombia",
              province: "Bogota D.C.",
              mobile_phone: "1234567890",
              web_pages: "www.linkedin.com",
              freelance: "Disponible",
              nationalities: "Colombiano, Español",
              workPermits: "Colombia, Alemania, España",*/}
                <span className="font-mono block font-bold mt-4 md:text-xl sm:text-sm xs:text-xs">
                  DATOS PERSONALES
                </span>
                <span className="font-mono block font-bold mt-4 md:text-xl sm:text-sm xs:text-xs">
                  Teléfono
                </span>
                <span className="font-mono md:text-xl sm:text-sm xs:text-xs">
                  {data.mobile_phone}
                </span>
                <span className="font-mono block font-bold mt-4 md:text-xl sm:text-sm xs:text-xs">
                  Lugar de residencia
                </span>
                <span className="font-mono md:text-xl sm:text-sm xs:text-xs">
                  {data.country_province}
                </span>
                <span className="font-mono block font-bold mt-4 md:text-xl sm:text-sm xs:text-xs">
                  Nacionalidad
                </span>
                <span className="font-mono md:text-xl sm:text-sm xs:text-xs">
                  {data.nationalities}
                </span>
              </div>
            </div>
            {/*Second col*/}
            <div className="col-span-4 border-2 border-amber-500 md:p-2 sm:p-2 xs:p-1">
              <span className="font-mono block font-bold mt-4 md:text-xl sm:text-sm xs:text-xs">
                Idiomas
              </span>
              {/*ALL LANGUAGES*/}
              <span className="font-mono block font-bold md:text-xl sm:text-sm xs:text-xs">
                {data.languages[0].id}
              </span>
              <span className="font-mono block md:text-xl sm:text-sm xs:text-xs">
                Habla:{data.languages[0].speaking}
              </span>
              <span className="font-mono block md:text-xl sm:text-sm xs:text-xs">
                Lectura:{data.languages[0].reading}
              </span>
              <span className="font-mono block md:text-xl sm:text-sm xs:text-xs">
                Escritura:{data.languages[0].writing}
              </span>
              {/******/}
              <span className="font-mono block font-bold md:text-xl sm:text-sm xs:text-xs">
                {data.languages[1].id}
              </span>
              <span className="font-mono block md:text-xl sm:text-sm xs:text-xs">
                Habla{data.languages[1].speaking}
              </span>
              <span className="font-mono block md:text-xl sm:text-sm xs:text-xs">
                Lectura:{data.languages[1].reading}
              </span>
              <span className="font-mono block md:text-xl sm:text-sm xs:text-xs">
                Escritura:{data.languages[1].writing}
              </span>
              {/*ALL LANGUAGES*/}
            </div>
          </div>
          {/**************/}
        </div>
        {/*Option container*/}
        <div className="col-span-2 border-2 border-blue-800 md:p-2 sm:p-2 xs:p-1">
          <span className="font-mono md:text-lg sm:text-sm xs:text-sm">
            Seleccione un color
          </span>

          <br />
          <div className="border-2 border-red-800 flex justify-center my-10 md:h-16 xs:h-11">
            <div className="border-2 border-violet-800 flex justify-center md:w-3/12 xs:w-3/5">
              {" "}
              {/*border-2 border-violet-800 flex justify-center md::w-3/12 sm::w-screen*/}
              <div className="flex justify-center border-2 rounded-full border-black w-3/4">
                {" "}
                {/*w-3/4*/}
                <button
                  id="red"
                  className="font-mono border-2 border-black mx-auto my-auto md:p-4 sm:p-2 xs:p-2 rounded-full bg-red-500 hover:bg-red-600 duration-300"
                  onClick={(e) => changeColor(e)}
                >
                  {/*max-w-md p-4 mx-auto mt-4 bg-gray-200 sm:shadow-md sm::rounded-md sm:bg-gray-100 sm:p-6 md:bg-green-800*/}
                  {/*font-mono border-2 border-black p-2 m-3 w-1/6 rounded-full bg-red-500 hover:bg-cyan-600 duration-300*/}
                </button>
                <button
                  id="blue"
                  className="font-mono border-2 border-black mx-auto my-auto md:p-4 sm:p-2 xs:p-2 rounded-full bg-blue-500 hover:bg-blue-600 duration-300"
                  onClick={(e) => changeColor(e)}
                ></button>
                <button
                  id="orange"
                  className="font-mono border-2 border-black mx-auto my-auto md:p-4 sm:p-2 xs:p-2 rounded-full bg-orange-500 hover:bg-orange-600 duration-300"
                  onClick={(e) => changeColor(e)}
                ></button>
                <button
                  id="green"
                  className="font-mono border-2 border-black mx-auto my-auto md:p-4 sm:p-2 xs:p-2 rounded-full bg-green-500 hover:bg-green-600 duration-300"
                  onClick={(e) => changeColor(e)}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <div className={actualColor}>HOLA</div>

      <button onClick={(e) => myFunction(e)}>Clickeame</button>

      <div className={hidden} id="myDIV">
        Este elemento aparece y desaparece con el botón
      </div>
    </main>
  );
}
