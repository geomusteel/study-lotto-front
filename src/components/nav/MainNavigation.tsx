import React from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './MainNavigation.style';
import {
  PiBookmarkSimple,
  PiBookmarkSimpleFill,
  PiNotePencil,
  PiNotePencilFill,
  PiNumberCircleSeven,
  PiNumberCircleSevenFill,
  PiUserCircle,
  PiUserCircleFill,
} from 'react-icons/pi';

const navigationItems = [
  {
    path: '/',
    label: '번호생성',
    IconFilled: PiNumberCircleSevenFill,
    IconOutline: PiNumberCircleSeven,
  },
  {
    path: '/sub1',
    label: '번호저장',
    IconFilled: PiBookmarkSimpleFill,
    IconOutline: PiBookmarkSimple,
  },
  {
    path: '/sub2',
    label: '당첨후기',
    IconFilled: PiNotePencilFill,
    IconOutline: PiNotePencil,
  },
  {
    path: '/sub3',
    label: '마이페이지',
    IconFilled: PiUserCircleFill,
    IconOutline: PiUserCircle,
  },
];

const MainNavigation = () => {
  const location = useLocation();
  const isActive = (path: string) =>
    location.pathname === path ||
    (path === '/' && location.pathname.startsWith('/main'));

  return (
    <S.Layout>
      {navigationItems.map(({ path, label, IconFilled, IconOutline }) => (
        <S.Wrapper key={path} $isActive={isActive(path)} to={path}>
          {isActive(path) ? <IconFilled /> : <IconOutline />}
          <p>{label}</p>
        </S.Wrapper>
      ))}
    </S.Layout>
  );
};

export default MainNavigation;
