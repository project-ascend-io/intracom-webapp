
const Navigation = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 items-center">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <details>
              <summary>Services</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a>Branding</a>
                </li>
                <li>
                  <a>Design</a>
                </li>
                <li>
                  <a>Marketing</a>
                </li>
                <li>
                  <a>Advertisement</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <button className="btn btn-outline uppercase">try for free</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation;
