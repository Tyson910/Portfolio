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
        I'm an Undergraduate student in
        my Senior year studying
        Information Technology at
        Missouri State University. I
        will be graduating Spring of
        2021 with a Bachelor's degree in
        Information Technology and an
        emphasis in Application
        Development.
      </p>
      <details className="space-y-5">
        <summary className="mt-2.5 hover:underline hover:cursor-pointer w-40">
          More About Me
        </summary>

        <p>
          With my free time,&nbsp; I
          like to cook as well as
          explore local restaurants,
          complete puzzles, and stay
          active by playing pick up
          basketball.&nbsp;
        </p>

        <p>
          After I graduate, I aim to
          work with other individuals
          who are passionate about using
          modern technology and great
          design to deliver incredible
          experiences and products to
          people in a way that is
          environmentally conscious,
          socially inclusive, and
          accessible to all. Until then,
          I will be having fun with
          code, exploring my creativity,
          and trying to find the best
          slice of pizza in town.
        </p>

        <p>
          My experience consists of
          using my digital skills to
          help a non profit organization
          Congregational Health &amp;
          Education Network (CHEN),
          based in Nashville, TN,
          including creating web forms
          and maintaining their
          database, as well as remotely
          tutoring Confluence Prep
          Academy (St. Louis, MO)
          students in math and coding
          skills.
        </p>

        <p>
          I love learning new things,
          and trying new techonologies.
          This website was built
          using&nbsp;a combination of
          HTML, CSS, and vanilla
          JavaScript.&nbsp; The next
          technology I would like to
          learn is a backend technology
          such as NodeJS or Laravel.
        </p>
      </details>
    </section>
  );
}
