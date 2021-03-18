import React, { memo } from 'react';
import UserScore from '../userscore';

import Score from './Score';
import {
  ListContainer,
  ItemBox,
  ItemRanking,
  ItemPicture,
  ItemName
} from './StyledComponent';

interface Props {
    data: UserScore[];
}

const ScoreList: React.FC<Props> = ({ data }) => (
  <ListContainer>
    {data.map((item, index) => (
      <ItemBox key={item.userID} ranking={item.ranking}>
        <ItemRanking ranking={item.ranking}>{item.ranking}</ItemRanking>
        <ItemPicture>{item.picture}</ItemPicture>
        <ItemName>{item.displayName}</ItemName>
        <Score score={item.score} />
      </ItemBox>
    ))}
  </ListContainer>
);

export default memo(ScoreList);