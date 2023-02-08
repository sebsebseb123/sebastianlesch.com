import '../assets/scss/Nav.scss'

export default function Nav({ onClickNav, page }) {
  return (
    <>
      <nav>
        <NavItem onClickNav={onClickNav} page={page} clickValue="About">About</NavItem>
        <NavItem onClickNav={onClickNav} page={page} clickValue="Projects">Projects</NavItem>
        <NavItem onClickNav={onClickNav} page={page} clickValue="Contact">Contact</NavItem>
      </nav>
    </>
  )
}

function NavItem({ children, onClickNav, clickValue, page }) {
  const viewBox = {
    'About': '0 0 450 150',
    'Projects': '0 0 650 150',
    'Contact': '0 0 600 150'
  };

  return (
    <svg className={children.toLowerCase() + (children.toLowerCase() == page ? ' active' : '')} viewBox={viewBox[clickValue]}>
      <symbol id={"s-" + children}>
        <text textAnchor="end" x="92%" y="70%">{children}</text>
      </symbol>
      <use onClick={onClickNav} className="text" value={clickValue.toLowerCase()} href={"#s-" + children}></use>
      <use onClick={onClickNav} className="text" value={clickValue.toLowerCase()} href={"#s-" + children}></use>
      <use onClick={onClickNav} className="text" value={clickValue.toLowerCase()} href={"#s-" + children}></use>
      <use onClick={onClickNav} className="text" value={clickValue.toLowerCase()} href={"#s-" + children}></use>
      <use onClick={onClickNav} className="text" value={clickValue.toLowerCase()} href={"#s-" + children}></use>
    </svg>
  )
}