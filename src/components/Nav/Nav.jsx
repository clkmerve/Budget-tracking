import { Form, NavLink } from "react-router-dom"
import "./Nav.css"
const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink
        to="/"
        aria-label="Go to home"
      >
        <span>Bütçe Takip Sistemi</span>
      </NavLink>
      {
        userName && (
          <Form
            method="post"
            action="logout"
            onSubmit={(event) => {
              if (!confirm("Kullanıcıyı silmek istediğinize emin misiniz?")) {
                event.preventDefault()
              }
            }}
          >
            <button type="submit" className="btn btn--warning">
              <span>Kullanıcıyı Sil</span>
            </button>

          </Form>
        )
      }
    </nav>
  )
}
export default Nav