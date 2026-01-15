import Card from "@/components/card";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-2 mt-16 items-center justify-between">
        <p className={`ml-1 text-2xl sm:text-6xl text-start`}>PROJECTS</p>
      </div>
      <div className="overflow-hidden">
        <div className="overflow-auto flex">
          <div className="overflow-x-auto scrollbar-hidden flex px-1 pt-1 pb-5 gap-4 font-bold">
            <Card
              title="space chicken"
              description={[
                "game created with javascript &",
                "the p5.js library.",
              ]}
              year="2025"
              where="college"
              githubURL="https://github.com/hugobelem/gold"
              externalURL="https://hugobelem.github.io/gold/"
            />

            <Card
              title="depoc api"
              description={["the depoc api build using", "python & django."]}
              year="2024"
              where="depoc/br"
              githubURL="https://github.com/depoc/api"
              externalURL="https://documenter.getpostman.com/view/40473934/2sBXVfkC3U"
              bg="bg-secondary"
              text="text-primary"
            />

            <Card
              title="depopy"
              description={[
                "a python library that simplifies",
                "requests to the depoc api.",
              ]}
              year="2024"
              where="depoc/br"
              githubURL="https://github.com/depoc/depopy"
              bg="bg-secondary"
              text="text-primary"
            />

            <Card
              title="depox / mvp"
              description={[
                "first depoc mvp build with django,",
                "leveraging the template system and dtl.",
              ]}
              year="2024"
              where="depoc/br"
              githubURL="https://github.com/depoc/depox"
              externalURL="https://github.com/depoc"
              bg="bg-secondary"
              text="text-primary"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
