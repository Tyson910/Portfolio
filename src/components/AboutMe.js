import classNames from 'classnames';

import styles from '../../styles/details.module.css';

export default function AboutMe() {
  return (
    <section className="text-lg">
      <h3
        className="text-4xl mb-8 font-semibold pt-20"
        id="about"
      >
        About Me
      </h3>
      <p className="mb-7">
        I am a Software Developer
        specializing in Front-End
        development and creating
        accessible UIs. I'm experienced
        in using HTML, CSS, JavaScript,
        and JS frameworks. Lately, I
        have been learning to use NextJS
        alongside a headless CMS
        (Prismic)
      </p>
      <details
        className={classNames(
          styles.details,
          'space-y-10'
        )}
      >
        <summary className="hover:underline hover:cursor-pointer w-40">
          More About Me
        </summary>

        <p>
          I graduated from Missouri
          State University in the Spring
          of 2021 with a Bachelor's
          degree in Information
          Technology and an emphasis in
          Application Development.
        </p>

        <p>
          My experience consists of
          using my skills & knowledge at
          various non profits, PivotTech
          & Congregational Health &amp;
          Education Network (CHEN) both
          based in Nashville, part time
          as well as a full time role as
          a front-end software engineer.
          PivotTech is a software
          bootcamp, with a focus on
          helping people from
          underrepresented groups{' '}
          <em>'pivot'</em> from their
          current career into a new one
          in technology. I was
          responsible for giving
          one-on-one or small group
          instruction and lesson review
          as well as collaborating with
          other instructors to recognize
          issues students are facing and
          recommend solutions. I helped
          CHEN by creating web forms and
          maintaining their database to
          aid those in need of
          assistance due to the COVID-19
          pandemic.
        </p>

        <p>
          I take in pride in working
          with other individuals who are
          passionate about using modern
          technology and great design to
          deliver incredible experiences
          and products to people in a
          way that is environmentally
          conscious, socially inclusive,
          and accessible to all.
        </p>

        <p>
          I love learning new things,
          and trying new techonologies.
          This website was built
          using&nbsp;a combination of
          React, NextJS, TailwindCSS,
          and vanilla CSS.&nbsp; My next
          goal is to start a blog,
          writing about new
          techonologies I'm learning,
          hosted on this same site!
        </p>

        <p>
          With my free time,&nbsp; I
          like to cook as well as
          explore local restaurants,
          complete puzzles, and stay
          active by playing pick up
          basketball.&nbsp;
        </p>
      </details>
    </section>
  );
}
