import { useContext } from "react";
import { GlobalContext } from "../context";

const ArticleStatus = ({ isNew }) => {
  return isNew && <span> --Baru</span>;
};

function Article({ title, date, tags, isNew }) {
  const user = useContext(GlobalContext);

  return (
    <>
      <h3>{title}</h3>
      <small>
        Date : {date} Tags : {tags.join(", ")}
        <ArticleStatus isNew={isNew} />
      </small>
      <div>
        <small>Ditulis Oleh {user.username}</small>
      </div>
    </>
  );
}

export default Article;
