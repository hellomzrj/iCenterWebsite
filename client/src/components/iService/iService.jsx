import "./iService.scss";
import ServiceLogo from "../../assets/iService-Logo.png";
import AspLogo from "../../assets/ASP_logo.png";
import ServiceCenters from "../Stores/ServiceCenters/ServiceCenters";


const iService = () => {
    return (
        <div className="iservice-container">
            <div className="layout">
                <div className="service-intro-section">
                    <div className="service-logo">
                        <img src={ServiceLogo} alt="" />
                    </div>
                    <h1>We are Apple Authorised Service Provider in Bangladesh. In our service center, you will get all apple official warranty and out-of-warranty support. To get the best apple service and apple support in BD, please contact us at our Apple official service center in Dhaka.</h1>
                    <div className="asp-logo">
                        <img src={AspLogo} alt="" />
                    </div>
                    <p>Click Here to check the Apple Authorised Service provider list in Bangladesh.</p>
                </div>
                <div className="services-section">
                    <h2>Our Services</h2>
                    <div className="service">
                        <div className="service-title">
                            iPhone Service
                        </div>
                        <span className="service-name">In-warranty Support or Replacements</span>
                        <span className="service-name">Out-of-Warranty Support or Replacements</span>
                        <span className="service-name">Data Backup and Recovery</span>
                        <span className="service-cost">Cost: BDT 2,000/- to 10,000/-</span>
                        <span className="service-name">Software Restore</span>
                        <span className="service-cost">Cost: BDT 2,000/- </span>
                        <span className="service-name">Cleaning Service</span>
                        <span className="service-cost">Cost: BDT 1,000/-</span>
                    </div>

                    <div className="quick-tips">
                        <h2>Prepare your iPhone before sending to service.</h2>
                        <h2>Quick Tips</h2>
                        <span>Restore, Update and Backup your iPhone</span>
                        <span>Cleaning your iPhone</span>
                        <span>Enhance your iPhone battery life</span>
                    </div>

                    <div className="service">
                        <div className="service-title">
                            Apple Mac/iMac Service
                        </div>
                        <span className="service-name">In-warranty Support or Replacements</span>
                        <span className="service-name">Out-of-Warranty Support or Replacements</span>
                        <span className="service-name">Operating System(OS) Installation</span>
                        <span className="service-cost">Cost: BDT 2,000/-</span>
                        <span className="service-name">Data Backup, Recovery and Migration</span>
                        <span className="service-cost">Cost: BDT 2,000/- to 10,000/-</span>
                        <span className="service-name">Software Support and Installation</span>
                        <span className="service-cost">Cost: BDT 2,000/-</span>
                    </div>
                </div>
                <div className="more-services-section">
                    <div className="service">
                        <div className="service-title">
                            iPad Repair
                        </div>
                        <span className="service-name">In-warranty Support or Replacements</span>
                        <span className="service-name">Out-of-Warranty Support or Replacements</span>
                        <span className="service-name">Software Restore and Backup</span>
                    </div>
                    <div className="service">
                        <div className="service-title">
                            Beats, Apple Watch Repair
                        </div>
                        <span className="service-name">In-warranty Support or Replacements</span>
                        <span className="service-name">Out-of-Warranty Support or Replacements</span>
                        <span className="service-name">Software Restoration</span>
                    </div>
                    <div className="service">
                        <div className="service-title">
                            AirPods & Apple Accessories Support
                        </div>
                        <span className="service-name">In-warranty Support or Replacements</span>
                        <span className="service-name">Out-of-Warranty Support or Replacements</span>
                        <span className="service-name">Dust Cleaning Support</span>
                    </div>
                    
                </div>

                <ServiceCenters />
                <span>To find us authorized service store in Dhaka near you, start with an online search using keyword like apple repair near me, iphone repair near me, iphone service center, apple repair, Mac repair, apple watch repair, airpods repair etc. Get your best service please feel free to contact us.</span>
            </div>
        </div>
    );
}

export default iService;