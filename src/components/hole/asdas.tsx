import "./Cube.css";

const hole = () => {
  return (
    <div
      className="preloader"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="preloader__ring">
        {/* <div className="preloader__sector"> . </div>
        <div className="preloader__sector"> . </div>
        <div className="preloader__sector"> . </div>
        <div className="preloader__sector"> . </div>
        <div className="preloader__sector"> . </div>
        <div className="preloader__sector"> . </div>
        <div className="preloader__sector"> . </div> */}
      </div>

      <div className="preloader__ring">
        <div className="preloader">
          {/* <div className="preloader__sector">*</div>
          <div className="preloader__sector"> . </div>
          <div className="preloader__sector">*</div>
          <div className="preloader__sector"> . </div>
          <div className="preloader__sector">*</div>
          <div className="preloader__sector"> . </div>
          <div className="preloader__sector">*</div> */}
        </div>
      </div>

      <div className="preloader__ring">
        {/* <div className="preloader__sector"> . </div>
        <div className="preloader__sector"> . </div>
        <div className="preloader__sector"> . </div>
        <div className="preloader__sector"> . </div>
        <div className="preloader__sector"> . </div>
        <div className="preloader__sector"> . </div>
        <div className="preloader__sector"> . </div> */}
      </div>
    </div>
  );
};

export default hole;
