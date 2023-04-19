import SingleNews from "../singleNews/SingleNews";
import Carousel from "react-bootstrap/Carousel";
import "./AllNews.css";
import data from "../../data/staticData";
export default function AllNews(props) {
  let breakingNews = data.breakingNews;
  return (
    <>
      <Carousel className="mt-5 pt-5 carouselContainer">
        {props.data.slice(0, 3).map((news, index) => {
          return (
            <Carousel.Item interval={1000} key={index}>
              <img
                style={{ objectFit: "cover", height: "800px" }}
                className="d-block w-100 carouselImg"
                src={news.image}
                alt={news.title}
              />
              <Carousel.Caption className="textShadowBox">
                <a href={news.url} className="newsURL">
                  <h3>{news.title}</h3>
                </a>
                <p>{news.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <div id="container" className="newsContainer">
        <div className="newsSection">
          {props.data.slice(3, props.data.length).map((news, index) => {
            return (
              <SingleNews
                data={news}
                addCommentProp={props.addCommentProp}
                key={index}
              />
            );
          })}
        </div>
        <div className="breakingNewsSection">
          <h3 className="breakingNewsTitle">!!! BREAKING NEWS !!!</h3>
          <div className="breakingNewsSectionBody">
            {breakingNews?.map((news) => (
              <div className="singleBreakingNews">
                <img
                  style={{ width: "100px", height: "auto" }}
                  className="d-block w-100 carouselImg mb-2"
                  src={news.img}
                  alt={news.title}
                />
                <a href={news.link} className="newsURLblack">
                  {news.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
