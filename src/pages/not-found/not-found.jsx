import { useNavigate } from "react-router"
import Path from "../../components/data/path"

export default function NotFound() {
  const navigate = useNavigate()

  function returnToHomeClick() {
    navigate(Path.Home)
  }

  return (
    <div>
      <section>
        <h1>Whoops!</h1>
        <p>Page Not Found...</p>
        <button type="button" onClick={returnToHomeClick}>
          Return to home
        </button>
      </section>
    </div>
  )
}
