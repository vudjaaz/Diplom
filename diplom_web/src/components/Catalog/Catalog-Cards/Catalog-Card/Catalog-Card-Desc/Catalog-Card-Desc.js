import './Catalog-Card-Desc.scss';
import CatalogCardDescElem from './Catalog-Card-Desc-Elem/Catalog-Card-Desc-Elem';
import IconTime from 'assets/media/icons/catalog/catalog-time.svg';
import IconPrice from 'assets/media/icons/catalog/catalog-price.svg';

const CatalogCardDesc = ({ cardData }) => {
  const { textTime, textPrice } = cardData;
  return (
    <div class="catalog-card-desc">
      <CatalogCardDescElem imgPath={IconTime} text={textTime}/>
      <CatalogCardDescElem imgPath={IconPrice} text={textPrice}/>
    </div>
  )
}

export default CatalogCardDesc;