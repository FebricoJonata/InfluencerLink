import TestimonialContent from "./Content";
import Logo from "../../../Assets/Challenge-amico.png";

export default function TestimonialCarousel() {
  return (
    // <div
    //   id="carouselExampleInterval"
    //   class="carousel slide"
    //   data-bs-ride="carousel"
    // >
    //   <div class="carousel-inner">
    //     <div class="carousel-item active" data-bs-interval="10000">
    //       <TestimonialContent
    //         photo={Logo}
    //         testimonial="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dignissimos maxime harum?"
    //         name={"Febrico Jonata"}
    //         position={"Software Engineer"}
    //       />
    //     </div>
    //     <div class="carousel-item" data-bs-interval="2000">
    //       <TestimonialContent
    //         photo={Logo}
    //         testimonial="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dignissimos maxime harum?"
    //         name={"Febrico Jonata"}
    //         position={"Software Engineer"}
    //       />
    //     </div>
    //     <div class="carousel-item">
    //       <TestimonialContent
    //         photo={Logo}
    //         testimonial="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dignissimos maxime harum?"
    //         name={"Febrico Jonata"}
    //         position={"Software Engineer"}
    //       />
    //     </div>
    //   </div>
    //   <button
    //     class="carousel-control-prev"
    //     type="button"
    //     data-bs-target="#carouselExampleInterval"
    //     data-bs-slide="prev"
    //   >
    //     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span class="visually-hidden">Previous</span>
    //   </button>
    //   <button
    //     class="carousel-control-next"
    //     type="button"
    //     data-bs-target="#carouselExampleInterval"
    //     data-bs-slide="next"
    //   >
    //     <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span class="visually-hidden">Next</span>
    //   </button>
    // </div>

    <div
      id="carouselExampleIndicators"
      class="carousel slide carousel-dark"
      data-bs-ride="true"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <TestimonialContent
            photo={Logo}
            testimonial={"\"Incredible service! The team went above and beyond to meet our project requirements. Their expertise and dedication are truly commendable. Looking forward to future collaborations\""}
            name={"William Gozali"}
            position={"Restaurant Owner"}
          />
        </div>
        <div class="carousel-item">
          <TestimonialContent
            photo={Logo}
            testimonial={"\"I've had the pleasure of working with this team on multiple projects. Their commitment to quality and timely delivery is unmatched. I highly recommend their services.\""}
            name={"Julian Alvarez"}
            position={"Football Player"}
          />
        </div>
        <div class="carousel-item">
          <TestimonialContent
            photo={Logo}
            testimonial={"\"Amazing service :) \""}
            name={"Jerome Polin"}
            position={"Influencer"}
          />
        </div>
      </div>
      
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}
