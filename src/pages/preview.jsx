import Layout from "@/components/Layout";
import { useState, useEffect } from "react";

export default function Preview() {
  //const [actualColor, setActualColor] = useState("red-300"); //red-300
  const [actualColor, setActualColor] = useState([
    "bg-red-300",
    "border-red-300",
    "text-red-300",
  ]);
  const [Text, setText] = useState("");
  const [hidden, setHidden] = useState({
    optionOne: "",
    optionTwo: "hidden",
    optionThree: "hidden",
  });
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

    //candidate_read_curriculum_future_job
    //get/curriculum/{curriculumId}/futurejob
    preferredPosition: "Desarrollador Software",

    //candidate_read_curriculum_experience
    //get/curriculum/{curriculumId}/experience/{experienceId}
    company: "Uniminuto",
    job: "Desarrollador",
    startingDate_experience: "2006-09-14", //Original -> startingDate
    finishingDate_experience: "2011-06-14", //Original -> finishDate
    description:
      "Programming as a web developer in several languages like Java, Javascript, HTML, SQL, ...",

    //candidate_read_curriculum_education
    //get/curriculum/{curriculumId}/education
    educationLevelCode: "formacion-profesional-grado-superior",
    courseName: "actividades-agrarias",
    startingDate_education: "2005-10-01", //Original -> startingDate
    finishingDate_education: "2006-11-01", //Original -> finishDate
    institutionName: "Broward Community College",
  });

  function showCV(event) {
    event.preventDefault();
    var id = event.target.id;
    switch (id) {
      case "optionOne":
        setHidden({
          optionOne: "",
          optionTwo: "hidden",
          optionThree: "hidden",
        });
        break;
      case "optionTwo":
        setHidden({
          optionOne: "hidden",
          optionTwo: "",
          optionThree: "hidden",
        });
        break;
      case "optionThree":
        setHidden({
          optionOne: "hidden",
          optionTwo: "hidden",
          optionThree: "",
        });
        break;
    }
  }

  function changeColor(event) {
    event.preventDefault();
    var id = event.target.id;
    switch (id) {
      case "red":
        setActualColor(["bg-red-300", "border-red-300", "text-red-300"]);
        break;
      case "blue":
        setActualColor(["bg-blue-300", "border-blue-300", "text-blue-300"]);
        break;
      case "orange":
        setActualColor([
          "bg-orange-300",
          "border-orange-300",
          "text-orange-300",
        ]);
        break;
      case "green":
        setActualColor(["bg-green-300", "border-green-300", "text-green-300"]);
        break;
    }
  }

  return (
    <Layout>
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
        <div className="grid grid-cols-6 gap-1 md:pl-2 sm:pl-2 xs:pl-1">
          {/*Preview container*/}
          <div className="col-span-4 border-2 border-black">
            {/*col-span-4 border-2 border-black*/}
            {/*FIRST OPTION*/}
            <div
              className={`grid grid-cols-8 gap-1 h-full ${hidden.optionOne}`}
            >
              {/*First col*/}
              <div
                id="change"
                className={`col-span-3 border-2  md:p-2 sm:p-2 xs:p-1 ${actualColor[0]} ${actualColor[1]}`}
              >
                {/*${actualColor[0]} ${actualColor[1]}  bg-${actualColor} bg-red-300*/}
                {/*Name*/}
                <div className="md:pt-4 sm:pt-2 xs:pt-1 md:text-center sm:text-center xs:text-center">
                  <span className="font-mono block text-black font-bold md:text-xl sm:text-base xs:text-xs">
                    {data.name}
                  </span>
                  {/*Position*/}
                  <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xxs">
                    {data.preferredPosition}
                  </span>
                </div>
                {/*Line*/}
                <div className="relative flex py-1 items-center">
                  <div className="flex-grow border-t border-slate-900"></div>
                  <span className="flex-shrink text-slate-900 mx-1 font-mono md:text-xl sm:text-sm xs:text-xs">
                    ⧫
                  </span>
                  <div className="flex-grow border-t border-slate-900"></div>
                </div>
                {/*Personal data*/}
                <div className="md:pl-5 md:pr-2 sm:pl-2 sm:pr-2 xs:pl-0 xs:pr-0">
                  <span className="font-mono block text-black font-bold mt-4 md:text-xl sm:text-base xs:text-xs">
                    DATOS PERSONALES
                  </span>
                  <span className="font-mono block text-black font-bold mt-4 md:text-xl sm:text-base xs:text-xs">
                    Teléfono
                  </span>
                  <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                    {data.mobile_phone}
                  </span>
                  <span className="font-mono block text-black font-bold mt-4 md:text-xl sm:text-base xs:text-xs">
                    Lugar de residencia
                  </span>
                  <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                    {data.country_province}
                  </span>
                  <span className="font-mono block text-black font-bold mt-4 md:text-xl sm:text-base xs:text-xs">
                    Nacionalidad
                  </span>
                  <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                    {data.nationalities}
                  </span>
                  <span className="font-mono block text-black font-bold mt-4 md:text-xl sm:text-base xs:text-xs">
                    Permiso de trabajo
                  </span>
                  <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                    {data.workPermits}
                  </span>
                </div>
              </div>
              {/*Second col*/}
              <div className="col-span-5 pb-5">
                {/*border-2 border-amber-500*/}
                <div className="md:pl-5 md:pr-2 sm:pl-2 sm:pr-2 xs:pl-1 xs:pr-1">
                  {/*Experience*/}
                  <div
                    id="change"
                    className={` border-2 ${actualColor[0]} ${actualColor[1]} text-center mt-4 mb-4`}
                  >
                    {/*shadow-[0_1px_0px_0px_rgba(0,0,0,0.3)]*/}
                    <span className="font-mono block shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] text-black font-bold pt-1 pb-1 md:text-xl sm:text-base xs:text-xs">
                      EXPERIENCIA
                    </span>
                  </div>
                  <div className="pl-3 pr-3">
                    <span className="font-mono block font-bold uppercase md:text-lg sm:text-sm xs:text-xs">
                      <li id="change" className={`${actualColor[2]}`}>
                        <span className="text-black">{data.company}</span>
                      </li>
                    </span>
                    <span className="font-mono block text-slate-900 italic md:text-lg sm:text-sm xs:text-xs">
                      {data.job}
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      ({data.startingDate_experience}/
                      {data.finishingDate_experience})
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      {data.description}
                    </span>
                    {/***/}
                    <span className="font-mono block font-bold uppercase md:text-lg sm:text-sm xs:text-xs">
                      <li id="change" className={`${actualColor[2]}`}>
                        <span className="text-black">{data.company}</span>
                      </li>
                    </span>
                    <span className="font-mono block text-slate-900 italic md:text-lg sm:text-sm xs:text-xs">
                      {data.job}
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      ({data.startingDate_experience}/
                      {data.finishingDate_experience})
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      {data.description}
                    </span>
                    {/***/}
                    <span className="font-mono block font-bold uppercase md:text-lg sm:text-sm xs:text-xs">
                      <li id="change" className={`${actualColor[2]}`}>
                        <span className="text-black">{data.company}</span>
                      </li>
                    </span>
                    <span className="font-mono block text-slate-900 italic md:text-lg sm:text-sm xs:text-xs">
                      {data.job}
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      ({data.startingDate_experience}/
                      {data.finishingDate_experience})
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      {data.description}
                    </span>
                  </div>
                  {/*Education*/}
                  <div
                    id="change"
                    className={`border-2 ${actualColor[0]} ${actualColor[1]} text-center mt-4 mb-4`}
                  >
                    <span className="font-mono block shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] text-black font-bold pt-1 pb-1 md:text-xl sm:text-base xs:text-xs">
                      EDUCACIÓN
                    </span>
                  </div>
                  <div className="pl-3 pr-3">
                    <span className="font-mono block font-bold uppercase md:text-lg sm:text-sm xs:text-xs">
                      <li id="change" className={`${actualColor[2]}`}>
                        <span className="text-black">
                          {data.institutionName}
                        </span>
                      </li>
                    </span>
                    <span className="font-mono block text-slate-900 italic md:text-lg sm:text-sm xs:text-xs">
                      {data.courseName}
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      ({data.startingDate_education}/
                      {data.finishingDate_education})
                    </span>
                    {/***/}
                    <span className="font-mono block font-bold uppercase md:text-lg sm:text-sm xs:text-xs">
                      <li id="change" className={`${actualColor[2]}`}>
                        <span className="text-black">
                          {data.institutionName}
                        </span>
                      </li>
                    </span>
                    <span className="font-mono block text-slate-900 italic md:text-lg sm:text-sm xs:text-xs">
                      {data.courseName}
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      ({data.startingDate_education}/
                      {data.finishingDate_education})
                    </span>
                    {/***/}
                    <span className="font-mono block font-bold uppercase md:text-lg sm:text-sm xs:text-xs">
                      <li id="change" className={`${actualColor[2]}`}>
                        <span className="text-black">
                          {data.institutionName}
                        </span>
                      </li>
                    </span>
                    <span className="font-mono block text-slate-900 italic md:text-lg sm:text-sm xs:text-xs">
                      {data.courseName}
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      ({data.startingDate_education}/
                      {data.finishingDate_education})
                    </span>
                    {/***/}
                    <span className="font-mono block font-bold uppercase md:text-lg sm:text-sm xs:text-xs">
                      <li id="change" className={`${actualColor[2]}`}>
                        <span className="text-black">
                          {data.institutionName}
                        </span>
                      </li>
                    </span>
                    <span className="font-mono block text-slate-900 italic md:text-lg sm:text-sm xs:text-xs">
                      {data.courseName}
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      ({data.startingDate_education}/
                      {data.finishingDate_education})
                    </span>
                  </div>
                  {/*Language*/}
                  <div
                    id="change"
                    className={`border-2 ${actualColor[0]} ${actualColor[1]} text-center mt-4 mb-4`}
                  >
                    <span className="font-mono block shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] text-black font-bold pt-1 pb-1 md:text-xl sm:text-base xs:text-xs">
                      IDIOMAS
                    </span>
                  </div>
                  <div className="pl-3 pr-3">
                    {/*ALL LANGUAGES*/}
                    <span className="font-mono block font-bold md:text-lg sm:text-sm xs:text-xs">
                      <li id="change" className={`${actualColor[2]}`}>
                        <span className="text-black">
                          {data.languages[0].id}
                        </span>
                      </li>
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      Habla:{data.languages[0].speaking}
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      Lectura:{data.languages[0].reading}
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      Escritura:{data.languages[0].writing}
                    </span>
                    {/******/}
                    <span className="font-mono block font-bold md:text-lg sm:text-sm xs:text-xs">
                      <li id="change" className={`${actualColor[2]}`}>
                        <span className="text-black">
                          {data.languages[1].id}
                        </span>
                      </li>
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      Habla:{data.languages[1].speaking}
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      Lectura:{data.languages[1].reading}
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      Escritura:{data.languages[1].writing}
                    </span>
                    {/*ALL LANGUAGES*/}
                  </div>
                </div>
              </div>
            </div>
            {/*FINISH FIRST OPTION*/}
            {/*SECOND OPTION*/}
            <div
              className={`grid grid-cols-8 gap-1 h-full ${hidden.optionTwo}`}
            >
              {/*Top col*/}
              <div
                id="change"
                className={`col-span-8 border-b-2 border-black shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] ${actualColor[0]} md:p-2 sm:p-2 xs:p-1 `}
              >
                {/*Name*/}
                <div className="md:pt-4 sm:pt-2 xs:pt-1 md:text-center sm:text-center xs:text-center">
                  <span className="font-mono block text-black font-bold md:text-xl sm:text-base xs:text-xs">
                    {data.name}
                  </span>
                  {/*Position*/}
                  <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xxs">
                    {data.preferredPosition}
                  </span>
                </div>
              </div>
              {/*First col*/}
              <div className="col-span-4 pb-5">
                {/*border-2 border-amber-500*/}
                <div className="md:pl-5 md:pr-2 sm:pl-2 sm:pr-2 xs:pl-1 xs:pr-1">
                  {/*Education*/}
                  <div
                    id="change"
                    className={`border-2 ${actualColor[0]} ${actualColor[1]} text-center mt-4 mb-4`}
                  >
                    <span className="font-mono block shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] text-black font-bold pt-1 pb-1 md:text-xl sm:text-base xs:text-xs">
                      EDUCACIÓN
                    </span>
                  </div>
                  <div className="pl-3 pr-3">
                    <span className="font-mono block font-bold uppercase md:text-lg sm:text-sm xs:text-xs">
                      <li id="change" className={`${actualColor[2]}`}>
                        <span className="text-black">
                          {data.institutionName}
                        </span>
                      </li>
                    </span>
                    <span className="font-mono block text-slate-900 italic md:text-lg sm:text-sm xs:text-xs">
                      {data.courseName}
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      ({data.startingDate_education}/
                      {data.finishingDate_education})
                    </span>
                    {/***/}
                    <span className="font-mono block font-bold uppercase md:text-lg sm:text-sm xs:text-xs">
                      <li id="change" className={`${actualColor[2]}`}>
                        <span className="text-black">
                          {data.institutionName}
                        </span>
                      </li>
                    </span>
                    <span className="font-mono block text-slate-900 italic md:text-lg sm:text-sm xs:text-xs">
                      {data.courseName}
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      ({data.startingDate_education}/
                      {data.finishingDate_education})
                    </span>
                    {/***/}
                    <span className="font-mono block font-bold uppercase md:text-lg sm:text-sm xs:text-xs">
                      <li id="change" className={`${actualColor[2]}`}>
                        <span className="text-black">
                          {data.institutionName}
                        </span>
                      </li>
                    </span>
                    <span className="font-mono block text-slate-900 italic md:text-lg sm:text-sm xs:text-xs">
                      {data.courseName}
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      ({data.startingDate_education}/
                      {data.finishingDate_education})
                    </span>
                    {/***/}
                    <span className="font-mono block font-bold uppercase md:text-lg sm:text-sm xs:text-xs">
                      <li id="change" className={`${actualColor[2]}`}>
                        <span className="text-black">
                          {data.institutionName}
                        </span>
                      </li>
                    </span>
                    <span className="font-mono block text-slate-900 italic md:text-lg sm:text-sm xs:text-xs">
                      {data.courseName}
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      ({data.startingDate_education}/
                      {data.finishingDate_education})
                    </span>
                  </div>
                  {/*Personal data*/}
                  <div
                    id="change"
                    className={` border-2 ${actualColor[0]} ${actualColor[1]} text-center mt-4 mb-4`}
                  >
                    {/*shadow-[0_1px_0px_0px_rgba(0,0,0,0.3)]*/}
                    <span className="font-mono block shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] text-black font-bold pt-1 pb-1 md:text-xl sm:text-base xs:text-xs">
                      DATOS PERSONALES
                    </span>
                  </div>
                  <div className="md:pl-5 md:pr-2 sm:pl-2 sm:pr-2 xs:pl-0 xs:pr-0">
                    <span className="font-mono block text-black font-bold mt-4 md:text-lg sm:text-sm xs:text-xs">
                      <li id="change" className={`${actualColor[2]}`}>
                        <span className="text-black">Lugar de residencia</span>
                      </li>
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      {data.country_province}
                    </span>
                    <span className="font-mono block text-black font-bold mt-4 md:text-lg sm:text-sm xs:text-xs">
                      <li id="change" className={`${actualColor[2]}`}>
                        <span className="text-black">Nacionalidad</span>
                      </li>
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      {data.nationalities}
                    </span>
                    <span className="font-mono block text-black font-bold mt-4 md:text-lg sm:text-sm xs:text-xs">
                      <li id="change" className={`${actualColor[2]}`}>
                        <span className="text-black">Permiso de trabajo</span>
                      </li>
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      {data.workPermits}
                    </span>
                  </div>
                  <div
                    id="change"
                    className={` border-2 ${actualColor[0]} ${actualColor[1]} text-center mt-4 mb-4`}
                  >
                    {/*shadow-[0_1px_0px_0px_rgba(0,0,0,0.3)]*/}
                    <span className="font-mono block shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] text-black font-bold pt-1 pb-1 md:text-xl sm:text-base xs:text-xs">
                      CONTACTO
                    </span>
                  </div>
                  <div className="md:pl-5 md:pr-2 sm:pl-2 sm:pr-2 xs:pl-0 xs:pr-0">
                    <span className="font-mono block text-black font-bold mt-4 md:text-lg sm:text-sm xs:text-xs">
                      <li id="change" className={`${actualColor[2]}`}>
                        <span className="text-black">Teléfono</span>
                      </li>
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      {data.mobile_phone}
                    </span>
                    <span className="font-mono block text-black font-bold mt-4 md:text-lg sm:text-sm xs:text-xs">
                      <li id="change" className={`${actualColor[2]}`}>
                        <span className="text-black">Redes sociales</span>
                      </li>
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      {data.web_pages}
                    </span>
                  </div>
                </div>
              </div>
              {/*Second col*/}
              <div className="col-span-4 pb-5">
                {/*border-2 border-amber-500*/}
                <div className="md:pl-5 md:pr-2 sm:pl-2 sm:pr-2 xs:pl-1 xs:pr-1">
                  {/*Experience*/}
                  <div
                    id="change"
                    className={` border-2 ${actualColor[0]} ${actualColor[1]} text-center mt-4 mb-4`}
                  >
                    {/*shadow-[0_1px_0px_0px_rgba(0,0,0,0.3)]*/}
                    <span className="font-mono block shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] text-black font-bold pt-1 pb-1 md:text-xl sm:text-base xs:text-xs">
                      EXPERIENCIA
                    </span>
                  </div>
                  <div className="pl-3 pr-3">
                    <span className="font-mono block font-bold uppercase md:text-lg sm:text-sm xs:text-xs">
                      <li id="change" className={`${actualColor[2]}`}>
                        <span className="text-black">{data.company}</span>
                      </li>
                    </span>
                    <span className="font-mono block text-slate-900 italic md:text-lg sm:text-sm xs:text-xs">
                      {data.job}
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      ({data.startingDate_experience}/
                      {data.finishingDate_experience})
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      {data.description}
                    </span>
                    {/***/}
                    <span className="font-mono block font-bold uppercase md:text-lg sm:text-sm xs:text-xs">
                      <li id="change" className={`${actualColor[2]}`}>
                        <span className="text-black">{data.company}</span>
                      </li>
                    </span>
                    <span className="font-mono block text-slate-900 italic md:text-lg sm:text-sm xs:text-xs">
                      {data.job}
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      ({data.startingDate_experience}/
                      {data.finishingDate_experience})
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      {data.description}
                    </span>
                    {/***/}
                    <span className="font-mono block font-bold uppercase md:text-lg sm:text-sm xs:text-xs">
                      <li id="change" className={`${actualColor[2]}`}>
                        <span className="text-black">{data.company}</span>
                      </li>
                    </span>
                    <span className="font-mono block text-slate-900 italic md:text-lg sm:text-sm xs:text-xs">
                      {data.job}
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      ({data.startingDate_experience}/
                      {data.finishingDate_experience})
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      {data.description}
                    </span>
                  </div>
                  {/*Language*/}
                  <div
                    id="change"
                    className={`border-2 ${actualColor[0]} ${actualColor[1]} text-center mt-4 mb-4`}
                  >
                    <span className="font-mono block shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] text-black font-bold pt-1 pb-1 md:text-xl sm:text-base xs:text-xs">
                      IDIOMAS
                    </span>
                  </div>
                  <div className="pl-3 pr-3">
                    {/*ALL LANGUAGES*/}
                    <span className="font-mono block font-bold md:text-lg sm:text-sm xs:text-xs">
                      <li id="change" className={`${actualColor[2]}`}>
                        <span className="text-black">
                          {data.languages[0].id}
                        </span>
                      </li>
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      Habla:{data.languages[0].speaking}
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      Lectura:{data.languages[0].reading}
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      Escritura:{data.languages[0].writing}
                    </span>
                    {/******/}
                    <span className="font-mono block font-bold md:text-lg sm:text-sm xs:text-xs">
                      <li id="change" className={`${actualColor[2]}`}>
                        <span className="text-black">
                          {data.languages[1].id}
                        </span>
                      </li>
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      Habla:{data.languages[1].speaking}
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      Lectura:{data.languages[1].reading}
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      Escritura:{data.languages[1].writing}
                    </span>
                    {/*ALL LANGUAGES*/}
                  </div>
                </div>
              </div>
            </div>
            {/*FINISH SECOND OPTION*/}
            {/*THIRD OPTION*/}
            <div
              className={`grid grid-cols-8 gap-1 h-full ${hidden.optionThree}`}
            >
              {/*Top col*/}
              <div
                id="change"
                className={`col-span-8 border-b-2 border-black rounded-ss-full rounded-br-full shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] ${actualColor[0]} md:p-2 sm:p-2 xs:p-1 `}
              >
                {/*Name*/}
                <div className="md:pt-4 sm:pt-2 xs:pt-1 md:text-center sm:text-center xs:text-center">
                  <span className="font-mono block text-black font-bold md:text-xl sm:text-base xs:text-xs">
                    {data.name}
                  </span>
                  {/*Position*/}
                  <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xxs">
                    {data.preferredPosition}
                  </span>
                </div>
              </div>
              {/*First col*/}
              <div className="col-span-4 pb-5">
                {/*border-2 border-amber-500*/}
                <div className="md:pl-5 md:pr-2 sm:pl-2 sm:pr-2 xs:pl-1 xs:pr-1 ">
                  {/*Education*/}
                  <div
                    id="change"
                    className={`border-b-2 ${actualColor[1]} text-center mt-4 mb-4 rounded-full`}
                  >
                    <span className="font-mono block text-black font-bold pt-1 pb-1 md:text-xl sm:text-base xs:text-xs">
                      EDUCACIÓN
                    </span>
                  </div>
                  <div className="pl-3 pr-3 bg-gray-200 rounded-xl">
                    <span className="font-mono block font-bold uppercase md:text-lg sm:text-sm xs:text-xs">
                      <li id="change" className={`${actualColor[2]}`}>
                        <span className="text-black">
                          {data.institutionName}
                        </span>
                      </li>
                    </span>
                    <span className="font-mono block text-slate-900 italic md:text-lg sm:text-sm xs:text-xs">
                      {data.courseName}
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      ({data.startingDate_education}/
                      {data.finishingDate_education})
                    </span>
                    {/***/}
                    <span className="font-mono block font-bold uppercase md:text-lg sm:text-sm xs:text-xs">
                      <li id="change" className={`${actualColor[2]}`}>
                        <span className="text-black">
                          {data.institutionName}
                        </span>
                      </li>
                    </span>
                    <span className="font-mono block text-slate-900 italic md:text-lg sm:text-sm xs:text-xs">
                      {data.courseName}
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      ({data.startingDate_education}/
                      {data.finishingDate_education})
                    </span>
                    {/***/}
                    <span className="font-mono block font-bold uppercase md:text-lg sm:text-sm xs:text-xs">
                      <li id="change" className={`${actualColor[2]}`}>
                        <span className="text-black">
                          {data.institutionName}
                        </span>
                      </li>
                    </span>
                    <span className="font-mono block text-slate-900 italic md:text-lg sm:text-sm xs:text-xs">
                      {data.courseName}
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      ({data.startingDate_education}/
                      {data.finishingDate_education})
                    </span>
                    {/***/}
                    <span className="font-mono block font-bold uppercase md:text-lg sm:text-sm xs:text-xs">
                      <li id="change" className={`${actualColor[2]}`}>
                        <span className="text-black">
                          {data.institutionName}
                        </span>
                      </li>
                    </span>
                    <span className="font-mono block text-slate-900 italic md:text-lg sm:text-sm xs:text-xs">
                      {data.courseName}
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      ({data.startingDate_education}/
                      {data.finishingDate_education})
                    </span>
                  </div>
                  {/*Personal data*/}
                  <div
                    id="change"
                    className={` border-b-2 ${actualColor[1]} text-center rounded-full mt-4 mb-4`}
                  >
                    {/*shadow-[0_1px_0px_0px_rgba(0,0,0,0.3)]*/}
                    <span className="font-mono block text-black font-bold pt-1 pb-1 md:text-xl sm:text-base xs:text-xs">
                      DATOS PERSONALES
                    </span>
                  </div>
                  <div className="bg-gray-200 rounded-xl md:pl-5 md:pr-2 sm:pl-2 sm:pr-2 xs:pl-0 xs:pr-0">
                    <span className="font-mono block text-black font-bold mt-4 md:text-lg sm:text-sm xs:text-xs">
                      <li id="change" className={`${actualColor[2]}`}>
                        <span className="text-black">Lugar de residencia</span>
                      </li>
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      {data.country_province}
                    </span>
                    <span className="font-mono block text-black font-bold mt-4 md:text-lg sm:text-sm xs:text-xs">
                      <li id="change" className={`${actualColor[2]}`}>
                        <span className="text-black">Nacionalidad</span>
                      </li>
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      {data.nationalities}
                    </span>
                    <span className="font-mono block text-black font-bold mt-4 md:text-lg sm:text-sm xs:text-xs">
                      <li id="change" className={`${actualColor[2]}`}>
                        <span className="text-black">Permiso de trabajo</span>
                      </li>
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      {data.workPermits}
                    </span>
                  </div>
                </div>
              </div>
              {/*Second col*/}
              <div className="col-span-4 pb-5">
                {/*border-2 border-amber-500*/}
                <div className="md:pl-5 md:pr-2 sm:pl-2 sm:pr-2 xs:pl-1 xs:pr-1">
                  {/*Experience*/}
                  <div
                    id="change"
                    className={`border-b-2 ${actualColor[1]} rounded-full text-center mt-4 mb-4`}
                  >
                    {/*border-2 ${actualColor[0]} ${actualColor[1]} text-center mt-4 mb-4 shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)]*/}
                    <span className="font-mono block text-black font-bold pt-1 pb-1 md:text-xl sm:text-base xs:text-xs">
                      EXPERIENCIA
                    </span>
                  </div>
                  <div className="pl-3 pr-3 bg-gray-200 rounded-xl">
                    <span className="font-mono block font-bold uppercase md:text-lg sm:text-sm xs:text-xs">
                      <li id="change" className={`${actualColor[2]}`}>
                        <span className="text-black">{data.company}</span>
                      </li>
                    </span>
                    <span className="font-mono block text-slate-900 italic md:text-lg sm:text-sm xs:text-xs">
                      {data.job}
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      ({data.startingDate_experience}/
                      {data.finishingDate_experience})
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      {data.description}
                    </span>
                    {/***/}
                    <span className="font-mono block font-bold uppercase md:text-lg sm:text-sm xs:text-xs">
                      <li id="change" className={`${actualColor[2]}`}>
                        <span className="text-black">{data.company}</span>
                      </li>
                    </span>
                    <span className="font-mono block text-slate-900 italic md:text-lg sm:text-sm xs:text-xs">
                      {data.job}
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      ({data.startingDate_experience}/
                      {data.finishingDate_experience})
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      {data.description}
                    </span>
                    {/***/}
                    <span className="font-mono block font-bold uppercase md:text-lg sm:text-sm xs:text-xs">
                      <li id="change" className={`${actualColor[2]}`}>
                        <span className="text-black">{data.company}</span>
                      </li>
                    </span>
                    <span className="font-mono block text-slate-900 italic md:text-lg sm:text-sm xs:text-xs">
                      {data.job}
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      ({data.startingDate_experience}/
                      {data.finishingDate_experience})
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      {data.description}
                    </span>
                  </div>
                  {/*Language*/}
                  <div
                    id="change"
                    className={`border-b-2 ${actualColor[1]} rounded-full text-center mt-4 mb-4`}
                  >
                    <span className="font-mono block text-black font-bold pt-1 pb-1 md:text-xl sm:text-base xs:text-xs">
                      IDIOMAS
                    </span>
                  </div>
                  <div className="pl-3 pr-3 bg-gray-200 rounded-xl">
                    {/*ALL LANGUAGES*/}
                    <span className="font-mono block font-bold md:text-lg sm:text-sm xs:text-xs">
                      <li id="change" className={`${actualColor[2]}`}>
                        <span className="text-black">
                          {data.languages[0].id}
                        </span>
                      </li>
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      Habla:{data.languages[0].speaking}
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      Lectura:{data.languages[0].reading}
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      Escritura:{data.languages[0].writing}
                    </span>
                    {/******/}
                    <span className="font-mono block font-bold md:text-lg sm:text-sm xs:text-xs">
                      <li id="change" className={`${actualColor[2]}`}>
                        <span className="text-black">
                          {data.languages[1].id}
                        </span>
                      </li>
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      Habla:{data.languages[1].speaking}
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      Lectura:{data.languages[1].reading}
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      Escritura:{data.languages[1].writing}
                    </span>
                    {/*ALL LANGUAGES*/}
                  </div>
                </div>
              </div>
              {/*id="change"
                className={`col-span-8 border-b-2 border-black rounded-ss-full rounded-br-full shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] ${actualColor[0]} md:p-2 sm:p-2 xs:p-1 `}*/}
              {/*className="col-span-8 py-5 border-2  border-black md:pl-5 md:pr-2 sm:pl-2 sm:pr-2 xs:pl-1 xs:pr-1"*/}
              <div
                id="change"
                className={`col-span-8 border-t-2 border-black ${actualColor[0]} rounded-t-3xl md:pl-5 md:pr-2 sm:pl-2 sm:pr-2 xs:pl-1 xs:pr-1`}
              >
                <div className="grid grid-cols-8 gap-1 h-full pb-3">
                  <div className="col-span-8 pb-2">
                    <div className="flex justify-center ">
                      <div id="change" className={`text-center`}>
                        {/*shadow-[0_1px_0px_0px_rgba(0,0,0,0.3)]*/}
                        <span className="font-mono block text-black font-bold pt-1 pb-1 md:text-xl sm:text-base xs:text-xs">
                          CONTACTO
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-4 text-center mt-1">
                    <span className="font-mono block text-black font-bold md:text-lg sm:text-sm xs:text-xs">
                      <span className="text-black">Teléfono</span>
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      {data.mobile_phone}
                    </span>
                  </div>
                  <div className="col-span-4 text-center mt-1">
                    <span className="font-mono block text-black font-bold md:text-lg sm:text-sm xs:text-xs">
                      <span className="text-black">Redes sociales</span>
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      {data.web_pages}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/*FINISH THIRD OPTION*/}
          </div>
          {/*Options col*/}
          <div className="col-span-2 shadow-[0_6px_5px_0px_rgba(0,0,0,0.3)] border-2 border-black h-fit md:p-2 sm:p-2 xs:p-1">
            {/*col-span-2 shadow-[0_6px_5px_0px_rgba(0,0,0,0.3)] border-2 border-black md:h-1/3 md:p-2 sm:h-1/3 sm:p-2 xs:h-1/4 xs:p-1*/}
            <div className="md:pl-5 md:pr-2 sm:pl-2 sm:pr-2 xs:pl-1 xs:pr-1">
              <div className="border-2 border-slate-300 bg-slate-300 mt-3 md:mb-10 sm:mb-5 xs:mb-3">
                <span className="font-mono block shadow-[0_3px_5px_0px_rgba(0,0,0,0.3)] text-black font-bold p-1 md:text-xl sm:text-base xs:text-xs ">
                  Seleccione estilo de CV
                </span>
              </div>
              <div className="border-2 border-violet-500 flex justify-center">
                <button
                  id="optionOne"
                  className="border-2 border-blue-800 mx-auto my-auto"
                  onClick={(e) => showCV(e)}
                >
                  UNO
                </button>
                <button
                  id="optionTwo"
                  className="border-2 border-blue-800 mx-auto my-auto"
                  onClick={(e) => showCV(e)}
                >
                  DOS
                </button>
                <button
                  id="optionThree"
                  className="border-2 border-blue-800 mx-auto my-auto"
                  onClick={(e) => showCV(e)}
                >
                  TRES
                </button>
              </div>

              <span className="font-mono block shadow-[0_3px_5px_0px_rgba(0,0,0,0.3)] border-slate-300 bg-slate-300 text-black font-bold p-1 md:mt-10 md:mb-10 md:text-xl sm:mt-5 sm:mb-5 sm:text-base xs:mt-3 xs:mb-3 xs:text-xs">
                Seleccione un color
              </span>
              <div className="flex justify-center md:h-16 sm: xs:h-11">
                {/*border-2 border-red-800 flex justify-center md:h-16 sm: xs:h-11*/}
                <div className="flex justify-center md:w-3/5 sm:w-3/4 xs:w-full">
                  {/*border-4 border-violet-800 flex justify-center md:w-3/5 sm:w-3/4 xs:w-full*/}
                  <div className="flex justify-center border-2 rounded-full shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] bg-gray-200 border-black md:w-3/4 sm: xs:w-full">
                    <button
                      id="red"
                      className="font-mono shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] border-2 border-red-500 mx-auto my-auto md:p-4 sm:p-2 xs:p-2 rounded-full bg-red-500 hover:bg-red-600 duration-300"
                      title="Finanzas, Banca, Seguros"
                      onClick={(e) => changeColor(e)}
                    >
                      {/*max-w-md p-4 mx-auto mt-4 bg-gray-200 sm:shadow-md sm::rounded-md sm:bg-gray-100 sm:p-6 md:bg-green-800*/}
                      {/*font-mono border-2 border-black p-2 m-3 w-1/6 rounded-full bg-red-500 hover:bg-cyan-600 duration-300*/}
                    </button>
                    <button
                      id="blue"
                      className="font-mono shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] border-2 border-blue-500 mx-auto my-auto md:p-4 sm:p-2 xs:p-2 rounded-full bg-blue-500 hover:bg-blue-600 duration-300"
                      onClick={(e) => changeColor(e)}
                      title="Profesionales IT, Directivos, Gestores"
                    ></button>
                    <button
                      id="orange"
                      className="font-mono shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] border-2 border-orange-500 mx-auto my-auto md:p-4 sm:p-2 xs:p-2 rounded-full bg-orange-500 hover:bg-orange-600 duration-300"
                      onClick={(e) => changeColor(e)}
                      title="Marketing, Hostelería, Cocinero, Pastelero"
                    ></button>
                    <button
                      id="green"
                      className="font-mono shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] border-2 border-green-500 mx-auto my-auto md:p-4 sm:p-2 xs:p-2 rounded-full bg-green-500 hover:bg-green-600 duration-300"
                      onClick={(e) => changeColor(e)}
                      title="Medio ambiente, Ecología"
                    ></button>
                  </div>
                </div>
              </div>
              <div className="flex justify-center border-2 border-black mt-6 mb-3 p-1">
                <div className="text-center border-2 border-violet-500 rounded-xl w-1/2">
                  <button className="font-mono text-black font-bold md:text-lg sm:text-sm xs:text-xs">
                    Descargar HV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </main>
    </Layout>
  );
}
