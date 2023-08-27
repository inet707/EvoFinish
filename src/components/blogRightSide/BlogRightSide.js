
import "./BlogRightSide.css";
import PostImg1 from "./../../img/postImg/post_1.jpg";
import PostImg2 from "./../../img/postImg/post_2.jpg";
import PostImg3 from "./../../img/postImg/post_3.jpg";
import PostImg4 from "./../../img/postImg/post_4.jpg";
import PostImg5 from "./../../img/postImg/post_5.jpg";
import PostImg6 from "./../../img/postImg/post_6.jpg";
import PostImg7 from "./../../img/postImg/post_7.jpg";
import PostImg8 from "./../../img/postImg/post_8.jpg";
import PostImg9 from "./../../img/postImg/post_9.jpg";
import PostImg10 from "./../../img/postImg/post_10.jpg";

function BlogRightSide () {
    return (
       <>
        <aside className="single_sidebar_widget search_widget">
          <form action="#">
            <div className="form-group m-0">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control_blog"
                  placeholder="Search Keyword"
                />
                <div className="input-group-append">
                  <button className="boxed-btn2" type="button">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </form>
        </aside>
        <aside className="single_sidebar_widget post_category_widget">
          <h4 className="widget_title" style={{ color: "#2d2d2d" }}>
            Category
          </h4>
          <ul className="list cat-list">
            <li>
              <a href="#!" className="d-flex">
                <p>Resaurant food (37)</p>
                
              </a>
            
            </li>
            <li>
              <a href="#!" className="d-flex">
                <p>Travel news (10)</p>
              </a>
            </li>
            <li>
              <a href="#!" className="d-flex">
                <p>Modern technology (03)</p>
                
              </a>
            </li>
            <li>
              <a href="#!" className="d-flex">
                <p>Product (11)</p>
                
              </a>
            </li>
            <li>
              <a href="#!" className="d-flex">
                <p>Inspiration (21)</p>
                
              </a>
            </li>
            <li>
              <a href="#!" className="d-flex">
                <p>Healt Care (09)</p>
              
              </a>
            </li>
          </ul>
        </aside>
        <aside className="single_sidebar_widget popular_post_widget">
          <h3 className="widget_title" style={{ color: "#2d2d2d" }}>
            Recent Post
          </h3>
          <div className="media post_item">
            <img src={PostImg1} alt="PostImg1" />
            <div className="media-body">
              <a href="blog_details.html">
                <h3 style={{ color: "#2d2d2d" }}>
                  From life was you fish...
                </h3>
              </a>
              <p>January 12, 2019</p>
            </div>
          </div>
          <div className="media post_item">
            <img src={PostImg2} alt="PostImg2" />
            <div className="media-body">
              <a href="blog_details.html">
                <h3 style={{ color: "#2d2d2d" }}>The Amazing Hubble</h3>
              </a>
              <p>02 Hours ago</p>
            </div>
          </div>
          <div className="media post_item">
            <img src={PostImg3} alt="PostImg3" />
            <div className="media-body">
              <a href="blog_details.html">
                <h3 style={{ color: "#2d2d2d" }}>Astronomy Or Astrology</h3>
              </a>
              <p>03 Hours ago</p>
            </div>
          </div>
          <div className="media post_item">
            <img src={PostImg4} alt="PostImg4" />
            <div className="media-body">
              <a href="blog_details.html">
                <h3 style={{ color: "#2d2d2d" }}>Asteroids telescope</h3>
              </a>
              <p>01 Hours ago</p>
            </div>
          </div>
        </aside>
        <aside className="single_sidebar_widget tag_cloud_widget">
          <h4 className="widget_title" style={{ color: "#2d2d2d" }}>
            Tag Clouds
          </h4>
          <ul className="list">
            <li>
              <a href="#!">project</a>
            </li>
            <li>
              <a href="#!">love</a>
            </li>
            <li>
              <a href="#!">technology</a>
            </li>
            <li>
              <a href="#!">travel</a>
            </li>
            <li>
              <a href="#!">restaurant</a>
            </li>
            <li>
              <a href="#!">life style</a>
            </li>
            <li>
              <a href="#!">design</a>
            </li>
            <li>
              <a href="#!">illustration</a>
            </li>
          </ul>
        </aside>
        <aside className="single_sidebar_widget instagram_feeds">
          <h4 className="widget_title" style={{ color: "#2d2d2d" }}>
            Instagram Feeds
          </h4>
          <ul className="instagram_row flex-wrap">
            <li>
              <a href="#!">
                <img
                  className="img-fluid"
                  src={PostImg5}
                  alt="PostImg5"
                />
              </a>
            </li>
            <li>
              <a href="#!">
                <img
                  className="img-fluid"
                  src={PostImg6}
                  alt="PostImg6"
                />
              </a>
            </li>
            <li>
              <a href="#!">
                <img
                  className="img-fluid"
                  src={PostImg7}
                  alt="PostImg7"
                />
              </a>
            </li>
            <li>
              <a href="#!">
                <img
                  className="img-fluid"
                  src={PostImg8}
                  alt="PostImg8"
                />
              </a>
            </li>
            <li>
              <a href="#!">
                <img
                  className="img-fluid"
                  src={PostImg9}
                  alt="PostImg9"
                />
              </a>
            </li>
            <li>
              <a href="#!">
                <img
                  className="img-fluid"
                  src={PostImg10}
                  alt="PostImg10"
                />
              </a>
            </li>
          </ul>
        </aside>
        <aside className="single_sidebar_widget newsletter_widget">
          <h4 className="widget_title" style={{ color: "#2d2d2d" }}>
            Newsletter
          </h4>
          <form action="#">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                onfocus="this.placeholder = ''"
                onblur="this.placeholder = 'Enter email'"
                placeholder="Enter email"
                required
              />
            </div>
            <button
              className="boxed-btn"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </aside>
      </>
    
    );

}

export default BlogRightSide;