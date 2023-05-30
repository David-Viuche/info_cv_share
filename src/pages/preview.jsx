/* eslint-disable react/jsx-key */
import Layout from "@/components/Layout";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useState } from "react";

export default function Preview() {
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

    personalData: [
      {
        name: "Diego Andres Molina Romero",
        country: "Colombia",
        province: "Bogota D.C.",
        mobile_phone: "1234567890",
        web_pages: [{ url: "ELTIEMPO" }, { url: "TINDER" }, { url: "WHATS" }],
        freelance: "Disponible",
        nationalities: ["ALEMAN", "ESPAÑOL"],
        workPermits: ["Colombia", "Alemania", "España"],
      },
    ],

    //candidate_read_curriculum_future_job
    //get/curriculum/{curriculumId}/futurejob

    futureJob: [
      {
        preferredPosition: "Desarrollador Software",
      },
      {
        preferredPosition: "Ingeniero",
      },
      { preferredPosition: "Arquitecto" },
    ],

    //candidate_read_curriculum_experience
    //get/curriculum/{curriculumId}/experience/{experienceId}

    experience: [
      {
        company: "Uniminuto",
        job: "Desarrollador",
        startingDate_experience: "2006-09-14",
        finishingDate_experience: "2011-06-14",
        description:
          "Programming as a web developer in several languages like Java, Javascript, HTML, SQL, ...",
      },
      {
        company: "UNIMONITO",
        job: "Ingeniero",
        startingDate_experience: "2012-09-14",
        finishingDate_experience: "2021-06-14",
        description: "ALGO",
      },
      {
        company: "Arquitecto",
        job: "ingeniero",
        startingDate_experience: "2026-09-14",
        finishingDate_experience: "2012-06-14",
        description: "Arquitecto",
      },
    ],

    //candidate_read_curriculum_education
    //get/curriculum/{curriculumId}/education

    education: [
      {
        educationLevelCode: "formacion-profesional-grado-INFERIOR",
        courseName: "actividades-INGENIERILES",
        startingDate_education: "2005-10-01",
        finishingDate_education: "2006-11-01",
        institutionName: "SENA",
      },
      {
        educationLevelCode: "formacion-profesional-grado-SUPERIOR",
        courseName: "actividades-AGRARIAS",
        startingDate_education: "2005-10-01",
        finishingDate_education: "2006-11-01",
        institutionName: "UNIMONITO",
      },
      {
        educationLevelCode: "formacion-profesional-TECNICA",
        courseName: "actividades-DIFERENTES",
        startingDate_education: "2005-10-01",
        finishingDate_education: "2006-11-01",
        institutionName: "DISTRITAL",
      },
    ],
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

      case "violet":
        setActualColor([
          "bg-violet-300",
          "border-violet-300",
          "text-violet-300",
        ]);
        break;
    }
  }

  function generatePDF(event) {
    event.preventDefault();
    var visibleCV = "";
    if (hidden.optionOne == "") {
      visibleCV = "optionOneCV";
    } else if (hidden.optionTwo == "") {
      visibleCV = "optionTwoCV";
    } else {
      visibleCV = "optionThreeCV";
    }

    const input = document.getElementById(visibleCV);
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      var width = pdf.internal.pageSize.getWidth();
      var height = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "JPEG", 0, 0, width, height);
      pdf.output("dataurlnewwindow");
      pdf.save("CV");
    });
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
            {/*FIRST OPTION*/}
            <div
              id="optionOneCV"
              className={`grid grid-cols-8 gap-1 h-full ${hidden.optionOne} `}
            >
              {/*First col*/}
              <div
                id="change"
                className={`col-span-3 border-2  md:p-2 sm:p-2 xs:p-1 ${actualColor[0]} ${actualColor[1]}`}
              >
                {/*Name*/}
                <div className="md:pt-4 sm:pt-2 xs:pt-1 md:text-center sm:text-center xs:text-center">
                  <span className="font-mono block text-black font-bold md:text-xl sm:text-base xs:text-xs">
                    {data.personalData.map((element) => (
                      <div>{element.name}</div>
                    ))}
                  </span>
                  {/*Position*/}
                  <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xxs">
                    {data.futureJob.map((element) => (
                      <div>{element.preferredPosition}</div>
                    ))}
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
                    {data.personalData.map((element) => (
                      <div>{element.mobile_phone}</div>
                    ))}
                  </span>
                  <span className="font-mono block text-black font-bold mt-4 md:text-xl sm:text-base xs:text-xs">
                    Lugar de residencia
                  </span>
                  <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                    {data.personalData.map((element) => (
                      <div>
                        {element.country}, {element.province}
                      </div>
                    ))}
                  </span>
                  <span className="font-mono block text-black font-bold mt-4 md:text-xl sm:text-base xs:text-xs">
                    Nacionalidad
                  </span>
                  <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                    {data.personalData.map((element) =>
                      element.nationalities.length > 1
                        ? (element.nationalities[-1] = element
                            ? element.nationalities + "."
                            : element.nationalities + ",")
                        : element.nationalities + "."
                    )}
                  </span>
                  <span className="font-mono block text-black font-bold mt-4 md:text-xl sm:text-base xs:text-xs">
                    Permiso de trabajo
                  </span>
                  <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                    {data.personalData.map((element) =>
                      element.workPermits.length > 1
                        ? (element.workPermits[-1] = element
                            ? element.workPermits + "."
                            : element.workPermits + ", ")
                        : element.workPermits + "."
                    )}
                  </span>
                </div>
              </div>
              {/*Second col*/}
              <div className="col-span-5 pb-5">
                <div className="md:pl-5 md:pr-2 sm:pl-2 sm:pr-2 xs:pl-1 xs:pr-1">
                  {/*Experience*/}
                  <div
                    id="change"
                    className={` border-2 ${actualColor[0]} ${actualColor[1]} text-center mt-4 mb-4`}
                  >
                    <span className="font-mono block shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] text-black font-bold pt-1 pb-1 md:text-xl sm:text-base xs:text-xs">
                      EXPERIENCIA
                    </span>
                  </div>
                  <div className="pl-3 pr-3">
                    {data.experience.map((element) => (
                      <div>
                        <span className="font-mono block font-bold uppercase md:text-lg sm:text-sm xs:text-xs">
                          <li id="change" className={`${actualColor[2]}`}>
                            <span className="text-black">
                              {element.company}
                            </span>
                          </li>
                        </span>
                        <span className="font-mono block text-slate-900 italic md:text-lg sm:text-sm xs:text-xs">
                          {element.job}
                        </span>
                        <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                          ({element.startingDate_experience}/
                          {element.finishingDate_experience})
                        </span>
                        <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                          {element.description}
                        </span>
                      </div>
                    ))}
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
                    {data.education.map((element) => (
                      <div>
                        <span className="font-mono block font-bold uppercase md:text-lg sm:text-sm xs:text-xs">
                          <li id="change" className={`${actualColor[2]}`}>
                            <span className="text-black">
                              {element.institutionName}
                            </span>
                          </li>
                        </span>
                        <span className="font-mono block text-slate-900 italic md:text-lg sm:text-sm xs:text-xs">
                          {element.courseName}
                        </span>
                        <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                          ({element.startingDate_education}/
                          {element.finishingDate_education})
                        </span>
                      </div>
                    ))}
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
                    {data.languages.map((element) => (
                      <div>
                        <span className="font-mono block font-bold md:text-lg sm:text-sm xs:text-xs">
                          <li id="change" className={`${actualColor[2]}`}>
                            <span className="text-black">{element.id}</span>
                          </li>
                        </span>
                        <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                          Habla:
                          {element.speaking}
                        </span>
                        <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                          Lectura:
                          {element.reading}
                        </span>
                        <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                          Escritura:
                          {element.writing}
                        </span>
                      </div>
                    ))}
                    {/*ALL LANGUAGES*/}
                  </div>
                </div>
              </div>
            </div>
            {/*FINISH FIRST OPTION*/}
            {/*SECOND OPTION*/}
            <div
              id="optionTwoCV"
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
                    {data.personalData.map((element) => element.name)}
                  </span>
                  {/*Position*/}
                  <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xxs">
                    {data.futureJob.map((element) => element.preferredPosition)}
                  </span>
                </div>
              </div>
              {/*First col*/}
              <div className="col-span-4 pb-5">
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
                    {data.education.map((element) => (
                      <div>
                        <span className="font-mono block font-bold uppercase md:text-lg sm:text-sm xs:text-xs">
                          <li id="change" className={`${actualColor[2]}`}>
                            <span className="text-black">
                              {element.institutionName}
                            </span>
                          </li>
                        </span>
                        <span className="font-mono block text-slate-900 italic md:text-lg sm:text-sm xs:text-xs">
                          {element.courseName}
                        </span>
                        <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                          ({element.startingDate_education}/
                          {element.finishingDate_education})
                        </span>
                      </div>
                    ))}
                  </div>
                  {/*Personal data*/}
                  <div
                    id="change"
                    className={` border-2 ${actualColor[0]} ${actualColor[1]} text-center mt-4 mb-4`}
                  >
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
                      {data.personalData.map((element) => (
                        <div>
                          {element.country}, {element.province}
                        </div>
                      ))}
                    </span>
                    <span className="font-mono block text-black font-bold mt-4 md:text-lg sm:text-sm xs:text-xs">
                      <li id="change" className={`${actualColor[2]}`}>
                        <span className="text-black">Nacionalidad</span>
                      </li>
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      {data.personalData.map((element) =>
                        element.nationalities.length > 1
                          ? (element.nationalities[-1] = element
                              ? element.nationalities + "."
                              : element.nationalities + ",")
                          : element.nationalities + "."
                      )}
                    </span>
                    <span className="font-mono block text-black font-bold mt-4 md:text-lg sm:text-sm xs:text-xs">
                      <li id="change" className={`${actualColor[2]}`}>
                        <span className="text-black">Permiso de trabajo</span>
                      </li>
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      {data.personalData.map((element) =>
                        element.workPermits.length > 1
                          ? (element.workPermits[-1] = element
                              ? element.workPermits + "."
                              : element.workPermits + ", ")
                          : element.workPermits + "."
                      )}
                    </span>
                  </div>
                  <div
                    id="change"
                    className={` border-2 ${actualColor[0]} ${actualColor[1]} text-center mt-4 mb-4`}
                  >
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
                      {data.personalData.map((element) => (
                        <div>{element.mobile_phone}</div>
                      ))}
                    </span>
                    <span className="font-mono block text-black font-bold mt-4 md:text-lg sm:text-sm xs:text-xs">
                      <li id="change" className={`${actualColor[2]}`}>
                        <span className="text-black">Redes sociales</span>
                      </li>
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      {data.personalData.map((element) =>
                        element.web_pages.length > 1
                          ? element.web_pages.map((pages) => pages.url + " ")
                          : element.web_pages[0].url
                      )}
                    </span>
                  </div>
                </div>
              </div>
              {/*Second col*/}
              <div className="col-span-4 pb-5">
                <div className="md:pl-5 md:pr-2 sm:pl-2 sm:pr-2 xs:pl-1 xs:pr-1">
                  {/*Experience*/}
                  <div
                    id="change"
                    className={` border-2 ${actualColor[0]} ${actualColor[1]} text-center mt-4 mb-4`}
                  >
                    <span className="font-mono block shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] text-black font-bold pt-1 pb-1 md:text-xl sm:text-base xs:text-xs">
                      EXPERIENCIA
                    </span>
                  </div>
                  <div className="pl-3 pr-3">
                    {data.experience.map((element) => (
                      <div>
                        <span className="font-mono block font-bold uppercase md:text-lg sm:text-sm xs:text-xs">
                          <li id="change" className={`${actualColor[2]}`}>
                            <span className="text-black">
                              {element.company}
                            </span>
                          </li>
                        </span>
                        <span className="font-mono block text-slate-900 italic md:text-lg sm:text-sm xs:text-xs">
                          {element.job}
                        </span>
                        <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                          ({element.startingDate_experience}/
                          {element.finishingDate_experience})
                        </span>
                        <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                          {element.description}
                        </span>
                      </div>
                    ))}
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
                    {data.languages.map((element) => (
                      <div>
                        <span className="font-mono block font-bold md:text-lg sm:text-sm xs:text-xs">
                          <li id="change" className={`${actualColor[2]}`}>
                            <span className="text-black">{element.id}</span>
                          </li>
                        </span>
                        <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                          Habla:
                          <br />
                          {element.speaking}
                        </span>
                        <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                          Lectura:
                          <br />
                          {element.reading}
                        </span>
                        <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                          Escritura:
                          <br />
                          {element.writing}
                        </span>
                      </div>
                    ))}
                    {/*ALL LANGUAGES*/}
                  </div>
                </div>
              </div>
            </div>
            {/*FINISH SECOND OPTION*/}
            {/*THIRD OPTION*/}
            <div
              id="optionThreeCV"
              className={`grid grid-cols-8 gap-1 h-full ${hidden.optionThree}`}
            >
              {/*Top col*/}
              <div
                id="change"
                className={`col-span-8 border-b-2 border-black rounded-ss-full rounded-br-full ${actualColor[0]} md:p-2 sm:p-2 xs:p-1 `}
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
                    {data.education.map((element) => (
                      <div>
                        <span className="font-mono block font-bold uppercase md:text-lg sm:text-sm xs:text-xs">
                          <li id="change" className={`${actualColor[2]}`}>
                            <span className="text-black">
                              {element.institutionName}
                            </span>
                          </li>
                        </span>
                        <span className="font-mono block text-slate-900 italic md:text-lg sm:text-sm xs:text-xs">
                          {element.courseName}
                        </span>
                        <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                          ({element.startingDate_education}/
                          {element.finishingDate_education})
                        </span>
                      </div>
                    ))}
                  </div>
                  {/*Personal data*/}
                  <div
                    id="change"
                    className={` border-b-2 ${actualColor[1]} text-center rounded-full mt-4 mb-4`}
                  >
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
                      {data.personalData.map((element) => (
                        <div>
                          {element.country}, {element.province}
                        </div>
                      ))}
                    </span>
                    <span className="font-mono block text-black font-bold mt-4 md:text-lg sm:text-sm xs:text-xs">
                      <li id="change" className={`${actualColor[2]}`}>
                        <span className="text-black">Nacionalidad</span>
                      </li>
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      {data.personalData.map((element) =>
                        element.nationalities.length > 1
                          ? (element.nationalities[-1] = element
                              ? element.nationalities + "."
                              : element.nationalities + ",")
                          : element.nationalities + "."
                      )}
                    </span>
                    <span className="font-mono block text-black font-bold mt-4 md:text-lg sm:text-sm xs:text-xs">
                      <li id="change" className={`${actualColor[2]}`}>
                        <span className="text-black">Permiso de trabajo</span>
                      </li>
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      {data.personalData.map((element) =>
                        element.workPermits.length > 1
                          ? (element.workPermits[-1] = element
                              ? element.workPermits + "."
                              : element.workPermits + ", ")
                          : element.workPermits + "."
                      )}
                    </span>
                  </div>
                </div>
              </div>
              {/*Second col*/}
              <div className="col-span-4 pb-5">
                <div className="md:pl-5 md:pr-2 sm:pl-2 sm:pr-2 xs:pl-1 xs:pr-1">
                  {/*Experience*/}
                  <div
                    id="change"
                    className={`border-b-2 ${actualColor[1]} rounded-full text-center mt-4 mb-4`}
                  >
                    <span className="font-mono block text-black font-bold pt-1 pb-1 md:text-xl sm:text-base xs:text-xs">
                      EXPERIENCIA
                    </span>
                  </div>
                  <div className="pl-3 pr-3 bg-gray-200 rounded-xl">
                    {data.experience.map((element) => (
                      <div>
                        <span className="font-mono block font-bold uppercase md:text-lg sm:text-sm xs:text-xs">
                          <li id="change" className={`${actualColor[2]}`}>
                            <span className="text-black">
                              {element.company}
                            </span>
                          </li>
                        </span>
                        <span className="font-mono block text-slate-900 italic md:text-lg sm:text-sm xs:text-xs">
                          {element.job}
                        </span>
                        <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                          ({element.startingDate_experience}/
                          {element.finishingDate_experience})
                        </span>
                        <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                          {element.description}
                        </span>
                      </div>
                    ))}
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
                    {data.languages.map((element) => (
                      <div>
                        <span className="font-mono block font-bold md:text-lg sm:text-sm xs:text-xs">
                          <li id="change" className={`${actualColor[2]}`}>
                            <span className="text-black">{element.id}</span>
                          </li>
                        </span>
                        <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                          Habla:
                          <br />
                          {element.speaking}
                        </span>
                        <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                          Lectura:
                          <br />
                          {element.reading}
                        </span>
                        <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                          Escritura:
                          <br />
                          {element.writing}
                        </span>
                      </div>
                    ))}
                    {/*ALL LANGUAGES*/}
                  </div>
                </div>
              </div>
              <div
                id="change"
                className={`col-span-8 border-t-2 border-black ${actualColor[0]} rounded-t-3xl md:pl-5 md:pr-2 sm:pl-2 sm:pr-2 xs:pl-1 xs:pr-1`}
              >
                <div className="grid grid-cols-8 gap-1 h-full pb-3">
                  <div className="col-span-8 pb-2">
                    <div className="flex justify-center ">
                      <div id="change" className={`text-center`}>
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
                      {data.personalData.map((element) => (
                        <div>{element.mobile_phone}</div>
                      ))}
                    </span>
                  </div>
                  <div className="col-span-4 text-center mt-1">
                    <span className="font-mono block text-black font-bold md:text-lg sm:text-sm xs:text-xs">
                      <span className="text-black">Redes sociales</span>
                    </span>
                    <span className="font-mono block text-slate-900 md:text-lg sm:text-sm xs:text-xs">
                      {data.personalData.map((element) =>
                        element.web_pages.length > 1
                          ? element.web_pages.map((pages) => pages.url + " ")
                          : element.web_pages[0].url
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/*FINISH THIRD OPTION*/}
          </div>
          {/*Options col*/}
          <div className="col-span-2 shadow-[0_6px_5px_0px_rgba(0,0,0,0.3)] border-2 border-black h-fit md:p-2 sm:p-2 xs:p-1">
            <div className="md:pl-5 md:pr-2 sm:pl-2 sm:pr-2 xs:pl-1 xs:pr-1">
              <div className="border-2 border-slate-300 bg-slate-300 mt-3 md:mb-10 sm:mb-5 xs:mb-3">
                <span className="font-mono block shadow-[0_3px_5px_0px_rgba(0,0,0,0.3)] text-black font-bold p-1 md:text-xl sm:text-base xs:text-xs ">
                  Seleccione estilo de CV
                </span>
              </div>
              <div className="flex justify-center md:h-16 sm: xs:h-11">
                <div className="flex justify-center border-2 rounded-full shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] bg-gray-200 border-black md:w-3/4 sm: xs:w-full">
                  <button
                    id="optionOne"
                    className="font-mono text-black shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] mx-auto my-auto rounded-2xl border-2 border-blue-300 bg-blue-300 hover:bg-blue-400 hover:border-blue-400 duration-300 md:p-3 md:text-base md:w-1/6 md:h-4/5 sm:p-1 sm:text-sm sm:h-4/6 sm:w-1/4 xs:p-1 xs:text-xs xs:w-1/4 xs:rounded-lg"
                    onClick={(e) => showCV(e)}
                    title="Estilo uno"
                  >
                    1
                  </button>
                  <button
                    id="optionTwo"
                    className="font-mono text-black shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] mx-auto my-auto rounded-2xl border-2 border-blue-300 bg-blue-300 hover:bg-blue-400 hover:border-blue-400 duration-300 md:p-3 md:text-base md:w-1/6 md:h-4/5 sm:p-1 sm:text-sm sm:h-4/6 sm:w-1/4 xs:p-1 xs:text-xs xs:w-1/4 xs:rounded-lg"
                    onClick={(e) => showCV(e)}
                    title="Estilo dos"
                  >
                    2
                  </button>
                  <button
                    id="optionThree"
                    className="font-mono text-black shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] mx-auto my-auto rounded-2xl border-2 border-blue-300 bg-blue-300 hover:bg-blue-400 hover:border-blue-400 duration-300 md:p-3 md:text-base md:w-1/6 md:h-4/5 sm:p-1 sm:text-sm sm:h-4/6 sm:w-1/4 xs:p-1 xs:text-xs xs:w-1/4 xs:rounded-lg"
                    onClick={(e) => showCV(e)}
                    title="Estilo tres"
                  >
                    3
                  </button>
                </div>
              </div>

              <div className="border-2 border-slate-300 bg-slate-300 md:mt-10 md:mb-10 sm:mt-5 sm:mb-5 xs:mt-3 xs:mb-3">
                <span className="font-mono block shadow-[0_3px_5px_0px_rgba(0,0,0,0.3)] text-black font-bold p-1 md:text-xl sm:text-base xs:text-xs ">
                  Seleccione color de CV
                </span>
              </div>
              <div className="flex justify-center md:h-16 sm: xs:h-11">
                <div className="flex justify-center md:w-3/5 sm:w-3/4 xs:w-full">
                  <div className="flex justify-center border-2 rounded-full shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] bg-gray-200 border-black md:w-3/4 sm: xs:w-full">
                    <button
                      id="red"
                      className="font-mono shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] border-2 border-red-500 mx-auto my-auto md:p-4 sm:p-2 xs:p-2 rounded-full bg-red-500 hover:bg-red-600 hover:border-red-600 duration-300"
                      title="Finanzas, Banca, Seguros"
                      onClick={(e) => changeColor(e)}
                    ></button>
                    <button
                      id="blue"
                      className="font-mono shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] border-2 border-blue-500 mx-auto my-auto md:p-4 sm:p-2 xs:p-2 rounded-full bg-blue-500 hover:bg-blue-600 hover:border-blue-600 duration-300"
                      onClick={(e) => changeColor(e)}
                      title="Profesionales IT, Directivos, Gestores"
                    ></button>
                    <button
                      id="orange"
                      className="font-mono shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] border-2 border-orange-500 mx-auto my-auto md:p-4 sm:p-2 xs:p-2 rounded-full bg-orange-500 hover:bg-orange-600 hover:border-orange-600 duration-300"
                      onClick={(e) => changeColor(e)}
                      title="Marketing, Hostelería, Cocinero, Pastelero"
                    ></button>
                    <button
                      id="green"
                      className="font-mono shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] border-2 border-green-500 mx-auto my-auto md:p-4 sm:p-2 xs:p-2 rounded-full bg-green-500 hover:bg-green-600 hover:border-green-600 duration-300"
                      onClick={(e) => changeColor(e)}
                      title="Medio ambiente, Ecología"
                    ></button>
                    <button
                      id="violet"
                      className="font-mono shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] border-2 border-violet-500 mx-auto my-auto md:p-4 sm:p-2 xs:p-2 rounded-full bg-violet-500 hover:bg-violet-600 hover:border-violet-600 duration-300"
                      onClick={(e) => changeColor(e)}
                      title="Dentista, Decorador/Decoradora, Profesor Yoga/Profesora Yoga"
                    ></button>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mb-8 p-1 md:mt-16 sm:mt-10 xs:mt-8">
                <button
                  className="font-mono font-bold text-black hover:text-white border-2 bg-transparent border-green-400 hover:bg-green-400 duration-300 rounded-xl p-1 md:w-1/3 md:h-4/5 md:text-lg sm:text-sm xs:text-xxs"
                  title="¡Click para descargar CV!"
                  onClick={(e) => generatePDF(e)}
                >
                  Descargar HV
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
      </main>
    </Layout>
  );
}
