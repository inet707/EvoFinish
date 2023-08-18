import React, { useState } from "react";
import PlusPng1 from "./../../../img/hero/plus1.png";
import MinusPng1 from "./../../../img/hero/minus-sign.png";
import "./CardArea.css";
function CardArea() {
  const [activeCard, setActiveCard] = useState(null);

  const toggleVisibility = (id) => {
    if (activeCard === id) {
      setActiveCard(null);
    } else {
      setActiveCard(id);
    }
  };

  const cardsData = [
    {
      id: 1,
      title: "Starts the automated process.",
      content:
        "The automated process starts as soon as your clothes go into the machine. Duis cursus, mi quis viverra ornare.",
    },
    {
      id: 2,
      title: "The automated process starts.",
      content:
        "The automated process starts immediately when you press the button. Etiam ultricies nisi vel augue.",
    },
    {
      id: 3,
      title: "Automated process starts.",
      content:
        "No manual intervention is needed. Curabitur at lacus ac velit ornare lobortis.",
    },
    {
      id: 4,
      title: "Process the automated magic.",
      content: "Experience the magic of automation. Nunc nonummy metus.",
    },
  ];

  return (
    <div className="card_Area">
      {cardsData.map((card) => (
        <React.Fragment key={card.id}>
          <div className="card_header">
            <button
              className="card_title"
              onClick={() => toggleVisibility(card.id)}
              style={{ color: activeCard === card.id ? "#7Ea0FF" : "" }}
            >
              {" "}
              <img
                src={activeCard === card.id ? MinusPng1 : PlusPng1}
                alt="Plus-minus"
              />{" "}
              {card.title}
            </button>
          </div>
          <div
            className="card-body"
            style={{ display: activeCard === card.id ? "block" : "none" }}
          >
            {card.content}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default CardArea;
