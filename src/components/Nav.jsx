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
  return (
    <svg className={children.toLowerCase() + (children.toLowerCase() == page ? ' active' : '')} viewBox="0 0 700 80">
      <symbol id={"s-" + children}>
        <text textAnchor="end" x="100%" y="80%">{children}</text>
      </symbol>
      <use onClick={onClickNav} className="text" value={clickValue.toLowerCase()} href={"#s-" + children}></use>
      <use onClick={onClickNav} className="text" value={clickValue.toLowerCase()} href={"#s-" + children}></use>
      <use onClick={onClickNav} className="text" value={clickValue.toLowerCase()} href={"#s-" + children}></use>
      <use onClick={onClickNav} className="text" value={clickValue.toLowerCase()} href={"#s-" + children}></use>
      <use onClick={onClickNav} className="text" value={clickValue.toLowerCase()} href={"#s-" + children}></use>
    </svg>
  )
}