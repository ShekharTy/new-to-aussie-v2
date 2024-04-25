import React, { useEffect } from 'react';
import Header from './header';
import Footer from './footer';

function Attributions() {
    useEffect(() => {
        document.title = `New To Aussie - Attributions`;
    });

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-6">Image Attributions</h1>
                <p className="text-base leading-relaxed mb-6">All images and logos used on this site are sourced from Unsplash, Pixabay, VicRoads, and BeachSafe, and are free to use under their respective licenses. We are grateful to the following photographers and organizations for their contributions:</p>
                
                <div className="space-y-6">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Unsplash</h2>
                        <ul className="list-disc list-inside">
                            <li><a href="https://unsplash.com/photos/brown-rock-formation-on-sea-shore-during-daytime-d8erF1AHChw" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Photo by Wee Ping Khoo on Unsplash</a></li>
                            <li><a href="https://unsplash.com/photos/long-straight-road-with-trees-on-the-side-rafblRbne3o" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Photo by Karsten Würth on Unsplash</a></li>
                            <li><a href="https://unsplash.com/photos/a-sandy-beach-next-to-a-lush-green-hillside-zjn-7G1OR5s" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Photo by Huzaifa Tariq on Unsplash</a></li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">iStock</h2>
                        <ul className="list-disc list-inside">
                            <li>Image by <a href="https://www.istockphoto.com/photo/calling-roadside-assistance-gm1271779268-374255021?searchscope=image%2Cfilm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">urbazon</a> from iStockphoto</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Pixabay</h2>
                        <ul className="list-disc list-inside">
                            <li>Image by <a href="https://pixabay.com/photos/crash-test-collision-1620591/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Pixel-mixer</a> from Pixabay</li>
                            <li>Image by <a href="https://pixabay.com/photos/river-flood-rain-disaster-risk-4353093/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Ray_Shrewsberry</a> from Pixabay</li>
                            <li>Image by <a href="https://pixabay.com/photos/fire-fighters-blue-light-4272012/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">ReinhardThrainer</a> from Pixabay</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">VicRoads and BeachSafe</h2>
                        <p className="text-base leading-relaxed">Additional resources and information provided by VicRoads and BeachSafe have been invaluable in creating content for this website.</p>
                        <p className="mt-2">We thank these organizations for making their resources available to the public and supporting safety awareness.</p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Attributions;
