import "./Catalog.scss";
import CatalogCards from "./Catalog-Cards/Catalog-Cards";

const Catalog = () => {
  return (
    <section class="catalog wrap" id="catalog">
      <h2 class="headers-h2">Каталог</h2>
      <CatalogCards />
    </section>
  );
};

export default Catalog;
