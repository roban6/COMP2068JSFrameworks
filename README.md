## Robanpreet Singh Personal Portfolio Website

## Live Website

Live Deployment Link: https://robanpreet-portfolio.onrender.com

## Project Overview

This project is a personal portfolio website created for Robanpreet Singh, a Computer Programming student at Georgian College. The purpose of this website is to present my background, technical skills, academic projects, and contact information in a professional online format.

The website was built using Node.js, Express.js, and the Handlebars view engine. It includes multiple pages, a shared layout, responsive styling, navigation links, project cards, and contact information.

## Student Information

* **Name:** Robanpreet Singh
* **Program:** Computer Programming Diploma
* **College:** Georgian College
* **Email:** [robankang34@gmail.com](mailto:robankang34@gmail.com)
* **GitHub:** https://github.com/roban6
* **LinkedIn:** https://www.linkedin.com/in/robanpreet-singh

## Website Pages

The portfolio website includes four main pages:

1. Home
2. About Me
3. Projects
4. Contact Me

## Features

* Express.js web application
* Handlebars view engine
* Shared layout using `layout.hbs`
* Four main portfolio pages
* Responsive navigation bar
* Hero section with profile image
* About Me section
* Technical skills section
* Project cards
* Contact information section
* Footer with GitHub, LinkedIn, and email links
* Responsive CSS for desktop, tablet, and mobile screens
* Deployed live using Render

## Technologies Used

* Node.js
* Express.js
* Handlebars
* HTML5
* CSS3
* JavaScript
* Git
* GitHub
* Visual Studio Code
* Render

## Project Structure

```text
ASSIGNMENT1/
│
├── .github/
│   ├── copilot-instructions.md
│   ├── copilot-context.md
│   ├── copilot-session.md
│   ├── copilot-review.md
│   └── copilot-fix-plan.md
│
├── app.js
├── package.json
├── README.md
│
├── routes/
│   └── index.js
│
├── views/
│   ├── layout.hbs
│   ├── index.hbs
│   ├── about.hbs
│   ├── projects.hbs
│   ├── contact.hbs
│   └── error.hbs
│
└── public/
    ├── images/
    │   └── profile.jpg
    │
    └── stylesheets/
        └── style.css
```

## Route List

| Route       | Page       |
| ----------- | ---------- |
| `/`         | Home       |
| `/about`    | About Me   |
| `/projects` | Projects   |
| `/contact`  | Contact Me |

## Page Descriptions

## Home Page

The Home page introduces Robanpreet Singh as a Computer Programming student at Georgian College. It includes a welcome message, professional title, profile image, and buttons linking to the Projects and Contact pages.

## About Me Page

The About Me page explains my academic background, programming interests, learning goals, and technical skills. It highlights my development as a Computer Programming student and my interest in software development, web technologies, databases, and problem-solving.

## Projects Page

The Projects page displays programming-related projects connected to my Computer Programming diploma. The projects include a personal portfolio website, a student records management system, a client report processor, and an inventory management application.

## Contact Me Page

The Contact Me page provides my email address, GitHub profile, and LinkedIn profile. It allows visitors to connect with me professionally.

## Local Installation and Setup

To run this project locally, follow these steps:

1. Clone the repository.

```bash
git clone https://github.com/roban6/ASSIGNMENT1.git
```

2. Navigate into the project folder.

```bash
cd ASSIGNMENT1
```

3. Install project dependencies.

```bash
npm install
```

4. Start the application.

```bash
npm start
```

5. Open the website in a browser.

```text
http://localhost:3000
```

## Deployment

This project was deployed using Render.

Live Deployment Link: https://robanpreet-portfolio.onrender.com

The Render deployment uses the following settings:

| Setting        | Value         |
| -------------- | ------------- |
| Runtime        | Node          |
| Build Command  | `npm install` |
| Start Command  | `npm start`   |
| Root Directory | `ASSIGNMENT1` |
| Instance Type  | Free          |

## GitHub Copilot Documentation

The `.github` folder contains supporting project documentation files:

* `copilot-instructions.md`
* `copilot-context.md`
* `copilot-session.md`
* `copilot-review.md`
* `copilot-fix-plan.md`

These files document the project instructions, context, development notes, review process, and improvement plan.

## Reflection

This portfolio project helped me practice building a complete web application using Express.js and Handlebars. I learned how to organize an Express project, create routes, use Handlebars views, apply a shared layout, and style a website using CSS.

One important part of this project was understanding how routes connect to different pages. The `routes/index.js` file controls the Home, About Me, Projects, and Contact Me pages. Each route renders a separate Handlebars view, which makes the website easier to organize and maintain.

I also improved my understanding of responsive design. The CSS file includes layout rules for larger screens and media queries for smaller screens. This helps the website display properly on desktops, tablets, and mobile devices.

Another useful part of this project was using Git and GitHub during development. Creating commits after major steps helped track progress and provided a clear development history. Deploying the project on Render also helped me understand how a local web application can be published online.

Overall, this assignment gave me practical experience with server-side web development, project organization, version control, deployment, and professional portfolio design.

## Future Improvements

Possible future improvements include:

* Add more completed programming projects.
* Add project screenshots.
* Add a downloadable resume.
* Add a functional contact form.
* Add more JavaScript interactivity.
* Update the LinkedIn link with the final profile URL.
* Add direct GitHub links for each project.

## External Resources

No external website templates were used. The portfolio was created using Express.js, Handlebars, HTML, CSS, and custom project content.
