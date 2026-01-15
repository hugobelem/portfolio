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
              description={["api created for depoc with", "python & django."]}
              year="2024"
              where="depoc/br"
              githubURL="https://github.com/depoc/api"
              externalURL="https://documenter.getpostman.com/view/40473934/2sBXVfkC3U"
              bg="bg-secondary"
              text="text-primary"
            />

            <Card
              title="depopy"
              description={["depoc python library"]}
              year="2024"
              where="depoc/br"
              githubURL="https://github.com/depoc/depopy"
              bg="bg-secondary"
              text="text-primary"
            />

            <Card
              title="depoc frontend"
              description={[
                "web ui using next.js & typescript",
                "fetching depoc api data.",
              ]}
              year="[under development]"
              where="depoc/br"
              githubURL="https://github.com/depoc/frontend"
              bg="bg-secondary"
              text="text-primary"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
