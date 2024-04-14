import React from 'react';
import * as S from './TopNavigation.style';
import { useLocation } from 'react-router-dom';

const menuItems = [
  { path: '/', label: '번호생성' },
  { path: '/main/2', label: '회차검색' },
  { path: '/main/3', label: '번호통계' },
];

const TopNavigation = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <S.Layout>
      <S.Todo>Todo</S.Todo>
      <S.ContainerMenu>
        {menuItems.map((item) => (
          <S.ParagraphMenu
            key={item.path}
            $isActive={isActive(item.path)}
            to={item.path}
          >
            {item.label}
          </S.ParagraphMenu>
        ))}
      </S.ContainerMenu>
    </S.Layout>
  );
};

export default TopNavigation;
