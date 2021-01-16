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
        },
        {
          id: 1,
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          title: "jackets",
        },
        {
          id: 2,
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          title: "sneakers",
        },
        {
          id: 3,
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          title: "womens",
          size: "large",
        },
        {
          id: 4,
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          title: "mens",
          size: "large",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, id, size, imageUrl }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
