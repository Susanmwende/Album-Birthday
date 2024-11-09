// app/page.tsx
"use client"
import { useState } from 'react';
import Cover from './components/Cover';
import Album from './components/Album';

const Page = () => {
  const [isCoverEnd, setIsCoverEnd] = useState(false);

  const handleCoverEnd = () => {
    setIsCoverEnd(true);
  };

  return (
    <div className="relative">
      {!isCoverEnd ? (
        <Cover onCoverEnd={handleCoverEnd} />
      ) : (
        <Album />
      )}
    </div>
  );
};

export default Page;
