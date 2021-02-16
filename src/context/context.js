import React, { createContext, useState, useRef } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {
  const [isMenu, setIsMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isContact, setIsContact] = useState(false);
  const [footerInView, setFooterInView] = useState(null);

  return (
    <div>
      <Context.Provider
        value={{
          isMenu,
          setIsMenu,
          isMobile,
          setIsMobile,
          isContact,
          setIsContact,
          footerInView,
          setFooterInView,
        }}
      >
        {children}
      </Context.Provider>
    </div>
  );
};
