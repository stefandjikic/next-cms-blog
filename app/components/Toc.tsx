import React from "react";
import { slugify } from "../utils/helpers";

const Toc = ({ headings }: any) => (
  <div className="max-w-2xl mx-auto mt-8 text-center border rounded-sm dark:border-purple-950 ">
    <h2 className="text-xl font-bold p-2 mb-5 border-b dark:border-purple-950 bg:amber-50 dark:bg-slate-900/20">
      Table of Contents
    </h2>
    <nav>
      <ul>
        {headings?.map((heading: any) => (
          <li key={heading?._key} className="mb-2">
            <a
              className="hover:underline"
              href={`#${slugify(heading.children[0].text)}`}
            >
              {heading.children[0].text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

export default Toc;
