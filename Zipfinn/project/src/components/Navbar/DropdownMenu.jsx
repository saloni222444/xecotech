// DropdownMenu.jsx
import React from "react";

const DropdownMenu = ({ menuData }) => {
  return (
    <div className="dropdown-menu">
      {/* Header + Description + Divider */}
      {(menuData.header || menuData.description) && (
        <>
          <div className="dropdown-header">
            {typeof menuData.header === "object" ? (
              <>
                {menuData.header.icon && (
                  <i className={menuData.header.icon}></i>
                )}
                <span>{menuData.header.text}</span>
              </>
            ) : (
              menuData.header
            )}
          </div>

          {menuData.description && (
            <div className="dropdown-description">{menuData.description}</div>
          )}

          <div className="dropdown-divider"></div>
        </>
      )}

      {/* SubHeader */}
      {menuData.subHeader && (
        <div className="dropdown-subheader">{menuData.subHeader}</div>
      )}

      {/* SubItems */}
      {menuData.subItems &&
        menuData.subItems.map((item, index) =>
          item.type === "divider" ? (
            <div key={index} className="dropdown-divider"></div>
          ) : item.type === "subHeader" ? (
            <div key={index} className="dropdown-subheader">
              {item.text}
            </div>
          ) : (
            <div key={index} className="dropdown-item">
              {item.icon && <i className={item.icon}></i>}
              <span>{item.text}</span>
              {item.badge && (
                <span
                  className={`badge ${
                    item.badge === "BETA" ? "badge-beta" : "badge-new"
                  }`}
                >
                  {item.badge}
                </span>
              )}
              {item.hasArrow && (
                <i className="fas fa-chevron-right arrow-icon"></i>
              )}
            </div>
          )
        )}

      {/* About Section */}
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
  );
};

export default DropdownMenu;
