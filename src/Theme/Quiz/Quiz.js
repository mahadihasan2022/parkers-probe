import React from "react";
import "./Quiz.css";

const Quiz = () => {
  return (
    <section class=" quiz-body p-5 m-5">
      <h1>Frequently Asked Question</h1>
      <div class="question-body">
        <div class="">
          <div class="container">
            <div class=""></div>
            <div class="">
              <div class="padding">
                <details class=" pb-2">
                  <summary class="pl-3 text-width">
                    What is a solar eclipse?
                  </summary>

                  <span className="info">
                    An eclipse happens when a planet or a moon gets in the way
                    of the Sun’s light. Here on Earth, we can experience two
                    kinds of eclipses: solar eclipses and lunar eclipses.
                  </span>
                </details>
                <details class="ques-cont mb-2">
                  <summary class="pl-3 text-width">
                    What causes the seasons?
                  </summary>

                  <span className="info">
                    Earth's tilted axis causes the seasons. Throughout the year,
                    different parts of Earth receive the Sun's most direct rays.
                    So, when the North Pole tilts toward the Sun, it's summer in
                    the Northern Hemisphere. And when the South Pole tilts
                    toward the Sun, it's winter in the Northern Hemisphere.
                  </span>
                </details>
                <details class="mb-2">
                  <summary class=" pl-3 w-100 text-width">
                    What is space weather?
                  </summary>

                  <span className="info">
                    Activity on the Sun’s surface creates a type of weather
                    called space weather. The Sun is really far away—about 93
                    million miles (150 million kilometers)—from Earth. However,
                    space weather can affect Earth and the rest of the solar
                    system.
                  </span>
                </details>
              </div>
              <div class="">
                <details class="mb-2">
                  <summary class=" pl-3 w-100 text-width">
                    Where does the Sun's energy come from?
                  </summary>

                  <span className="info">
                    Solar energy is created by nuclear fusion that takes place
                    in the sun. Fusion occurs when protons of hydrogen atoms
                    violently collide in the sun's core and fuse to create a
                    helium atom. This process, known as a PP (proton-proton)
                    chain reaction, emits an enormous amount of energy
                  </span>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
