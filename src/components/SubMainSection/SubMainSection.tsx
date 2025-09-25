import "./SubMainSection.css";

const SubMainSection = () => {
    return (
        <>
            <div className="row g-4 mt-4">
                {/* Card 1 */}
                <div className="col-12 col-md-6">
                    <div className="d-flex bg-white rounded-3 shadow overflow-hidden">
                        <img className="flex-shrink-0" src="images/banner.png" alt="img" width="160" height="160" style={{objectFit: "cover"}} />
                        <div className="p-3">
                            <span className="badge bg-primary-subtle text-primary mb-2">Technology</span>
                            <h2 className="fs-6 fw-semibold">
                                14 Innovative Architectural Designs to Create a Vast Interior Space
                            </h2>
                            <p className="small text-muted mt-2">By Adrio Devid · Sep 10, 2025</p>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="col-12 col-md-6">
                    <div className="d-flex bg-white rounded-3 shadow overflow-hidden">
                        <img className="flex-shrink-0" src="images/banner02.png" alt="img" width="160" height="160" style={{objectFit: "cover"}} />
                        <div className="p-3">
                            <span className="badge bg-success-subtle text-success mb-2">Travel</span>
                            <h2 className="fs-6 fw-semibold">
                                Traveller Visiting Ice Cave With Amazing Eye-catching view with nature
                            </h2>
                            <p className="small text-muted mt-2">By Adrio Devid · Sep 10, 2025</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SubMainSection;
