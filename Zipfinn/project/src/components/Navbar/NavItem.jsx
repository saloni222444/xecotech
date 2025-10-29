import React, { useState } from "react";

const NavItem = ({ title, menuData, onSubmenuHover }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="nav-item"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span>{title}</span>
      {isOpen && menuData && (
        <div
          className="dropdown-menu"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {menuData.header && (
            <div className="dropdown-header">
              {typeof menuData.header === "object" ? (
                <>
                  {menuData.header.icon && <i className={menuData.header.icon}></i>}
                  <span>{menuData.header.text}</span>
                </>
              ) : (
                menuData.header
              )}
            </div>
          )}

          {menuData.description && (
            <div className="dropdown-description">{menuData.description}</div>
          )}

          {menuData.items &&
            menuData.items.map((item, index) => (
              <div key={index} className="dropdown-item">
                {item.icon && <i className={item.icon}></i>}
                <span>{item.text}</span>
                {item.hasArrow && (
                  <i className="fas fa-chevron-right arrow-icon"></i>
                )}
              </div>
            ))}

          {menuData.divider && <div className="dropdown-divider"></div>}

          {menuData.subHeader && (
            <div className="dropdown-subheader">{menuData.subHeader}</div>
          )}

          {menuData.subItems &&
            menuData.subItems.map((item, index) =>
              item.type === "divider" ? (
                <div key={index} className="dropdown-divider"></div>
              ) : item.type === "subHeader" ? (
                <div key={index} className="dropdown-subheader">
                  {item.text}
                </div>
              ) : (
                <div 
                  key={index} 
                  className="dropdown-item"
                  onMouseEnter={() => onSubmenuHover(item.submenu)}
                >
                  {item.icon && <i className={item.icon}></i>}
                  <span>{item.text}</span>
                  {item.badge && (
                    <span
                      className={`badge ${item.badge === "BETA" ? "badge-beta" : "badge-new"
                        }`}
                    >
                      {item.badge}
                    </span>
                  )}
                  {item.hasArrow && (
                    <i
                      className="fas fa-chevron-right"
                      style={{ marginLeft: "auto", fontSize: "12px" }}
                    ></i>
                  )}
                </div>
              )
            )}

          {menuData.about && menuData.about.length > 0 && (
            <>
              <div className="dropdown-divider"></div>
              {menuData.about.map((item, index) => (
                <div key={index} className="dropdown-item">
                  <span>{item.text}</span>
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default NavItem;