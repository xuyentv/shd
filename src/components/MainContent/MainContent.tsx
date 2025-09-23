const MainContent = () => {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold">Browse by Category</h2>
                    <p className="text-gray-500 mt-2">Select a category to see more related content</p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    <button className="px-5 py-2 rounded-full bg-black text-white font-medium">All (20)</button>
                    <button
                        className="px-5 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-black hover:text-white transition">Technology
                        (03)
                    </button>
                    <button
                        className="px-5 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-black hover:text-white transition">Lifestyle
                        (02)
                    </button>
                    <button
                        className="px-5 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-black hover:text-white transition">Travel
                        (05)
                    </button>
                    <button
                        className="px-5 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-black hover:text-white transition">Health
                        (09)
                    </button>
                    <button
                        className="px-5 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-black hover:text-white transition">Culture
                        (01)
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div>
                        <img className="w-full h-60 object-cover rounded-2xl mb-4" src="https://picsum.photos/600/400?1"
                             alt=""/>
                        <h3 className="text-lg font-semibold mb-2">Stylish Kitchen And Dining Room With Functional
                            Ideas</h3>
                        <p className="text-gray-500 text-sm mb-4">
                            Lorem Ipsum is simply dummy text of the print and typesetting industry...
                        </p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <img className="w-6 h-6 rounded-full" src="https://i.pravatar.cc/30" alt="author"/>
                                <span>Adrio Devid · Sep 10, 2025</span>
                            </div>
                            <span className="px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">Technology</span>
                        </div>
                    </div>

                    <div>
                        <img className="w-full h-60 object-cover rounded-2xl mb-4" src="https://picsum.photos/600/400?2"
                             alt=""/>
                        <h3 className="text-lg font-semibold mb-2">Stylish Kitchen And Dining Room With Functional
                            Ideas</h3>
                        <p className="text-gray-500 text-sm mb-4">
                            Lorem Ipsum is simply dummy text of the print and typesetting industry...
                        </p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <img className="w-6 h-6 rounded-full" src="https://i.pravatar.cc/31" alt="author"/>
                                <span>Adrio Devid · Sep 10, 2025</span>
                            </div>
                            <span className="px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">Technology</span>
                        </div>
                    </div>

                    <div>
                        <img className="w-full h-60 object-cover rounded-2xl mb-4" src="https://picsum.photos/600/400?3"
                             alt=""/>
                        <h3 className="text-lg font-semibold mb-2">Stylish Kitchen And Dining Room With Functional
                            Ideas</h3>
                        <p className="text-gray-500 text-sm mb-4">
                            Lorem Ipsum is simply dummy text of the print and typesetting industry...
                        </p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <img className="w-6 h-6 rounded-full" src="https://i.pravatar.cc/32" alt="author"/>
                                <span>Adrio Devid · Sep 10, 2025</span>
                            </div>
                            <span className="px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">Technology</span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default MainContent;