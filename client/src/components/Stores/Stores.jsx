import "./Stores.scss";
import RetailStores from "./RetailStores/RetailStores";
import ServiceCenters from "./ServiceCenters/ServiceCenters";

function Stores() {
    return (
        <div className="retail-service-stores">
            <RetailStores />
            <ServiceCenters />
        </div>
    );
}

export default Stores;