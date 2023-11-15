// import Qoute from "../../../Assets/Quote.png";
import "./Content.scss";

export default function TestimonialContent({
  photo,
  testimonial,
  name,
  position,
}) {
  return (
    <div className="content-container">
      <div className="row">
        <div className="col-md-5">
          <img src={photo} alt="" className="profile-picture" />
        </div>

        <div className="col-md-7">
          <p className="qoute-content">" {testimonial} "</p>
          <p className="identity">
            <span>{name}&nbsp;</span> <br />
            {position}
          </p>
        </div>
      </div>
    </div>
  );
}
