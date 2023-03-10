import React from "react";
import styled from "styled-components";
import { items } from "../../utils/data";
import { kanit } from "../../utils/fonts";
import postOrder from "../../services/post_order";

function IndexContent() {
  function createItems() {
    var itemsCreated = [];
    var counter = 0;

    items.forEach((item) => {
      itemsCreated.push(
        <div key={counter} className="item" onClick={() =>{
            postOrder(item);
        }}>
          <div className="item-link">
            <p className="price-info">Precio: ${item.price}:</p>
            <p className="duration-info">Duración: {item.duration} min</p>
          </div>
        </div>
      );
      counter++;
    });
    return itemsCreated;
  }
  return (
    <>
      <IndexContentContainer>
        <div className="content">{createItems()}</div>
      </IndexContentContainer>
    </>
  );
}
export default IndexContent;

const IndexContentContainer = styled.div`
  a {
    text-decoration: none;
    color: #000;
    font-family: ${kanit};
  }
  .content {
    width: 700px;
    display: flex;
    justify-content: space-between;
  }
  .item {
    width: 160px;
    height: 120px;
    box-shadow: -5px 4px 10px -4px rgba(0, 0, 0, 0.72);
    -webkit-box-shadow: -5px 4px 10px -4px rgba(0, 0, 0, 0.72);
    -moz-box-shadow: -5px 4px 10px -4px rgba(0, 0, 0, 0.72);
    border-radius: 10px;
    background: #fff;
    padding: 10px;
  }
  .item-link {
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  .price-info{
    font-size: 1.5rem;
  }
`;
