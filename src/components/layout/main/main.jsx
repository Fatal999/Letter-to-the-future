import { useState } from "react"
import UserAgreement from "../../../pages/home/components/user-agreement/user-agreement"
import FullMail from "../../../pages/home/components/full-mail/full-mail"

export default function Main() {
  const [checkActive, setCheckActive] = useState(false)
  const [userAgreementActve, setUserAgreementActive] = useState(false)
  const [fullMailActve, setFullMail] = useState(false)
  const [fullMailWrapper, setFullMailWrapper] = useState("")

  function checkChange() {
    checkActive === false ? setCheckActive(true) : setCheckActive(false)
  }

  function userAgreementToggle() {
    userAgreementActve === false ? setUserAgreementActive(true) : setUserAgreementActive(false)
  }

  function fullMailToggle() {
    fullMailActve === false ? setFullMail(true) : setFullMail(false)
  }

  return (
    <main>
      <h2>Отправь письмо себе или близкому челу в будущее!!!</h2>
      <label>
        Уже <input type="number" value={0} readOnly></input> человек отправили письмо
      </label>
      {userAgreementActve && <UserAgreement OffUserAgreement={userAgreementToggle} />}
      {fullMailActve && <FullMail fullMailToggle={fullMailToggle} setFullMailWrapper={setFullMailWrapper} />}
      <form action="https://echo.htmlacademy.ru/" method="post">
        <input placeholder="Пиши тут" readOnly name="mail" value={fullMailWrapper} onClick={fullMailToggle}></input>
        <input type="date" name="date"></input>
        <input type="email" name="email" placeholder="Введи свою почту"></input>
        <label htmlFor="agree">
          <input type="checkbox" id="agree" name="agree" checked={checkActive} value={checkActive} onChange={checkChange}></input>
          <span></span>Я согласен с{" "}
          <button type="button" onClick={userAgreementToggle}>
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
