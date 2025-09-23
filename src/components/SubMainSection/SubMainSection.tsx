import "./SubMainSection.css";

const SubMainSection = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                <div className="flex bg-white rounded-2xl shadow-md overflow-hidden">
                    <img className="w-40 h-40 object-cover" src="images/banner.png" alt="img"/>
                    <div className="p-4">
                        <span
                            className="inline-block bg-blue-100 text-blue-600 text-sm px-2 py-1 rounded">Technology</span>
                        <h2 className="mt-2 text-lg font-semibold">14 Innovative Architectural Designs to Create a Vast
                            Interior Space</h2>
                        <p className="text-sm text-gray-500 mt-2">By Adrio Devid · Sep 10, 2025</p>
                    </div>
                </div>

                <div className="flex bg-white rounded-2xl shadow-md overflow-hidden">
                    <img className="w-40 h-40 object-cover" src="images/banner02.png" alt="img"/>
                    <div className="p-4">
                        <span
                            className="inline-block bg-green-100 text-green-600 text-sm px-2 py-1 rounded">Travel</span>
                        <h2 className="mt-2 text-lg font-semibold">Traveller Visiting Ice Cave With Amazing Eye-catching
                            view with nature</h2>
                        <p className="text-sm text-gray-500 mt-2">By Adrio Devid · Sep 10, 2025</p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default SubMainSection;
