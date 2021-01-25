import {connect} from "react-redux";
import {compose} from "redux";
import {createStructuredSelector} from "reselect";

import {selectCollectionFetching} from "../../redux/shop/shop.selectors";
import CollectionOverview from "./CollectionOverview";
import WithSpinner from "../with-spinner/withSpinner";

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionFetching,
});

export default compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);