import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";
import { animateWithGsap } from "../utils/animations";

import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    animateWithGsap(
      "#title",
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
      },
      "top 80%"
    );

    animateWithGsap(
      ".link1",
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
      },
      "top 75%"
    );

    animateWithGsap(
      ".link2",
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
      },
      "top 70%"
    );
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end, justify-between">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="link1 link">
              Watch the flim
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link2 link">
              Watch the event
              <img src={rightImg} alt="watch" className="ml-2" />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
