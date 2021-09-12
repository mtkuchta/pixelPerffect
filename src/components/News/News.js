import * as React from "react";
import * as styles from "./news.module.scss";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const News = ({ img, id, date, title }) => {
  return (
    <div className={styles.news}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <p>{date}</p>
      <h3>{title}</h3>
      <Link to={`/news/${id}`} className={styles.more}>
        Więcej
      </Link>
    </div>
  );
};

News.propTypes = {
  img: PropTypes.string,
  id: PropTypes.number,
  date: PropTypes.string,
  title: PropTypes.string,
};

export default News;
