# App creada para participar en la hackaton de Midudev e Infojobs


## Generador de CV mediante consumo de la API de Infojobs

Esta aplicación es parte de la participación en la hackatón de Infojobs. Su objetivo es crear un generador de CV (Curriculum Vitae) a PDF utilizando la API de Infojobs el usuario puede seleecionar plantillas predeterminadas y colores. La aplicación ha sido desarrollada utilizando las siguientes tecnologías:

- Next.js
- React.js
- Tailwind CSS

### Características
- Generación de CV personalizados utilizando la API de Infojobs.
- Integración con la API de Infojobs para obtener datos relevantes para el CV.
- Diseño atractivo y responsive gracias a Tailwind CSS.
- Tres templates seleccionables y colores disponibles 

## Participantes
- https://github.com/DiegoMolina04
- https://github.com/David-Viuche

### Instalación
Clona el repositorio en tu máquina local:
```bash
git clone https://github.com/David-Viuche/info_cv_share.git
```
Navega hasta el directorio del proyecto:
```bash
cd repo
```
Instala las dependencias:
```bash
npm install
```
Inicia la aplicación:
```bash
npm run dev
```
La aplicación estará disponible en http://localhost:3000.

Configuración de la API de Infojobs
Antes de poder utilizar la aplicación, es necesario configurar la API de Infojobs. Sigue estos pasos:

Regístrate en la página de desarrolladores de Infojobs y crea una nueva aplicación: https://www.infojobs.net/empresas/developer/

Obtén las claves de API (Client ID y Client Secret) para tu aplicación.

Crea un archivo .env.local en el directorio raíz del proyecto y agrega las siguientes variables de entorno ejemplo:

```bash
NEXT_PUBLIC_CLIENT_ID="elclientid"
NEXT_PUBLIC_CLIENT_SECRET="elclientsecret"
NEXT_PUBLIC_REDIRECT_URL="https://oauth.pstmn.io/v1/callback"
NEXT_PUBLIC_SCOPE="CANDIDATE_READ_CURRICULUM_SKILLS,CANDIDATE_READ_CURRICULUM_PERSONAL_DATA,CANDIDATE_READ_CURRICULUM_FUTURE_JOB,CANDIDATE_READ_CURRICULUM_EXPERIENCE,CANDIDATE_READ_CURRICULUM_EDUCATION,CANDIDATE_PROFILE_WITH_EMAIL,CV"
```
Reemplaza TU_CLIENT_ID, TU_CLIENT_SECRET, SCOPE y CALLBACK URL con tus claves de API de Infojobs.
