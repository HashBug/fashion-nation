const INITIAL_STATE = {
  sections: [
    {
      id: 0,
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      title: "hats",
      linkUrl: "shop/hats",
    },
    {
      id: 1,
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      title: "jackets",
      linkUrl: "shop/jackets",
    },
    {
      id: 2,
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      title: "sneakers",
      linkUrl: "shop/sneakers",
    },
    {
      id: 3,
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      title: "womens",
      size: "large",
      linkUrl: "shop/womens",
    },
    {
      id: 4,
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      title: "mens",
      size: "large",
      linkUrl: "shop/mens",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
