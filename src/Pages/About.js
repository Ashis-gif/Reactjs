import React from 'react'
import {Link} from 'react-router-dom'
function About() {
  return (
    // ======= About Section ======= 
    <section id="about" className="about section-bg">
  <div className="container" data-aos="fade-up">
    <div className="row no-gutters">
      <div className="content col-xl-5 d-flex align-items-stretch">
        <div className="content">
          <h3>Voluptatem dignissimos provident quasi</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
          </p>
          <Link to="/about" className="about-btn"><span>About us</span> <i className="bx bx-chevron-right" /></Link>
        </div>
      </div>
      <div className="col-xl-7 d-flex align-items-stretch">
        <div className="icon-boxes d-flex flex-column justify-content-center">
          <div className="row">
            <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={100}>
              <i className="bx bx-receipt" />
              <h4>Corporis voluptates sit</h4>
              <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
            </div>
            <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={200}>
              <i className="bx bx-cube-alt" />
              <h4>Ullamco laboris nisi</h4>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
            </div>
            <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={300}>
              <i className="bx bx-images" />
              <h4>Labore consequatur</h4>
              <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
            </div>
            <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={400}>
              <i className="bx bx-shield" />
              <h4>Beatae veritatis</h4>
              <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

//  End About Section
  )
}

export default About