import React from "react";
import { Route } from "react-router-dom";

import CollectionPage from "../../pages/collection-page/CollectionPage";
import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import "./shop.styles.scss";

const Shop = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default Shop;
