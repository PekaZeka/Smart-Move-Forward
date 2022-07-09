import { useState } from "react";
import { Button } from "../../components";
import "./popup.css";

function Popup() {
  const [Popup, setPopup] = useState(false);

  const togglePopup = () => {
    setPopup(!Popup);
  };

  if(Popup) {
    document.body.classList.add('active-Popup')
  } else {
    document.body.classList.remove('active-Popup')
  }

  return (
    <>
      <div onClick={togglePopup}>
        <Button />
      </div>
      {Popup && (
        <div className="Popup">
          <div onClick={togglePopup} className="overlay"></div>
          <div className="Popup-content">
            <h2>Get in touch</h2>
            <form action="" className="Popup-content_inputs">
              <label htmlFor="">Name</label>
              <input type="text" name="Name" />
              <label htmlFor="">E-mail</label>
              <input type="email" />
              <label htmlFor="">Message</label>
              <input type="text" />
            </form>
            <button className="close-Popup" onClick={togglePopup}>
              NE DIRAJ, STOKO MAJMUNE!
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Popup