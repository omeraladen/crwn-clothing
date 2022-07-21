import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import {
    CollectionPreviewContainer,
    TitleContainer,
    PreviewContainer
  } from './collection-preview.styles';

const CollectionPreview  = ({ title , items }) =>(
    <CollectionPreviewContainer > 
        <TitleContainer className='title'>{title.toUpperCase()}</TitleContainer>
        <PreviewContainer >

            {items.filter((item,idx) => idx < 4)
            .map( (item) => (
                <CollectionItem key={item.id} item={item}/>
            ))}

        </PreviewContainer>
    </CollectionPreviewContainer>
);

export default CollectionPreview;

// => () this brake's is Deferent Than This {} in >> we User () one in arrow Function 