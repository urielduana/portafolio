import { Button } from "@nextui-org/react";

import IndexWelcome from "../../assets/img/IndexWelcome.png";
import { Download, Link } from "react-feather";
import TypeAnimation from "../../components/TypeAnimation";
export default function WelcomeSection() {
  return (
    <section className="welcome flex flex-wrap sm:flex-nowrap justify-center text-center mb-32 mx-6" id="welcome">
      {/* Div with welcome text and buttons */}
      <div className="w-max sm:w-1/2 flex flex-col gap-10 justify-center mx-5">
        {/* Welcome text */}
        <div className="sm:text-left">
          <h1 className="text-5xl sm:text-6xl font-bold">
            Hi! I'm <span className="text-vadose-200"> Uriel Duana</span>
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold ">
            And I'm{" "}
            <span className="text-vadose-200">
              <TypeAnimation
                texts={[
                  "Web Developer",
                  "Mobile Developer",
                  "Full Stack Developer",
                ]}
                delay={100}
                infinite={true}
              />
            </span>
          </h2>
        </div>
        {/* Buttons */}
        <div className="flex justify-center sm:justify-end">
          <Button
            className="bg-vadose-100 text-surface-100 text-lg m-2"
            startContent={<Link />}
          >
            Contact
          </Button>
          <Button
            variant="bordered"
            className="border-surface-300 text-surface-300 text-lg m-2"
            startContent={<Download />}
          >
            CV Download
          </Button>
        </div>
      </div>
      {/* Div with welcome image */}
      <div className="w-1/2 flex  justify-center items-center p-5">
        <img src={IndexWelcome} alt="Welcome" />
      </div>
    </section>
  );
}
