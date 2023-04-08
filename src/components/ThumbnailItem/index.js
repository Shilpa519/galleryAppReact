import './index.css'

const ThumbnailItem = props => {
  const {imagesItem, selectedItem} = props
  const {id, thumbnailUrl, thumbnailAltText} = imagesItem

  const onClicked = () => {
    selectedItem(id)
  }

  return (
    <li>
      <button className="button" type="button" onClick={onClicked}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="thumbnail-image"
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
