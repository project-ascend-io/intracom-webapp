type NavLinkProps = {
  label: string;
  hyperlink: string;
}

const NavLink = ({ label, hyperlink }: NavLinkProps) => {
  return (
    <>
      <li className="font-semibold text-white">
        <a href={hyperlink}>
          {label}
        </a>
      </li>
    </>
  )
}

export default NavLink;
