import { faCheck, faLock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

const Button = () => {
    const [isOpen, setIsOpen] = useState(false)
    const setOpen = () => {
        setIsOpen(!isOpen)
    }
  return (
    <div>
          <button type="button" onClick={setOpen} className={`lessons__card ${isOpen ? 'lessons__card_hideBtn' : 'lessons__card_btn'}`}>
            <FontAwesomeIcon icon={isOpen ? faCheck : faLock}/>
              {isOpen ? 'Dars ochilgan' : "Darsni ochish"}
      </button>
    </div>
  )
}

export default Button
