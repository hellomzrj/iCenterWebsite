import "./ServiceCenters.scss";

import IServiceBas from "../../../assets/stores/iservice-bashundhara1.jpg";
import IServiceJFP from "../../../assets/stores/iService-JFP1.jpg";


function ServiceCenters() {
  return (
    <div className="service-center-content">
      <div className="layout">
        <h1>Our Service Centers</h1>
        <p>Apple Authorised Service Provider in Bangladesh. We provide all apple official warranty and out-of-warranty service.</p>
        <div className="service-centers">
          <div className="service-center">
            <div className="branch-img">
              <img src={IServiceBas} alt="" />
            </div>
            <div className="branch-details">
              <span className="branch-title">Bashundhara 300ft </span>
              <span className="branch-address">Rupayan Shopping Square (9th Floor), Plot # C-2, Block # G, Bashundhara, Dhaka – 1229.</span>
              <span className="opening-hour">
                <strong><u>Opening Hour : </u></strong><br />
                Saturday to Thursday <br />
                11.00am – 7.30pm
              </span>
              <span className="contact-info"> <strong>Phone: </strong> +8801678006142</span>
            </div>
            <div className="google-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14599.595723922808!2d90.42195359779312!3d23.822192765882708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c71737e8a24b%3A0xd12b07d395e22e2c!2siService!5e0!3m2!1sen!2sbd!4v1691565078071!5m2!1sen!2sbd" 
              title="iService Bashundhara"
              style= {{ border: "0" }}
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
          </div>

          <div className="service-center">
            <div className="branch-img">
              <img src={IServiceJFP} alt="" />
            </div>
            <div className="branch-details">
              <span className="branch-title">Jamuna Future Park</span>
              <span className="branch-address">Shop# 4D-001/A (4th Floor), Block# D, Plot# KA-244, Kuril, Progati Sarani, Dhaka - 1229.</span>
              <span className="opening-hour">
                <strong><u>Opening Hour : </u></strong> <br />
                Thursday to Tuesday <br />
                11.00am – 8.00pm
              </span>
              <span className="contact-info"> <strong>Phone: </strong> +8801678037298</span>
            </div>
            <div className="google-map">
              <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14599.94926024791!2d90.40076656066893!3d23.81905010839935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c64dad6427af%3A0x4619c4c2b2ae445f!2siService%20-%20Apple%20Authorised%20Service%20Provider%20-%20Jamuna!5e0!3m2!1sen!2sbd!4v1691567299482!5m2!1sen!2sbd" 
              title="iService Jamuna Future Park"
              style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCenters