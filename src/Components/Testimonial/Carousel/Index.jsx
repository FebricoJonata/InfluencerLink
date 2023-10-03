import TestimonialContent from "./Content";
import Logo from "../../../Assets/Challenge-amico.png";

export default function TestimonialCarousel() {
  return (
    <div
      id="carouselExampleInterval"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <TestimonialContent
            photo={Logo}
            testimonial="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dignissimos maxime harum?"
            name={"Febrico Jonata"}
            position={"Software Engineer"}
          />
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <TestimonialContent
            photo={Logo}
            testimonial="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dignissimos maxime harum?"
            name={"Febrico Jonata"}
            position={"Software Engineer"}
          />
        </div>
        <div class="carousel-item">
          <TestimonialContent
            photo={Logo}
            testimonial="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dignissimos maxime harum?"
            name={"Febrico Jonata"}
            position={"Software Engineer"}
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}
