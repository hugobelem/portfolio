import { quicksand } from "@/app/fonts";

interface CardProps {
  title: string;
  description: string[];
  year: string;
  where: string;
  githubURL: string;
  externalURL?: string;
  bg?: string;
  text?: string;
}

export default function Card({
  title,
  description,
  year,
  where,
  githubURL,
  externalURL,
  bg = "bg-secondary/20",
  text = "text-primary/75",
}: CardProps) {
  return (
    <div
      className={`relative min-w-77.25 min-h-112.5 sm:min-w-100 sm:min-h-125 shrink-0 rounded-md shadow-lg ${bg} hover:bg-secondary/10`}
    >
      <p className={`absolute top-4 left-4 text-xl ${text}`}>{title}</p>

      <p
        className={`absolute top-14 left-4 pr-2 sm:pr-0 text-4xl sm:text-5xl font-light ${text} ${quicksand.className}`}
      >
        {description.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </p>

      <p className={`absolute bottom-4 left-4 text-sm ${text}`}>
        {year} • {where}
      </p>

      <div
        className={`grid ${
          externalURL ? "grid-cols-2" : "grid-cols-1"
        } absolute bottom-5 right-4 gap-4`}
      >
        <a href={githubURL} target="_blank" className={`text-4xl ${text}`}>
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
          href={externalURL}
          target="_blank"
          className={`text-4xl ${text} ${!externalURL && "hidden"}`}
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
  );
}
