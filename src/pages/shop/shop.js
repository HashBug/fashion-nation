import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectShopCollection } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";
import "./shop.styles.scss";

const Shop = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, title, items }) => (
      <CollectionPreview key={id} title={title} items={items} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollection,
});
export default connect(mapStateToProps)(Shop);
