type NavLinkProps = {
  label: string;
  hyperlink: string;
  onClick?(): void;
};

const NavLink = ({ label, hyperlink, onClick }: NavLinkProps) => {
  return (
    <>
      <li className='font-semibold text-white'>
        <a href={hyperlink} onClick={onClick}>{label}</a>
      </li>
    </>
  );
};

export default NavLink;
