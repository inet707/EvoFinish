import "./EventsCards.css";
import CardsServices1 from "./../../img/gallery/services1.jpg";
import CardsServices2 from "./../../img/gallery/services2.jpg";
import CardsServices3 from "./../../img/gallery/services3.jpg";
import CardsServices4 from "./../../img/gallery/services4.jpg";
import CardsServices5 from "./../../img/gallery/services5.jpg";
import CardsServices6 from "./../../img/gallery/services6.jpg";

const cardsData = [
  {
    src: CardsServices1,
    alt: "img 1",
    country: "Azerbaijan",
    price: "$1200",
    date: "12 Apr - 18 Apr",
    days: "7 Days",
  },
  {
    src: CardsServices2,
    alt: "img 2",
    country: "Mega Africa",
    price: "$1300",
    date: "20 Jan - 27 Jan",
    days: "8 Days",
  },
  {
    src: CardsServices3,
    alt: "img 3",
    country: "Finland",
    price: "$1400",
    date: "30 Jun - 06 Jul",
    days: "7 Days",
  },
  {
    src: CardsServices4,
    alt: "img 4",
    country: "Spitzberg",
    price: "$1500",
    date: "15 Jan - 20 Jul",
    days: "5 Days",
  },
  {
    src: CardsServices5,
    alt: "img 5",
    country: "Venice",
    price: "$1600",
    date: "13 May - 20 May",
    days: "8 Days",
  },
  {
    src: CardsServices6,
    alt: "img 6",
    country: "Turkey",
    price: "$1700",
    date: "15 Jun - 22 Jun",
    days: "8 Days",
  },
];

const EventsCards = () => {
  return (
    <div className="eventsCards_Wrapper">
      {cardsData.map((card, index) => (
        <div key={index} className="eventsCards">
          <img className="eventsCards_Img" src={card.src} alt={card.alt} />
          <div className="eventsCards_Textarea">
            <div className="eventsCards_Country">
              <div className="eventsCards_Country">
                <a href="events_details.html">{card.country}</a>
              </div>
              <div className="eventsCards_price">{card.price}</div>
            </div>
            <div className="eventsCards_Days">
              <p>
                <a className="eventsCards_Date" href="#!">
                  {card.date}
                </a>
                {card.days}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventsCards;
