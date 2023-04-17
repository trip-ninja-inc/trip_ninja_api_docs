import Pagination from "../common/Pagination";


export default function VirtualInterliningSetup() {
  return(
    <div>
      <h2 className="mt-3">Virtual Interlining Setup</h2>
      <p>
        You are able to access Virtual Interlining through Trip Ninja’s FareStructure 
        infrastructure. To get started, please follow the setup defined 
        in <a href="/farestructure/setup" className="primary-text">FareStructure Setup</a>. 
      </p>
      <p>
        Once you’re ready to continue, we’ll discuss more details about the specific VI parameters on the next page.
      </p>
      <div className="info-chip-teal">
          If you have questions about how Virtual Interlining works, or need any other help, 
          please reach out to us at support@tripninja.io.
      </div>
      <Pagination
        prevPageText="Overview"
        prevPageUrl="/virtual-interlining/overview/"
        nextPageText="Get Searches"
        nextPageUrl="/virtual-interlining/get-searches/"
      />
    </div>
  );
}
