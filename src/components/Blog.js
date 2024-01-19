import React from "react";
import { blog } from "../data";
const Blog = () => {
  return (
    <>
      <section className="blogs" id="blogs">
        <h1 className="heading">
          our <span>blogs</span>
        </h1>
        <div className="box-container">
          {blog.map((item, index) => (
            <div className="box" key={index}>
              <div className="image">
                <img src={item.img} alt="" />
              </div>
              <div className="content">
                <a href="#" className="title">
                  Tasty and Refreshing Spices
                </a>
                <span>By admin / 21st may, 2023</span>
                <p>
                  Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Non,
                  Dicta.
                </p>
                <a href="#" className="btn">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
