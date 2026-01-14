import { quicksand } from "./fonts";

export function AccountsCarousel() {
  return (
    <main>
      <div className="grid grid-cols-2 mt-16 items-center justify-between">
        <p className={`ml-1 text-2xl sm:text-6xl text-start`}>PROJECTS</p>
      </div>
      <div className="overflow-hidden">
        <div className="overflow-auto flex">
          <div className="overflow-x-auto scrollbar-hidden flex px-1 pt-1 pb-5 gap-4 font-bold">
            <div className="relative min-w-77.25 min-h-112.5 sm:min-w-100 sm:min-h-125 shrink-0 rounded-md ring-1 ring-secondary bg-primary">
              <p className="absolute top-4 left-4 z-10 text-4xl text-white">
                space chicken
              </p>
              <p
                className={`absolute top-14 left-4 z-10 text-xs text-white ${quicksand.className}`}
              >
                game made in javascript &
                <span>
                  <br />
                  the p5.js library
                </span>
              </p>

              <p className="absolute bottom-4 left-4 z-10 text-sm text-white">
                2025 • college project
              </p>
              <div className="grid grid-cols-2 absolute bottom-5 right-4 gap-4">
                <a
                  href="https://github.com/hugobelem/gold"
                  target="_blank"
                  className="z-10 text-4xl text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m18 16 4-4-4-4" />
                    <path d="m6 8-4 4 4 4" />
                    <path d="m14.5 4-5 16" />
                  </svg>
                </a>
                <a
                  href="https://hugobelem.github.io/gold/"
                  target="_blank"
                  className="z-10 text-sm text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <>
      <AccountsCarousel />
    </>
  );
}
