import React, {useContext} from "react";
import {AppContext} from '../../context/AppContext'
import styled from "styled-components";
import { items } from "../../utils/data";
import { kanit } from "../../utils/fonts";
import PostOrder from "./PostOrder";

function IndexContent() {
  const value = useContext(AppContext)
  function createItems() {
    var itemsCreated = [];
    var counter = 0;

    items.forEach((item) => {
      itemsCreated.push(
        <div
          key={counter}
          className="item"
          onClick={() => {
            value.setItem(item)
          }}
        >
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

      <IndexContentContainer>
        <div className="index-content">
          <div className="content">{createItems()}</div>
        </div>
      </IndexContentContainer>
  );
}
export default IndexContent;

const IndexContentContainer = styled.div`
  a {
    text-decoration: none;
    color: #000;
    font-family: ${kanit};
  }

  .index-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  .content {
    display: flex;
    justify-content: space-between;
    @media(max-width: 720px){
      flex-direction: column;
    }
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
    transition: 0.4s;
    margin: 20px 20px;
    @media(max-width: 720px){
      width: 240px;
   
    }
  }
  .item:active {
    transform: scale(1.2);
  }
  .item-link {
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  .price-info {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
