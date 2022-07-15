import "./popup.css";
import ReactDom from 'react-dom'
import close from "../../assets/close.png";

function Popup({ open, onClose }) {

    if(open) {
      document.body.classList.add('active-Popup')
    } else {
      document.body.classList.remove('active-Popup')
      return null
    }

    return ReactDom.createPortal(
      <>
        <div onClick={onClose} className='smf__popup-overlay'></div>
        <div className='smf__popup-content'>
          <button className='smf__popup-closeBtn' onClick={onClose}> 
            <img src={close} className='smf__popup-closeImg' alt="close icon" />
          </button>
          <div >
            <h2>Contact us</h2>
            <form action="https://formsubmit.co/dadodorich@yahoo.com" method="POST" 
                  className="smf__popup-content_inputs" onSubmit="alert(Thanks for your submission)">
                <input type="hidden" name="_captcha" value="false"></input>
                <input type="name" name="name" placeholder="Name" required='true'/>  
                <input type="email" name="email" placeholder='Email' required='true'/>
                <textarea placeholder="Message" name="textarea" ></textarea>
                <input type="hidden" name="_next" value="false" ></input> 
                <button className='smf__popup-sendBtn smf-button' type="submit"  >Submit</button>
            </form>
          </div>
        </div>
      </>,
      document.getElementById('portal')
    )

}  
export default Popup