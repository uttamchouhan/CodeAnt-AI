import React, { useEffect, useState } from 'react'
import refresh from '../assets/refresh.png';
import plus from '../assets/plus.png';
import search from '../assets/Buttons/search.png'
import RepositoryList from './RepositoryList';

const RepoContent = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 845);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 845);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            {
                isMobile ? (
                    <>
                        <div className='bg-[#fff] w-full px-2 my-5 rounded-md'>
                            {/* Repo Navbar */}
                            <div className='px-2 py-2'>
                                <div className='flex flex-col'>
                                    <p className='text-2xl flex flex-col'>Repositories
                                        <span className='text-sm text-gray-600'>33 total repositories</span>
                                    </p>
                                    <div className='flex gap-5'>
                                        <button className='border px-3 py-2 rounded-md text-sm  flex gap-2 items-center'>
                                            <img className='w-4 h-4' src={refresh} alt="" />
                                            <span>Refresh All</span>
                                        </button>
                                        <button className='border px-3 py-2 bg-blue-600 text-white text-sm rounded-md flex gap-2 items-center'>
                                            <img src={plus} alt="" />
                                            <span>Add Repository</span>
                                        </button>
                                    </div>
                                </div>
                                <div className='mt-3 flex gap-2 items-center border w-full  pr-4  pl-3 py-2 rounded-md'>
                                    <img className='w-4 h-4' src={search} alt="" />
                                    <input type="text" placeholder='Search Repositories' className='outline-none border-none w-full' />
                                </div>
                            </div>
                            <RepositoryList />
                        </div>
                    </>
                ) : (
                    <>
                        <div className='bg-[#fff] w-full max-w-[90%] mx-5 my-5 rounded-md'>
                            {/* Repo Navbar */}
                            <div className='px-10 py-5'>
                                <div className='flex justify-between items-center'>
                                    <p className='text-2xl flex flex-col'>Repositories
                                        <span className='text-sm text-gray-600'>33 total repositories</span>
                                    </p>
                                    <div className='flex gap-5'>
                                        <button className='border px-3 py-2 rounded-md text-sm  flex gap-2 items-center'>
                                            <img className='w-4 h-4' src={refresh} alt="" />
                                            <span>Refresh All</span>
                                        </button>
                                        <button className='border px-3 py-2 bg-blue-600 text-white text-sm rounded-md flex gap-2 items-center'>
                                            <img src={plus} alt="" />
                                            <span>Add Repository</span>
                                        </button>
                                    </div>
                                </div>
                                <div className='mt-3 flex gap-2 items-center border w-full max-w-sm pr-4  pl-3 py-2 rounded-md'>
                                    <img className='w-4 h-4' src={search} alt="" />
                                    <input type="text" placeholder='Search Repositories' className='outline-none border-none w-full' />
                                </div>
                            </div>
                            <RepositoryList />
                        </div>
                    </>
                )
            }
        </>
    )
}

export default RepoContent
