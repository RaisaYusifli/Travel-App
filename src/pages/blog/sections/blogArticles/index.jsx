import style from "./index.module.css";
import { CardBlog } from "../../../../components/CardBlog";
import blogArticles from "./database";

export function BlogArticles() {
  return (
    <div className={style.container}>
      <div className={style.trend}>
        {blogArticles.map((article) => {
          return (
            <CardBlog
              key={article.id}
              image={article.image}
              trip={article.food}
              description={article.description}
            />
          );
        })}
      </div>
    </div>
  );
}
