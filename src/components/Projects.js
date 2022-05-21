import React from 'react';
import { GitHub, ExternalLink, YouTube, Figma } from './Graphic';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'ScanSearch',
      url: 'https://www.scansearch.com',
      img: 'scansearch.png',
      desc: (
        <>
          <p>
            ScanSearch provides full-text storage and retrieval on all your
            scanned documents. A long-time friend and former boss approached me
            with this product idea.
          </p>
        </>
      ),
      links: [
        {
          id: 'link-1-1',
          img: <ExternalLink width='20' height='20' />,
          url: 'https://www.scansearch.com',
          title: 'ScanSearch',
        },
      ],
      techs: ['ASP.NET/C#', 'JQuery', 'JSON/REST', 'SQL'],
    },
    {
      id: 2,
      title: 'BryantCobo.com',
      url: 'https://github.com/TheBryantCobo/bryantcobo',
      img: 'bryantcobo.png',
      desc: (
        <>
          <p>
            I created the website you're viewing now. The goal was to create a
            fast and simple site using only HTML, CSS, and React. This site was
            built from scratch, without a template.
          </p>
        </>
      ),
      links: [
        {
          id: 'link-2-1',
          img: <GitHub width='20' height='20' />,
          url: 'https://github.com/TheBryantCobo/bryantcobo',
          title: 'GitHub',
        },
        {
          id: 'link-2-2',
          img: <Figma width='20' height='20' />,
          url: 'https://www.figma.com/file/ypcPvV09LTa2Pqvsgh9T9G/BryantCobo.com-Design',
          title: 'Figma',
        },
      ],
      techs: ['React', 'HTML/CSS'],
    },
    {
      id: 3,
      title: 'EdTech Cafe',
      url: 'https://www.youtube.com/c/edtechcafe',
      img: 'edtech-cafe.png',
      desc: (
        <>
          <p>
            I was a technology director for a public school district when the
            pandemic hit. My immediate challenge was to help teachers, students,
            and parents navigate learning online. To help our learning community
            I created tutorial videos and shared them on YouTube.
          </p>
        </>
      ),
      links: [
        {
          id: 'link-3-1',
          img: <YouTube width='20' height='20' />,
          url: 'https://www.youtube.com/c/edtechcafe',
          title: 'EdTech Cafe Channel',
        },
        {
          id: 'link-3-2',
          img: <ExternalLink width='20' height='20' />,
          url: 'https://edtech.cafe',
          title: 'EdTech Cafe Blog',
        },
      ],
      techs: ['Wordpress', 'Camtasia', 'YouTube'],
    },
  ];

  return (
    <>
      <div className='anchor' id='projects'></div>
      <section className='projects'>
        <div className='container'>
          <div className='content'>
            <h2>Projects</h2>
            <div className='projects--list'>
              {projects.map((project) => {
                return <Project key={project.id} {...project} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Project = ({ id, title, url, img, desc, links, techs }) => {
  return (
    <>
      <article className='project' key={id}>
        <div className='project--img-container'>
          <a
            href={url}
            target='_blank'
            rel='noreferrer'
            className='project--img--a'
          >
            <img
              src={`./images/${img}`}
              width='100%'
              height='100%'
              alt={title}
              title={title}
              className='project--img'
            />
          </a>
        </div>

        <div className='project--info'>
          <div className='project--title'>
            <a href={url} target='_blank' rel='noreferrer'>
              {title}
            </a>
          </div>
          <div className='project--desc'>{desc}</div>
          <ul className='project--techlist'>
            {techs.map((tech) => {
              return <li key={tech}>{tech}</li>;
            })}
          </ul>
          <div className='project--links'>
            {links.map((link) => {
              return (
                <div key={link.id}>
                  <a
                    href={link.url}
                    key={link.id}
                    className='project--link'
                    target='_blank'
                    rel='noreferrer'
                  >
                    {link.img}
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        <div className='clearfix'></div>
      </article>
    </>
  );
};

export default Projects;
