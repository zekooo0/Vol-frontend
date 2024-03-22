import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="font-poppins text-neutral-200 min-h-dvh container">
      {children}
    </div>
  );
};

export default Container;
