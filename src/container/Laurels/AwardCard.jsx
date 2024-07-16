import { awards } from "../../constants/data";

const AwardCard = () => {
  return (
    <>
      {awards.map(({ imgUrl, title, subtitle }, index) => (
        <div className="app__laurels_awards-card" key={index}>
          <img src={imgUrl} alt="awards" />
          <div className="app__laurels_awards-card_content">
            <p className="p__cormorant" style={{ color: "#DCCA87" }}>
              {title}
            </p>
            <p className="p__opensans">{subtitle}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default AwardCard;
