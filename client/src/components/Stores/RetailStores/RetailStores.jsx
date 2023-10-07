import "./RetailStores.scss";

import iCD1 from "../../../assets/stores/iCenter_Dhanmondi_1.jpg";
import iCJ1 from "../../../assets/stores/iCenter_JFP_01.jpg";


function RetailStores() {
    return (
        <div className="retail-stores-content">
            <div className="layout">
                <h1>Our Retail Stores</h1>
                <p>Our all Apple Authorised Reseller Stores in Bangladesh.
                    Shop Everything iPhone, iPad, Apple Watch,
                    Mac and all accessories.</p>
                <div className="retail-stores">
                    <div className="retail-store">
                        <div className="branch-img">
                            <img src={iCD1} alt="" />
                        </div>
                        <div className="branch-details">
                            <span className="branch-title">Dhanmondi </span>
                            <span className="branch-address">Rupayan Khan Plaza (Ground Floor) Road# 07, Dhanmondi, Dhaka-1207.</span>
                            <span className="opening-hour"> 
                                <strong><u>Opening Hour : </u></strong><br /> 
                                Wednesday to Monday <br /> 
                                11.00am – 8.00pm
                            </span>
                            <span className="contact-info"> <strong>Phone: </strong> +8801678750354</span>
                        </div>
                        <div className="google-map">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.0701963050633!2d90.37962207610204!3d23.744876078674192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b6d194eb43%3A0x2d4ad9dbe3b40e0c!2siCenter%20Dhanmondi!5e0!3m2!1sen!2sbd!4v1691561309142!5m2!1sen!2sbd" 
                            title="iCenter Dhanmondi"
                            style={{ border: "0" }} 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                        </div>
                    </div>

                    <div className="retail-store">
                        <div className="branch-img">
                            <img src={iCJ1} alt="" />
                        </div>
                        <div className="branch-details">

                            <span className="branch-title">Jamuna Future Park</span>
                            <span className="branch-address">Shop# 4D-001 (4th Floor), Block-D, KA-244, Kuril, Progati Sarani, Dhaka-1229.</span>
                            <span className="opening-hour"> 
                                <strong><u>Opening Hour : </u></strong><br /> 
                                Wednesday to Monday <br /> 
                                11.00am – 8.00pm
                            </span>
                            <span className="contact-info"> <strong>Phone: </strong> +8801678750354</span>
                        </div>
                        <div className="google-map">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.145043266482!2d90.41950448648353!3d23.813440823519905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c64c582052ab%3A0x7274121824341fb1!2siCenter%20Jamuna%20Future%20Park!5e0!3m2!1sen!2sbd!4v1691562603718!5m2!1sen!2sbd" 
                            title="iCenter Jamuna Future Park"
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

export default RetailStores