import "./Before-Header-Contact-Elem.scss";

const BHeaderCElem = (props) => {
  return (
    <div className="bheader-content-elem">
      <img src={props.imgPath} alt="" />
      <a href="#">{props.text}</a>
    </div>
  );
};

export default BHeaderCElem;
