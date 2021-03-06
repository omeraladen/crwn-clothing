import React from "react";
import { connect } from "react-redux"; // you want to create a mapDispatchToProps


import { addItem } from "../../redux/cart/cart.actions";
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './collection-item.styles';


const CollectionItem = ({ item, addItem }) =>{
  const { name , price , imageUrl } = item
    return(
 <CollectionItemContainer>
    <BackgroundImage className='image' imageUrl={imageUrl} />

    <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
    </CollectionFooterContainer>
    <AddButton onClick={()=> addItem(item)} inverted>Add To Cart</AddButton>
 </CollectionItemContainer>
)};


const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
  });

export default connect(
    null, 
    mapDispatchToProps
)(CollectionItem);
