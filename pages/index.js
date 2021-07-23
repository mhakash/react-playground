import fs from "fs";
import path from "path";
import Link from "next/link";

export default function Home({ playgrounds }) {
  return (
    <div className="px-4">
      <ul className=" list-disc list-inside">
        {playgrounds.map((e) => (
          <li key={e.name} className="mb-1 text-sm">
            <Link href={`/${e.name}`}>
              <a className="text-gray-800 hover:text-blue-800">{e.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const getDataFromFileName = (fileName = "") => {
  const ext = path.extname(fileName);
  const baseName = path.basename(fileName, ext);
  const title = baseName.replace(/[A-Z]/g, (l) => ` ${l.toLowerCase()}`);

  return {
    name: baseName,
    title: title.charAt(0).toUpperCase() + title.slice(1),
  };
};

export const getStaticProps = () => {
  const files = fs.readdirSync(path.join(process.cwd(), "pages"));
  const filteredFiles = files.filter(
    (e) => !e.startsWith("_") && e !== "index.js"
  );

  const playgrounds = filteredFiles.map((e) => getDataFromFileName(e));

  return {
    props: {
      playgrounds,
    },
  };
};
