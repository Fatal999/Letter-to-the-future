import { useState } from "react"
import UserAgreement from "../user-agreement/user-agreement"

export default function Main() {
  const [checkActive, setCheckActive] = useState(false)
  const [userAgreementActve, userAgreementActive] = useState(false)

  function checkChange() {
    checkActive === false ? setCheckActive(true) : setCheckActive(false)
  }

  function OnUserAgreement() {
    userAgreementActive(true)
  }

  function OffUserAgreement() {
    userAgreementActive(false)
  }

  return (
    <main>
      <h2>Отправь письмо себе или близкому челу в будущее!!!</h2>
      <label>
        Уже <input type="number" value={0} readOnly></input> человек отправили письмо
      </label>
      {userAgreementActve && <UserAgreement OffUserAgreement={OffUserAgreement} />}
      <form action="https://echo.htmlacademy.ru/" method="post">
        <textarea placeholder="Пиши тут" name="mail"></textarea>
        <input type="date" name="date"></input>
        <input type="email" name="email" placeholder="Введи свою почту"></input>
        <label htmlFor="agree">
          <input type="checkbox" id="agree" name="agree" checked={checkActive} value={checkActive} onChange={checkChange}></input>
          <span></span>Я согласен с{" "}
          <button type="button" onClick={OnUserAgreement}>
            условиями
          </button>
        </label>
        <button type="submit" disabled={checkActive === false}>
          Отправить
        </button>
      </form>
    </main>
  )
}
