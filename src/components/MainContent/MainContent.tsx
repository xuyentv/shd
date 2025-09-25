const MainContent = () => {
    return (
        <>
            <div className="container py-5">
                <div className="text-center mb-4">
                    <h2 className="fw-bold fs-2">Browse by Category</h2>
                    <p className="text-muted mt-2">Select a category to see more related content</p>
                </div>

                {/* Nút category */}
                <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
                    <button className="btn btn-dark rounded-pill px-4 py-2">All (20)</button>
                    <button className="btn btn-outline-secondary rounded-pill px-4 py-2">Technology (03)</button>
                    <button className="btn btn-outline-secondary rounded-pill px-4 py-2">Lifestyle (02)</button>
                    <button className="btn btn-outline-secondary rounded-pill px-4 py-2">Travel (05)</button>
                    <button className="btn btn-outline-secondary rounded-pill px-4 py-2">Health (09)</button>
                    <button className="btn btn-outline-secondary rounded-pill px-4 py-2">Culture (01)</button>
                </div>

                {/* Grid bài viết */}
                <div className="row g-4">
                    <div className="col-12 col-md-6 col-lg-4">
                        <img className="img-fluid rounded mb-3" src="https://picsum.photos/600/400?1" alt="" />
                        <h3 className="fs-5 fw-semibold mb-2">Stylish Kitchen And Dining Room With Functional Ideas</h3>
                        <p className="text-muted small mb-3">
                            Lorem Ipsum is simply dummy text of the print and typesetting industry...
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center gap-2 text-muted small">
                                <img className="rounded-circle" width="24" height="24" src="https://i.pravatar.cc/30" alt="author" />
                                <span>Adrio Devid · Sep 10, 2025</span>
                            </div>
                            <span className="badge bg-primary-subtle text-primary">Technology</span>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <img className="img-fluid rounded mb-3" src="https://picsum.photos/600/400?2" alt="" />
                        <h3 className="fs-5 fw-semibold mb-2">Stylish Kitchen And Dining Room With Functional Ideas</h3>
                        <p className="text-muted small mb-3">
                            Lorem Ipsum is simply dummy text of the print and typesetting industry...
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center gap-2 text-muted small">
                                <img className="rounded-circle" width="24" height="24" src="https://i.pravatar.cc/31" alt="author" />
                                <span>Adrio Devid · Sep 10, 2025</span>
                            </div>
                            <span className="badge bg-primary-subtle text-primary">Technology</span>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <img className="img-fluid rounded mb-3" src="https://picsum.photos/600/400?3" alt="" />
                        <h3 className="fs-5 fw-semibold mb-2">Stylish Kitchen And Dining Room With Functional Ideas</h3>
                        <p className="text-muted small mb-3">
                            Lorem Ipsum is simply dummy text of the print and typesetting industry...
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center gap-2 text-muted small">
                                <img className="rounded-circle" width="24" height="24" src="https://i.pravatar.cc/32" alt="author" />
                                <span>Adrio Devid · Sep 10, 2025</span>
                            </div>
                            <span className="badge bg-primary-subtle text-primary">Technology</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainContent;
