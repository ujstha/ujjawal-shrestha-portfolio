<div align="center">
  <br />
    <a href="https://youtu.be/FTH6Dn3AyIQ" target="_blank">
      <img src="https://github.com/ujstha/ujjawal-shrestha-portfolio/assets/26536607/051c378f-ffb3-49bc-b6ee-8018f703540f" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Framer-black?style=for-the-badge&logoColor=white&logo=framer&color=0055FF" alt="framer" />
    <img src="https://img.shields.io/badge/-Three_JS-black?style=for-the-badge&logoColor=white&logo=threedotjs&color=000000" alt="three.js" />
    <img src="https://img.shields.io/badge/-Sanity.io-red?style=for-the-badge&logoColor=white&logo=sanity&color=f77769" alt="sanity.io" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">Ujjawal's 3D Portfolio</h3>

   <div align="center">
   A developer's portfolio to showcase the projects, achievements, and personal information. Built this project by following step by step guide from the detailed tutorial on <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a> YouTube. Thanks to JavaScript Mastery.
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)

## 🚨 Tutorial

This repository contains the code corresponding to an in-depth tutorial available on the YouTube channel, <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a>.

<a href="https://youtu.be/FTH6Dn3AyIQ" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/1736fca5-a031-4854-8c09-bc110e3bc16d" /></a>

## <a name="introduction">🤖 Introduction</a>

Built with Next.js for handling the user interface, Three.js for rendering 3D elements, Framer motion for beautiful animations, Sanity.io for dynamic content, EmailJS for handling the emails, and styled with TailwindCSS, this portfolio demonstrates the developer's skills in a unique manner that creates a lasting impact.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- Three.js
- React Three Fiber
- React Three Drei
- Email JS
- Framer Motion
- Tailwind CSS
- Sanity.io
- Sentry

## <a name="features">🔋 Features</a>

👉 **3D Hero Section**: Captivating introduction featuring a spotlight effect, 3D desktop model, and call-to-action.

👉 **Interactive Professional Experience**: Prominent display of professional background for emphasis and credibility, utilizing animations powered by framer motion.

👉 **Animated Projects**: Features animated sections using framer motion for projects.

👉 **Bento Grid**: Presenting personal information and tech skills using cutting-edge CSS design techniques.

👉 **Contact Section with 3D Earth Model**:Integrates a 3D earth model with email functionality powered by emailjs.

👉 **3D Stars**: Generate stars progressively at random positions using Three.js for background display.

👉 **Sanity.io Implementation**: Utilized headless CMS of sanity.io to deliver my projects and professional experience to the frontend dynamically.

👉 **Responsiveness**: Seamless adaptability across all devices, ensuring optimal viewing experience for every user.

and many more, including code architecture and reusability

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/ujstha/ujjawal-shrestha-portfolio.git
cd ujjawal-shrestha-portfolio
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
NEXT_PUBLIC_RECIPIENT_NAME=your_name_to_send_email
NEXT_PUBLIC_RECIPIENT_EMAIL=your_email_used_to_send_email
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
SENTRY_AUTH_TOKEN=your_sentry_auth_token
```

Replace the placeholder values with your EmailJS, Sanity, and Sentry credentials. You can obtain EmailJS credentials by signing up on the [EmailJS website](https://www.emailjs.com/).
You can obtain Sanity credentials by signing up on the [Sanity website](https://www.sanity.io/).
You can obtain Sentry credentials by signing up on the [Sentry website](https://sentry.io/welcome/)

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
