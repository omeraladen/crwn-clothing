import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";





const ShopPage = ({ match }) =>( // match path = /shop
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverview}/>
            <Route path={`${match.path}/:collectionId`} component={CollectionPage}/> 
        </div>
);



export default ShopPage;  

// we do not need class cose we not access the state
// switch class component to function component