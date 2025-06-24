import Listing from '@/app/Home/Listing/Listing'
export default function App(){
    return(
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6">
            <h1 className="text-center text-4xl font-bold mb-4 mt-5">Welcome to the Listings Site</h1>
            <p className="mb-6 text-center">Click below to view available listings.</p>
            <div className="flex flex-col overflow-y-hidden text-white px-6">
            <h1 className="text-3xl text-bold absolute mb-8">Cards</h1>
            <Listing/>
            </div>
       
        </div>
    );
}