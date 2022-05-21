function Home() {
  return (
    <div className="container d-flex align-items-center justify-content-center flex-column">
      <h1 className="masthead-heading text-uppercase mb-0">
        Welcome To Library
      </h1>
      <div className="divider-custom divider-light">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon">
          <i className="fas fa-star"></i>
        </div>
        <div className="divider-custom-line"></div>
      </div>
      <p className="masthead-subheading font-weight-light mb-0">
        the perfect place to manage your library
      </p>
    </div>
  );
}

export default Home;
