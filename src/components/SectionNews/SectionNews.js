import * as React from "react";
import * as styles from "./sectionNews.module.scss";
import { newsData } from "../../assets/newsData";
import News from "../News/News";

const SectionNews = () => {
  return (
    <section className={styles.sectionNews}>
      <p className={styles.sectionTitle}>Aktualności</p>
      <div className={styles.contentContainer}>
        {newsData.map((news, index) => {
          return (
            <News
              key={`news_${index}`}
              img={news.img}
              date={news.date}
              title={news.title}
              id={news.id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default SectionNews;
