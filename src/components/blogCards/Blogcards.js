import React, { useState } from "react";
import "./Blogcards.css";
import Single_Blog_1 from "./../../img/blog/single/single_blog_1.jpg";
import Single_Blog_2 from "./../../img/blog/single/single_blog_2.jpg";
import Single_Blog_3 from "./../../img/blog/single/single_blog_3.jpg";
import Single_Blog_4 from "./../../img/blog/single/single_blog_4.jpg";
import Single_Blog_5 from "./../../img/blog/single/single_blog_5.jpg";

import BlogcardsCopy from "./BlogcardsCopy";
import BlogPagination from "./BlogPagination";
import BlogRightSide from "./../blogRightSide/BlogRightSide";

function Blogcards() {
  const [currentPage, setCurrentPage] = useState(1);
  const blogcardsData = [
    {
      imgSrc: Single_Blog_1,
      alt: "Single_Blog_1",
      title: " Google inks pact for new 35-storey office",
      content:
        " That dominion stars lights dominion divide years for fourth have dont stars is that he earth it first without heaven in place seed it second morning saying.",
      commentsCount: "05",
    },
    {
      imgSrc: Single_Blog_2,
      alt: "Single_Blog_2",
      title: " Facebook inks pact for new 90-storey office",
      content:
        "That dominion stars lights dominion divide years for fourth have dont stars is that he earth it first without heaven in place seed it second evening saying.",
      commentsCount: "04",
    },
    {
      imgSrc: Single_Blog_3,
      alt: "Single_Blog_3",
      title: " Twitter inks pact for new 35-storey office",
      content:
        "That dominion stars lights dominion divide years for fourth have dont stars is that he earth it first without heaven in place seed it second morning saying.",
      commentsCount: "01",
    },
    {
      imgSrc: Single_Blog_4,
      alt: "Single_Blog_5",
      title: " Instagram inks pact for new 75-storey office",
      content:
        "That dominion stars lights dominion divide years for fourth have dont stars is that he earth it first without heaven in place seed it second morning saying.",
      commentsCount: "11",
    },
    {
      imgSrc: Single_Blog_5,
      alt: "Single_Blog_5",
      title: " Tik-Tok inks pact for new 40-storey office",
      content:
        "That dominion stars lights dominion divide years for fourth have dont stars is that he earth it first without heaven in place seed it second morning saying.",
      commentsCount: "08",
    },
    {
      imgSrc: Single_Blog_1,
      alt: "Single_Blog_6",
      title: " Google inks pact for new 35-storey office",
      content:
        " That dominion stars lights dominion divide years for fourth have dont stars is that he earth it first without heaven in place seed it second morning saying.",
      commentsCount: "05",
    },
    {
      imgSrc: Single_Blog_2,
      alt: "Single_Blog_7",
      title: " Facebook inks pact for new 90-storey office",
      content:
        "That dominion stars lights dominion divide years for fourth have dont stars is that he earth it first without heaven in place seed it second evening saying.",
      commentsCount: "04",
    },
    {
      imgSrc: Single_Blog_3,
      alt: "Single_Blog_8",
      title: " Twitter inks pact for new 35-storey office",
      content:
        "That dominion stars lights dominion divide years for fourth have dont stars is that he earth it first without heaven in place seed it second morning saying.",
      commentsCount: "01",
    },
    {
      imgSrc: Single_Blog_4,
      alt: "Single_Blog_9",
      title: " Instagram inks pact for new 75-storey office",
      content:
        "That dominion stars lights dominion divide years for fourth have dont stars is that he earth it first without heaven in place seed it second morning saying.",
      commentsCount: "11",
    },
    // {
    //   imgSrc: Single_Blog_5,
    //   alt="": "Single_Blog_10",
    //   title: " Tik-Tok inks pact for new 40-storey office",
    //   content:
    //     "That dominion stars lights dominion divide years for fourth have dont stars is that he earth it first without heaven in place seed it second morning saying.",
    //   commentsCount: "08",
    // },
  ];

  const cardsPerPage = 5;

  const displayedCards = blogcardsData.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

  return (
    <section className="container_blog_area_section">
      <div className="blog_left_sidebar">
        {displayedCards.map((data, index) => (
          <BlogcardsCopy key={index} {...data} />
        ))}
        <BlogPagination
          currentPage={currentPage}
          totalPages={Math.ceil(blogcardsData.length / cardsPerPage)}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
      <div className="blog_right_sidebar">
<BlogRightSide/>
      </div>
      
    </section>
  );
}

export default Blogcards;
