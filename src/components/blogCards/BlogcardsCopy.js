import "./BlogcardsCopy.css";

function BlogcardsCopy({ imgSrc, alt, title, content, commentsCount }) {
  return (
    <article className="blog_item">
      <div className="blog_item_img">
        <img className="card-img rounded-0" src={imgSrc} alt={alt} />
        <div className="blog_item_date">
          <h3>15</h3>
          <p>Jan</p>
        </div>
      </div>
      <div className="blog_details">
        <a className="d-inline-block" href="blog_details.html">
          <h2 className="blog-head">{title}</h2>
        </a>
        <p className="blog_text">{content}</p>
        <ul className="blog-info-link">
          <li>
            <a href="#!">
              <i className="fa fa-user"></i> Travel, Lifestyle |
            </a>
          </li>
          <li>
            <a href="#!">
              <i className="fa fa-comments"></i> {commentsCount} Comments
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
}

export default BlogcardsCopy;
