import "./MainSection.css";

const MainSection = () => {
    return (
        <section className="main-hero-section">
            <div className="hero-image">
                <img src={"https://images.pexels.com/photos/33149830/pexels-photo-33149830.jpeg"} alt="Modern buildings"/>
            </div>
            <div className="hero-content">
                <span className="category-tag">Lifestyle</span>
                <h2>
                    Begin here to obtain a brief summary encompassing all the essential
                </h2>
                <p>
                    This comprehensive post serves as your chief sheet to swiftly
                    familiarize yourself with Ghost. Packed with crucial...
                </p>
                <div className="author-info">
                    <span>By Adrio David</span>
                    <span>&nbsp;•&nbsp;</span>
                    <span>Sep 10, 2025</span>
                </div>
            </div>
        </section>
    );
};
export default MainSection;
