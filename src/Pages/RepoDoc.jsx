import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import RepoContent from '../Components/RepoContent'

const RepoDoc = () => {
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
        isMobile ? (<div className="w-full">
          <Sidebar />
          <RepoContent />
        </div>
        ) : (
          <div className="w-full flex h-screen bg-[#fafafa] gap-2">
            <Sidebar />
            <RepoContent />
          </div>
        )
      }
    </>
  )
}

export default RepoDoc
