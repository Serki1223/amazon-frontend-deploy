import React from "react";
import { categoryInfos } from "./CatagoryFullinfos";
import CategoryCard from "./CategoryCard";

import classes from "../Category/Category.module.css";

function Category() {
  return (
    <section className={classes.category_container}>
      {categoryInfos.map((infos, index) => (
        <CategoryCard key={index} data={infos} />
      ))}
    </section>
  );
}

export default Category;
