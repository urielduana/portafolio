import { Button, Tooltip, Link } from "@nextui-org/react";
import { Plus } from "react-feather";

import technologies from "../../data/technologies.json";

export default function AboutSection() {
  return (
    <section className="" id="about">
      <div className="bg-vadose-300 text-surface-100 text-xl px-16 mt-20">
        <div className="flex justify-center">
          <div className="max-w-3xl text-center mt-20 mb-44">
            {/* Title */}
            <h2 className="text-3xl font-semibold">
              Hi, I’m Uriel. Nice to meet you.
            </h2>
            {/* Paragraph description */}
            <div className="font-light my-10">
              <p>
                Full Stack Developer Junior, with a lot of desire to learn more
                every day. Loves learn new-come technologies and be aware of
                dailty tech advancements.
              </p>
              <p>
                I'm quietly confident, naturally curious, and perpetually
                working on improving my chops one challenge at a time.
              </p>
            </div>
            {/* Buttons */}
            <div>
              <Button
                className="border-surface-200 text-surface-200"
                variant="bordered"
                size="lg"
                startContent={<Plus />}
              >
                More About Me
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center -mt-32 mb-20 text-surface-100">
        {/* Div Technologies */}
        <div className=" bg-vadose-400 w-11/12 rounded-lg">
          {/* Main div */}
          <div className="flex flex-col justify-center align-middle text-center p-10">
            {/* Title */}
            <div>
              <h2 className="text-3xl font-semibold">
                Technologies I've worked with...
              </h2>
            </div>
            {/* Cards */}
            <div className="flex flex-wrap mt-10 gap-7 justify-center">
              {technologies.technologies.map((technology) => (
                <Link href={technology.link} isExternal key={technology.id}>
                  <Tooltip
                    content={technology.popup}
                    className="bg-vadose-500 text-surface-100"
                  >
                    <div className="border rounded-md border-surface-200 font-bold text-surface-100 w-64 py-1.5 px-5 flex justify-between items-center">
                      <img
                        className=""
                        src={technology.image}
                        alt={technology.name}
                      />
                      <h4 className="text-2xl">{technology.name}</h4>
                    </div>
                  </Tooltip>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
