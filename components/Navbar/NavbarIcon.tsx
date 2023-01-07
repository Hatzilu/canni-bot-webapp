import React from 'react';
type Props = {
  icon: React.ReactNode,
  text?: string,
};
const NavbarIcon = ({ icon, text = 'This is a tooltip' }: Props) => {
  return (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
};

export default NavbarIcon;
