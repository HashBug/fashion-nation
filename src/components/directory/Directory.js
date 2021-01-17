import React, { Component } from "react";
import MenuItem from "../menu-item/MenuItem";
import "./directory.styles.scss";

class Directory extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
          linkUrl: "",
        },
        {
          id: 2,
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          title: "sneakers",
          linkUrl: "",
        },
        {
          id: 3,
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          title: "womens",
          size: "large",
          linkUrl: "",
        },
        {
          id: 4,
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          title: "mens",
          size: "large",
          linkUrl: "",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
