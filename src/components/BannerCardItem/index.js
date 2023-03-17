import './index.css'

const BannerCardItem = props => {
  const {eachList} = props
  const {headerText, description, className} = eachList

  return (
    <li className={`card ${className}`}>
      <div>
        <h1 className="title">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="Button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
