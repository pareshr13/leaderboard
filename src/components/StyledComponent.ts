import styled, { keyframes } from 'styled-components';
import { RANKING_COLOR } from '../constants';

interface RankingProps {
    ranking: number;
}


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 5px;
  font-size: 1.2rem;
`;

export const ListContainer = styled.div`
  background-color: #f7f5f6;
  position: absolute;
  width: 90%;
  height: 500px;
  border-radius: 10px;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
  
`;

export const ItemBox  = styled.div<RankingProps>`
  width: 90%;
  height: 50px;
  position: absolute;
  top: ${props => 50 * (props.ranking - 1)}px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  transition: all 0.3s ease 0s;
  border-bottom: 1px solid #efeded;
`;

export const ItemRanking = styled.div<RankingProps>`
  width: 22px;
  text-align: center;
  border-radius: 50%;
  height: 22px;
  line-height: 22px;
  margin-right: 8px;
  color: #fff;
  font-size: 14px;
  background-color: ${(props) => RANKING_COLOR[props.ranking - 1] || '#8eb9f5'};
  animation: ${rotate} 1s linear infinite;
  display: inline-block;
  padding: 5px;
`;

export const ItemName = styled.div`
  color: #363336;
  margin-left: 8px;
`;

export const ItemPicture = styled.div`
  background-color: #e5e5e5;
  background-size: 100%;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(255, 255, 255);
  border-image: initial;
`;

export const ItemScore = styled.div`
  -webkit-box-flex: 1;
  flex-grow: 1;
  text-align: right;
  color: #e46a86;
`;
