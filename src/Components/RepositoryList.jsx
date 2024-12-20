import React, { useEffect, useState } from 'react';
import data from '../assets/database.png';

const dataOfRepo = [
    {
        id: 1,
        nameOfRepo: "design-system",
        typeOfRepo: "Public",
        pLName: "React",
        dataStorage: "7320 KB",
        updateDataDate: "Updated 1 day ago"
    },
    {
        id: 2,
        nameOfRepo: "codeant-ci-app",
        typeOfRepo: "Private",
        pLName: "Javascript",
        dataStorage: "5871 KB",
        updateDataDate: "Updated 2 day ago"
    },
    {
        id: 3,
        nameOfRepo: "analytics-dashboard",
        typeOfRepo: "Private",
        pLName: "Python",
        dataStorage: "4521 KB",
        updateDataDate: "Updated 3 day ago"
    },
    {
        id: 4,
        nameOfRepo: "mobile-app",
        typeOfRepo: "Public",
        pLName: "Swift",
        dataStorage: "3096 KB",
        updateDataDate: "Updated 4 day ago"
    },
    {
        id: 5,
        nameOfRepo: "e-commerce-platform",
        typeOfRepo: "Private",
        pLName: "Java",
        dataStorage: "6210 KB",
        updateDataDate: "Updated 5 day ago"
    },
    {
        id: 6,
        nameOfRepo: "blog-website",
        typeOfRepo: "Public",
        pLName: "HTML/CSS",
        dataStorage: "1876 KB",
        updateDataDate: "Updated 6 day ago"
    },
    {
        id: 7,
        nameOfRepo: "social-network",
        typeOfRepo: "Private",
        pLName: "PHP",
        dataStorage: "5432 KB",
        updateDataDate: "Updated 7 day ago"
    }
];

const RepositoryList = () => {
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
        <div className="list hideScrollBar" style={{ maxHeight: '400px', overflowY: 'auto' }}>
            {
                dataOfRepo.map((repolist) => (
                    <div key={repolist.id} className={`border-t overflow-hidden cursor-pointer border-b ${isMobile?'px-3':'px-10'} py-6 hover:bg-[#f5f5f8]`}>
                        <div className="flex gap-3 text-center">
                            <p>{repolist.nameOfRepo}</p>
                            <span className="border text-[#175CD3] bg-[#eaf6ff] border-[#b2ddff] px-1 text-[12px] rounded-full">
                                {repolist.typeOfRepo}
                            </span>
                        </div>
                        <ul className={`flex items-center  mt-2 ${isMobile?'text-[12px] gap-4':'text-[13px] gap-10'}`}>
                            <li className="flex items-center gap-2">
                                <span className="font-light">{repolist.pLName}</span>
                                <p style={{ width: "6px", height: "6px", background: "#175cd3", borderRadius: "50%" }}></p>
                            </li>
                            <li className="flex items-center gap-2">
                                <img src={data} alt="" />
                                <span className="">{repolist.dataStorage}</span>
                            </li>
                            <li>
                                <span className="">{repolist.updateDataDate}</span>
                            </li>
                        </ul>
                    </div>
                ))
            }
        </div>
    );
}

export default RepositoryList;
