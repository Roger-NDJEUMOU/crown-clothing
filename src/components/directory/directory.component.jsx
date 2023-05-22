import React from "react";

import "./directory.styles.scss";

import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          id: 1,
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        },
        {
          id: 2,
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        },
        {
          id: 3,
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        },
        {
          id: 4,
          title: "women",
          imageUrl: "https://i.ibb.co/GCCdy8t/women.png",
          size: "large",
        },
        {
          id: 5,
          title: "men",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, title, imageUrl, size }) => (
          <MenuItem title={title} imgUrl={imageUrl} size={size} key={id} />
        ))}
      </div>
    );
  }
}

export default Directory;
