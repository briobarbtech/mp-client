import React, {useContext} from "react";
import styled from "styled-components";
import postOrder from "../../services/post_order";
import {AppContext} from '../../context/AppContext'

function PostOrder() {
  const value = useContext(AppContext)
  return (
    <>
      <ButtonContainer>
        <button className="buttonClass" onClick={() => {
          if (value.item !== '') {
            postOrder(item);
          }else{
            value.setActive(true)
          }
        }}>
          Hacer pedido
        </button>
      </ButtonContainer>
    </>
  );
}

export default PostOrder;

const ButtonContainer = styled.div`
  .buttonClass {
    margin: 40px;
    font-size: 15px;
    font-family: Arial;
    width: 140px;
    height: 50px;
    border-width: 1px;
    color: rgba(107, 111, 131, 1);
    border-color: #d6bcd6;
    font-weight: bold;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    box-shadow: 3px 4px 0px 0px #899599;
    text-shadow: 0px 1px 0px #e1e2ed;
    background: #ededed;
  }

  .buttonClass:hover {
    background: rgba(217, 218, 233, 1);
  }
`;
