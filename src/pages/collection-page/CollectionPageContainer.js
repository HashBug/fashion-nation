import {connect} from "react-redux";
import {compose} from "redux";
import {createStructuredSelector} from "reselect";

import {selectIsCollectionLoaded} from "../../redux/shop/shop.selectors";
import CollectionPage from "./CollectionPage";
import WithSpinner from "../../components/with-spinner/withSpinner";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionLoaded(state),
});

export default compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);