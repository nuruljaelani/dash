import React from 'react'

const Dashboard = () => {
    return (
        <>
            <div className="h-screen">
            {/* Content */}
                <div className="mt-8">
                    <div className="px-4 md:px-6 text-xl md:text-2xl mt-4 font-semibold text-gray-500">Dashboard</div>
                    <div className="flex flex-col md:flex-row px-4 md:px-6 mt-4 md:mt-6">
                        <div className="flex w-full md:w-1/4 bg-blue-200 rounded-md shadow-md p-4 mr-4 mt-2 md:mt-0"> 
                            <div className="flex-col ml-4">
                                <p className="my-2 opacity-50">Siswa</p>
                                <p className="my-2 text-xl font-semibold">100</p>
                            </div>
                        </div>
                        <div className="flex w-full md:w-1/4 bg-amber-200 rounded-md shadow-md p-4 mr-4 mt-2 md:mt-0">
                            <div className="flex-col ml-4">
                            <p className="my-2 opacity-50">Guru</p>
                            <p className="my-2 text-xl font-semibold">300</p>
                            </div>
                        </div>
                        <div className="flex w-full md:w-1/4 bg-violet-200 rounded-md shadow-md p-4 mr-4 mt-2 md:mt-0">
                            <div className="flex-col ml-4">
                            <p className="my-2 opacity-50">Staff</p>
                            <p className="my-2 text-xl font-semibold">750</p>
                            </div>
                        </div>
                        <div className="flex w-full md:w-1/4 bg-red-200 rounded-md shadow-md p-4 mt-2 md:mt-0">
                            <div className="flex-col ml-4">
                            <p className="my-2 opacity-50">Alumni</p>
                            <p className="my-2 text-xl font-semibold">65</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard