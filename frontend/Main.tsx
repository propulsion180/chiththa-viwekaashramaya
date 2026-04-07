import React from "react";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();

  return (
    <div className="fill-parent">
      <div className="main-page-image-container">
        <img
          className="main-page-image"
          src="/static/temple-main-page.jpg"
          alt="Main Page Temple image"
        />
      </div>
      <div className="main-text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare
          dictum purus, mollis tincidunt ante tempor quis. Duis a leo consequat,
          viverra arcu et, consequat dui. Nunc dapibus, nulla sit amet accumsan
          tristique, lacus odio porttitor lorem, sollicitudin varius orci tellus
          in erat. Nulla fermentum erat sit amet leo elementum, nec tempus nibh
          blandit. Vestibulum sit amet odio bibendum, consectetur lacus vitae,
          vulputate mauris. Etiam dignissim ultrices consequat. Aliquam
          condimentum semper lectus, sit amet iaculis quam dapibus ac. Duis
          posuere sapien malesuada mattis consequat. Nullam a erat eget purus
          scelerisque cursus. Pellentesque eget lectus sem. Vestibulum viverra
          imperdiet lobortis. Maecenas sollicitudin elit vitae iaculis feugiat.
        </p>
        <p>
          Quisque tempor feugiat magna at posuere. Quisque ut justo a nisl
          congue accumsan at id ipsum. Nulla vel urna urna. Nam mauris diam,
          malesuada vel nulla eget, mattis suscipit tellus. Praesent fringilla,
          sapien sed faucibus ullamcorper, ligula justo hendrerit nunc, a
          feugiat metus nibh at erat. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Quisque dictum
          quis tellus ac lobortis. Sed facilisis quam in urna bibendum
          consectetur. Etiam mollis justo quam, a posuere dolor porttitor vel.
          Sed vehicula ultricies nisi, et pharetra felis eleifend et. In tempor
          elementum commodo. Integer viverra fringilla ex, id vulputate ante
          posuere eget. Nulla facilisi.
        </p>
      </div>
    </div>
  );
}
