import React from 'react'

function Tab() {
  return (
//   ======= Tabs Section ======= 
    <section id="tabs" className="tabs">
  <div className="container" data-aos="fade-up">
    <ul className="nav nav-tabs row d-flex">
      <li className="nav-item col-3">
        <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#tab-1">
          <i className="ri-gps-line" />
          <h4 className="d-none d-lg-block">Modi sit est dela pireda nest</h4>
        </a>
      </li>
      <li className="nav-item col-3">
        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
          <i className="ri-body-scan-line" />
          <h4 className="d-none d-lg-block">Unde praesenti mara setra le</h4>
        </a>
      </li>
      <li className="nav-item col-3">
        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3">
          <i className="ri-sun-line" />
          <h4 className="d-none d-lg-block">Pariatur explica nitro dela</h4>
        </a>
      </li>
      <li className="nav-item col-3">
        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-4">
          <i className="ri-store-line" />
          <h4 className="d-none d-lg-block">Nostrum qui dile node</h4>
        </a>
      </li>
    </ul>
    <div className="tab-content">
      <div className="tab-pane active show" id="tab-1">
        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0" data-aos="fade-up" data-aos-delay={100}>
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i className="ri-check-double-line" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay={200}>
            <img src="assets/img/tabs-1.jpg" alt className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="tab-pane" id="tab-2">
        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
            <h3>Neque exercitationem debitis soluta quos debitis quo mollitia officia est</h3>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i className="ri-check-double-line" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i className="ri-check-double-line" /> Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</li>
              <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
            </ul>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 text-center">
            <img src="assets/img/tabs-2.jpg" alt className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="tab-pane" id="tab-3">
        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
            <h3>Voluptatibus commodi ut accusamus ea repudiandae ut autem dolor ut assumenda</h3>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
            <ul>
              <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i className="ri-check-double-line" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i className="ri-check-double-line" /> Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</li>
            </ul>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 text-center">
            <img src="assets/img/tabs-3.jpg" alt className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="tab-pane" id="tab-4">
        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
            <h3>Omnis fugiat ea explicabo sunt dolorum asperiores sequi inventore rerum</h3>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i className="ri-check-double-line" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
            </ul>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 text-center">
            <img src="assets/img/tabs-4.jpg" alt className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  // End Tabs Section  
  )
}

export default Tab