import { useContext } from "react";
import { allDocs } from "contentlayer/generated"
import {
  isBlogArgInvalid,
} from "../../utils/funcs";
import { termContext } from "../Terminal";
import Usage from "../Usage";
import { parseInt } from "lodash";

const Blog: React.FC = () => {
  const { arg } = useContext(termContext);

  const docs = allDocs
  const doc = allDocs.at(parseInt(arg[1]))

  if (!doc) {
    return <div>Document not found or invalid argument.</div>;
  }

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    <Usage cmd="blog" />
  isBlogArgInvalid(arg, "go", docs.length) ? (
    <Usage cmd="blog" />
  ) : null;

  return doc ? (
    <div data-testid="blog" >
      <article className="mx-auto max-w-xl py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">{doc.title}</h1>
        </div>
        <div
          className="[&>*]:mb-4 [&>*:last-child]:mb-0 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: doc.body.html }}
        />
      </article>
    </div>
  ) : (
    checkArg()
  );
};

export default Blog;
