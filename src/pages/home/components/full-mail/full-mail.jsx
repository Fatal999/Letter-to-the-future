import "./full-mail.scss"

export default function FullMail({ fullMailToggle }) {
  return (
    <div className="full-mail">
      <div className="full-mail-overlay" onClick={fullMailToggle}></div>
      <textarea className="full-mail-input" placeholder="Пиши тут"></textarea>
    </div>
  )
}
