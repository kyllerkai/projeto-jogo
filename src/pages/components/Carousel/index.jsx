import React from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom'

export default function SliderC() {

  return (
    <Link
      className="relative"
    >
      <Poster src="https://th.bing.com/th/id/R.a75408e590237f31ed3c40168b7e5229?rik=U5Cw8LvgmPrdDg&pid=ImgRaw&r=0" alt="poster" />

      <p className="text-sm text-light">
        Anime
      </p>

      {/* {tooltip && <Tooltip anime={anime} flip={idx % 5 === 0} />} */}
    </Link>
  )
}
const Poster = styled.img`
  width: 160px;
  height: 230px;
  border-radius: 4px;
  @media screen and (max-width: 1031px) {
    width: 180px;
    height: 250px;
  }
  @media screen and (max-width: 938px) {
    width: 160px;
    height: 230px;
  }
  @media screen and (max-width: 840px) {
    width: 200px;
    height: 280px;
  }
  @media screen and (max-width: 740px) {
    width: 180px;
    height: 260px;
  }
  @media screen and (max-width: 675px) {
    width: 150px;
    height: 200px;
  }
  @media screen and (max-width: 575px) {
    width: 200px;
    height: 280px;
  }
  @media screen and (max-width: 490px) {
    width: 170px;
    height: 240px;
  }
  @media screen and (max-width: 430px) {
    width: 140px;
    height: 200px;
  }
`;