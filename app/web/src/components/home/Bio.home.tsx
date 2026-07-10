import InforViewer from "@/helper/InforViewer";
import Image from "next/image";

const Bio = () => {
  return (
    <section>
      <h2 className=" text-3xl font-semibold mb-3">About</h2>
      <div className="flex gap-5 flex-col-reverse sm:flex-row justify-center items-center">
        <div>
          <p className="py-6">
            I'm a{" "}
            <InforViewer
              url="https://www.freecodecamp.org/news/what-is-a-full-stack-developer-back-end-front-end-full-stack-engineer/"
              info="A full-stack developer is a versatile software professional proficient in building both the front-end (user interface) and back-end (server-side/database) of applications."
              text="Full-Stack Developer"
            />{" "}
            and computer science student. I'm from{" "}
            <InforViewer
              url="https://en.wikipedia.org/wiki/Multan"
              text="Multan"
              info=" A major cultural, religious and economic centre of the Punjab region, Multan is one of the oldest inhabited cities of Asia, with a history stretching deep into antiquity"
            />
            , Pakistan and I've been serving to the web for the past two years
            and have learned many amazing things.
          </p>
          <p>
            I've been passionate about computers since childhood and wanted to
            be their friend, so I learned their language. My interest in the web
            introduced me to JavaScript 🖤
          </p>
        </div>
        <Image
          className="rounded-full max-w-45 shadow-lg grayscale border contrast-150 border-gray-500 bg-gray-300"
          src="/profile-picture.webp"
          alt="Ahmad Siddique — Full-Stack Developer from Multan, Pakistan"
          height={450}
          width={450}
          priority
        />
      </div>
      <div>
        {/* <p className="py-6">
          I started with{" "}
          <InforViewer
            url="https://en.wikipedia.org/wiki/HTML"
            text="HTML"
            info="HTML (HyperText Markup Language) is the most basic building block of the Web"
          />{" "}
          and{" "}
          <InforViewer
            url="https://en.wikipedia.org/wiki/CSS"
            info="CSS is the language we use to style a Web page."
            text="CSS"
          />
          . They taught me how beautiful things can be. I keep learning and
          practicing by making amazing things, and somewhere along the way, how
          I learned Tailwind is still a mystery.
        </p> */}
        <p className="py-6">
          After completing <InforViewer
            url="https://en.wikipedia.org/wiki/HTML"
            text="HTML"
            info="HTML (HyperText Markup Language) is the most basic building block of the Web"
          />{" "}
          and{" "}
          <InforViewer
            url="https://en.wikipedia.org/wiki/CSS"
            info="CSS is the language we use to style a Web page."
            text="CSS"
          />, I started learning
          <InforViewer
            url="https://en.wikipedia.org/wiki/JavaScript"
            text="JavaScript"
            info="JavaScript is a programming language and core technology of the Web, alongside HTML and CSS"
          />
          , it took time—but great things take time. I consistently broke down
          each concept, which helped me steadily level up my JavaScript skills.
        </p>
        <p className="pb-6">
          As{" "}
          <InforViewer
            url="https://en.wikipedia.org/wiki/Ben_Parker_(disambiguation)"
            text="Spidey’s uncle"
            info="Ben Parker, known as Uncle Ben, is a fictional character who is the uncle of Spider-Man."
          />{" "}
          said, <i>“With great power comes great responsibility.”</i> As my
          JavaScript skills grew stronger,{" "}
          <InforViewer
            info="The library for web and native user interfaces"
            url="https://react.dev/"
            text="React"
          />{" "}
          followed—bringing more power, structure, and responsibility to build
          scalable user interfaces.
        </p>
        <p className="pb-6">
          React was just the start of my journey. After that, I learned{" "}
          {[
            {
              text: "Node.js",
              url: "https://nodejs.org/",
              info: "Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more.",
            },
            {
              text: "Express",
              url: "https://expressjs.com/",
              info: "Express.js, or simply Express, is a back end web application framework for Node.js,",
            },
            {
              text: "Next.js",
              url: "https://nextjs.org/",
              info: "Next.js is an open-source full-stack web development framework created by the private company Vercel",
            },
            {
              text: "MongoDB",
              url: "https://www.mongodb.com/",
              info: "MongoDB is a popular, open-source NoSQL document-oriented database designed for high performance, flexibility, and scalability.",
            },
            {
              text: "Mongoose",
              url: "https://mongoosejs.com/",
              info: "Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js, designed to manage data relationships, provide schema validation, and translate between code objects and MongoDB documents.",
            },
          ].map((e) => {
            return (
              <InforViewer
                key={e.info}
                url={e.url}
                info={e.info}
                text={e.text}
              />
            );
          })}
          , &{" "}
          <InforViewer
            info="Redux is an open-source JavaScript library used for predictable, centralized state management in web applications, most commonly paired with React."
            url="https://redux-toolkit.js.org/"
            text="Redux"
          />{" "}
          . The list keeps expanding, and while I don’t know where it ends but
          my projects below definitely do
        </p>
      </div>
    </section>
  );
};

export default Bio;
