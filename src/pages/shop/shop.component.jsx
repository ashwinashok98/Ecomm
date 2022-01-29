import React from "react";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import {
  firestore,
  covertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";
class ShopPage extends React.Component {
  unsubscribrFromSnapshot = null;

  componentDidMount() {
    const { collections } = this.props;
    const collectionRef = firestore.collection("collections");
    this.unsubscribrFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = covertCollectionsSnapshotToMap(snapshot);
      collections(collectionsMap);
    });
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  collections: (collectionsMap) => dispatch(updateCollections(collectionsMap)),
});
export default connect(null, mapDispatchToProps)(ShopPage);
