'use client'

import React, { useState } from 'react';

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Description');

  const tabs = ['Description', 'Additional Info', 'Reviews', 'Videos',];

  return (
    <div className='flex md:flex-col flex-row'>
      {/* Tabs Navigation */}
      <div className="flex flex-col items-start md:flex-row md:space-x-4 border-r-2 md:border-b-2 md:border-r-0">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 w-full md:w-auto text-start ${
              activeTab === tab
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Content */}
      <div className="md:mt-4 p-4">
        {activeTab === 'Description' && <p>Product Description...</p>}
        {activeTab === 'Additional Info' && <p>Additional Info...</p>}
        {activeTab === 'Reviews' && <p>Customer Reviews...</p>}
        {activeTab === 'Videos' && <p>Video Content...</p>}
      </div>
    </div>
  );
};

export default Tabs;
