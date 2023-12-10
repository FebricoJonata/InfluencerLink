import TestimonialCarousel from "./Carousel/Index";
import "./Testimonial.scss";

const Testimonial = () => {
  return (
    <div className="background-color">
        <div className="container">
        <h2 class="d-flex justify-content-center" className="title">Testimonials</h2>

        <TestimonialCarousel />
      </div>
    </div>
  );
};

export default Testimonial;
