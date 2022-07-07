import './feature.css'

const Feature = ({iconURL, title, text}) => {
  return (
    <div>
      <div className="smf__Feature">
        <div className='smf__Feature-header'>
          <div className="smf__Feature-icon">
            <img src={iconURL} alt="features_icon" />
          </div>
          <h1>{title}</h1>
        </div>
        <div className='smf__Feature-content'>
          <p>{text}</p>
        </div>
      </div>
    </div>  
  )
}

export default Feature