import React from "react";

const Services = () => {
    return (
        <section className="container clearfix">
        <div>
          <a href="paint.html"><h3>Paint Jobs</h3></a>
          <a href="paint.html" target="_blank"><img className="small1" src="https://www.autoguide.com/blog/wp-content/gallery/best-paint-jobs-sema-2016/Best-Paint-Jobs-at-SEMA-2016-10.jpg" alt="Custom paint job."/></a>
        </div>
        <div>
          <a href="interior.html"><h3>Interiors</h3></a>
          <a href="interior.html" target="_blank"><img className="small2" src="https://c8.alamy.com/comp/BM4GD4/custom-car-interior-BM4GD4.jpg" alt="Custom interior."/></a>
        </div>
        <div>
          <a href="motors.html"><h3>Motor Builds</h3></a>
          <a href="motors.html" target="_blank"><img className="small3" src="http://enthusiastnetwork.s3.amazonaws.com/uploads/sites/21/2016/03/Speedkore-Tantrum-0006.jpg" alt="Custom motor."/></a>
        </div>
      </section>
    )
}
      
export default Services;