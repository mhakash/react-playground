import React from "react";
import Link from "next/link";
import Head from "next/head";
import GithubIcon from "./Icons/Github";
import { useRouter } from "next/router";
import Customizer from "./Customizer";

const githubBaseURL = "https://github.com/mhakash/react-playground";

const Layout = ({ children }) => {
  const router = useRouter();
  const filePath = router.asPath === "/" ? "/index.js" : router.asPath + ".js";

  return (
    <div className="flex flex-col min-h-screen items-center text-gray-800 bg">
      <Head>
        <title>React Playground</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full mb-2 flex-1 flex">
        <div className="flex-1 w-full">
          <div>
            <Link
              href="/"
              className="text-lg font-bold my-2 text-gray-700 hover:text-gray-800 hover:underline"
            >
              React Playground
            </Link>
          </div>

          <div className="w-full">{children}</div>
        </div>
      </div>

      <a
        className="flex justify-center items-center mt-2"
        href={githubBaseURL + "/blob/main/pages" + filePath}
      >
        <GithubIcon className="w-6 h-6 mr-2" />
        <div>Edit this Page</div>
      </a>
      <div className="text-sm mt-4 p-4 bg-gradient-to-r from-gray-700 to-gray-800 w-full text-gray-100 text-center">
        <div>React playgroud 2023</div>
      </div>

      <style jsx>{`
        .bg {
          background-color: #0093e9;
          background-image: linear-gradient(#fdfbfb, #ebedee);
        }
      `}</style>
    </div>
  );
};

export default Layout;
