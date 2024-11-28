import './Catalog-Card-Desc-Elem.scss';

const CatalogCardDescElem = ({text, imgPath}) => {
  return (
    <div class="catalog-card-desc-elem">
      <img src={imgPath} alt=""/>
      <p>{text}</p>
    </div>
  )
}

export default CatalogCardDescElem;