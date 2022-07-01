const INITIAL_STATE = {
    sections: [{
        title:'hats',
        // imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
        imageUrl:'https://images.pexels.com/photos/35185/hats-fedora-hat-manufacture-stack.jpg?auto=compress&cs=tinysrgb&h=750&w=1260',
        id:1,
        linkUrl:'shop/hats'
    },
    {
        title:'jackets',
        imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',
        id:2,
        linkUrl:'shop/jackets'
    },
    {
        title:'sneakers',
        imageUrl:'https://i.ibb.co/0jqHpnp/sneakers.png',
        id:3,
        linkUrl:'shop/sneakers'
    },
    {
        title:'womans',
        imageUrl:'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        size:'large',
        id:4,
        linkUrl:'shop/womans'
    },
    {
        title:'mens',
        imageUrl:'https://images.pexels.com/photos/8460715/pexels-photo-8460715.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        size:'large',
        id:5,
        linkUrl:'shop/mens'
    }]
};

const directoryReducer = ( state = INITIAL_STATE , action ) => {
    switch(action.type){
        default:
            return state;
    }
};

export default directoryReducer;
