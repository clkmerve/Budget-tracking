import { Form } from "react-router-dom"
import "./Intro.css"
import { UserPlusIcon } from "@heroicons/react/24/solid";

import logo from "../../assets/logo.jpg"

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
        Bütçe <span className="accent">Takip Sistemi</span>
        </h1>
       
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="İsminizi Girin" aria-label="Your Name" autoComplete="given-name"
          />
          <input type="hidden" name="_action" value="newUser" />
          <button type="submit" className="btn btn--dark">
            <span>Giriş</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={logo} alt="Person with money" width={600} />
    </div>
  )
}
export default Intro