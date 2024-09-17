import "./user-agreement.scss"

export default function UserAgreement({ userAgreementToggle }) {
  return (
    <div className="user-agreement">
      <div className="user-agreement-overlay" onClick={userAgreementToggle}></div>
      <div className="user-agreement-wrapper">
        <h1>Пользовательское соглашение</h1>
        <p>
          Вы имеете право хранить молчание. Всё, что вы скажете, может быть и будет использовано против вас в суде. Вы имеете право на
          присутствие адвоката во время допроса. Если вы не можете оплатить услуги адвоката, он будет предоставлен вам государством. Ваши
          права вам понятны?
        </p>
        <button type="button" onClick={userAgreementToggle}>
          X
        </button>
      </div>
    </div>
  )
}
