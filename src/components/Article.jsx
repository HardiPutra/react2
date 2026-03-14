const ArticleStatus = ({ isNew }) => {
  return isNew && <span> --Baru</span>;
};

const NewArticle = () => {
  return <span>New Lagi</span>;
};
function Article({ title, date, tags, isNew }) {
  return (
    <>
      <h3>{title}</h3>
      <small>
        Date : {date} Tags : {tags.join(", ")}
      </small>
      <ArticleStatus isNew={isNew} />
      {isNew && <NewArticle />}
    </>
  );
}

export default Article;
