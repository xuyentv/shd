import "./SubMainSection.css";

const SubMainSection = () => {
  const posts = [
    {
      id: 1,
      image: "https://picsum.photos/600/400?random=5",
      category: "Technology",
      categoryColor: "primary",
      title: "14 Innovative Architectural Designs to Create a Vast Interior Space",
      author: "Adrio Devid",
      date: "Sep 10, 2025",
    },
    {
      id: 2,
      image: "https://picsum.photos/600/400?random=6",
      category: "Travel",
      categoryColor: "success",
      title: "Traveller Visiting Ice Cave With Amazing Eye-catching View with Nature",
      author: "Adrio Devid",
      date: "Sep 10, 2025",
    },
  ];

  return (
    <div className="row g-4 mt-4">
      {posts.map((post) => (
        <div className="col-12 col-md-6" key={post.id}>
          <div className="d-flex bg-white rounded-3 shadow overflow-hidden">
            <img
              className="flex-shrink-0"
              src={post.image}
              alt="img"
              width="160"
              height="160"
              style={{ objectFit: "cover" }}
            />
            <div className="p-3">
              <span className={`badge bg-${post.categoryColor}-subtle text-${post.categoryColor} mb-2`}>
                {post.category}
              </span>
              <h2 className="fs-6 fw-semibold">{post.title}</h2>
              <p className="small text-muted mt-2">
                By {post.author} · {post.date}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubMainSection;
