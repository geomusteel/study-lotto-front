import React from 'react';
import { LottoGroup } from '../../../common/interface';
import { useDispatch } from 'react-redux';
import { setMainLottoNumber } from '../../../slice/LottoNumberSlice';
import * as S from './LottoNumber.style';
import { FaShuffle } from 'react-icons/fa6';

interface Props {
  id: number;
  lottoNumber: LottoGroup;
}

const LottoNumber = ({ id, lottoNumber }: Props) => {
  const dispatch = useDispatch();

  const HandleClick = (id: number) => {
    dispatch(setMainLottoNumber(id));
  };

  return (
    <S.Layout>
      <S.ParagraphIndex>{id + 1}</S.ParagraphIndex>
      <S.BoxDivider />
      <S.ContainerLottoNumber>
        {lottoNumber.map((item, index) => {
          return (
            <S.BoxRoundNumber
              key={index}
              $color={item.color}
              $isOpen={item.isOpen}
            >
              {item.isOpen && item.number}
            </S.BoxRoundNumber>
          );
        })}
      </S.ContainerLottoNumber>
      <S.BoxDivider />
      <S.WrapperIcon>
        <FaShuffle onClick={() => HandleClick(id)} cursor={'pointer'} />
      </S.WrapperIcon>
    </S.Layout>
  );
};

export default LottoNumber;
