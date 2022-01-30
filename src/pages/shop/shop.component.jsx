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
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component { 
  unsubscribrFromSnapshot = null;
  state ={
    loading:true
  }


  componentDidMount() {
    const { collections } = this.props;
    const collectionRef = firestore.collection("collections");
    this.unsubscribrFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = covertCollectionsSnapshotToMap(snapshot);
      collections(collectionsMap);
      this.setState({loading:false})
    });
  }
  render() {
    const { match } = this.props;
    const {loading} = this.state;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={(props)=><CollectionsOverviewSpinner isLoading={loading} {...props} />} />
        <Route
          path={`${match.path}/:collectionId`} 
          render={(props)=><CollectionsPageSpinner isLoading={loading} {...props}/>}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  collections: (collectionsMap) => dispatch(updateCollections(collectionsMap)),
});
export default connect(null, mapDispatchToProps)(ShopPage);
