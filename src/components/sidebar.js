const SideBar = () => {
  return (
    <div className="sidebar d-flex flex-column d-none d-md-block">
      <div className="d-flex flex-column socials">
        <a
          href="https://www.linkedin.com/in/jonathan-shih/"
          target="_blank"
          className="link-icon"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a
          href="https://github.com/Jonathan-Shih"
          target="_blank"
          className="link-icon"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
      <div className="email"> shih.jo@northeastern.edu </div>
      <div className="vl"></div>
    </div>
  );
};

export default SideBar;
