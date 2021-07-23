import React from "react";
import Link from "next/link";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen items-center text-gray-800 bg">
      <Head>
        <title>React Playground</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full p-4 mb-2">
        <Link href="/">
          <a className="text-lg font-bold my-2 text-gray-700 hover:text-gray-800 hover:underline">
            React Playground
          </a>
        </Link>
      </div>

      <div className="flex-1 w-full">{children}</div>

      <div className="text-sm mt-4 p-4 bg-gradient-to-r from-gray-700 to-gray-800 w-full text-gray-100 text-center">
        React playgroud 2021
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
