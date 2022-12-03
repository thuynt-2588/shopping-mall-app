import { useEffect, useState } from "react";
import Button from "../../atoms/Button";
import CarouselSlideItem from "../../molecules/CarouselSlideItem";
import "./index.scss";

const _items = [
  {
    player: {
      title: "Efren Reyes",
      desc: 'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all around player of all time.',
      image: "https://i.postimg.cc/RhYnBf5m/er-slider.jpg",
    },
  },
  {
    player: {
      title: "Ronnie O'Sullivan",
      desc: "Ronald Antonio O'Sullivan is a six-time world champion and is the most successful player in the history of snooker.",
      image: "https://i.postimg.cc/qBGQNc37/ro-slider.jpg",
    },
  },
  {
    player: {
      title: "Shane Van Boening",
      desc: 'The "South Dakota Kid" is hearing-impaired and uses a hearing aid, but it has not limited his ability.',
      image: "https://i.postimg.cc/cHdMJQKG/svb-slider.jpg",
    },
  },
  {
    player: {
      title: "Mike Sigel",
      desc: 'Mike Sigel or "Captain Hook" as many like to call him is an American professional pool player with over 108 tournament wins.',
      image: "https://i.postimg.cc/C12h7nZn/ms-1.jpg",
    },
  },
  {
    player: {
      title: "Willie Mosconi",
      desc: 'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
      image: "https://i.postimg.cc/NfzMDVHP/willie-mosconi-slider.jpg",
    },
  },
];

type Props = {
  listImgs: string[];
};

const length = _items.length;
_items.push(..._items);

const keys = Array.from(Array(_items.length).keys());
const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const CarouselSlide:React.FC<Props> = ({ listImgs }) => {
  const [items, setItems] = useState(keys);
  const [isTicking, setIsTicking] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const bigLength = items.length;

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i + jump) % bigLength]);
      });
    }
  };

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i - jump + bigLength) % bigLength]);
      });
    }
  };

  useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);

  useEffect(() => {
    setActiveIdx((length - (items[0] % length)) % length);
  }, [items]);

  return (
    <div className="carousel__wrap">
      <div className="carousel__inner">
        <Button
          className="carousel__btn carousel__btn--prev"
          onClick={() => prevClick()}
        ></Button>
        <div className="carousel__container">
          <ul className="carousel__slide-list">
            {items.map((pos, i) => (
              <CarouselSlideItem
                key={i}
                idx={i}
                pos={pos}
                activeIdx={activeIdx}
              />
            ))}
          </ul>
        </div>
        <button
          className="carousel__btn carousel__btn--next"
          onClick={() => nextClick()}
        ></button>
      </div>
    </div>
  );
};

export default CarouselSlide;
