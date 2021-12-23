import styled from "styled-components";

export const Container = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
width: 100vw;
background: url(http://wallup.net/wp-content/uploads/2017/10/25/487437-anime_girls-404_Not_Found-glowing_eyes.jpg);
background-repeat: no-repeat;
background-size: cover;
background-position: center;

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 500px;
  padding: 25px;
  background: white;
  color: rgb(14, 30, 37);
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(14, 30, 37, .16);
  opacity: 0.78;

  .title {
    margin: 0;
    font-size: 22px;
    line-height: 24px;
  }

  p:last-of-type {
    margin-bottom: 0;
  }

  a {
    margin: 0;
    text-decoration: none;
    font-weight: 600;
    line-height: 24px;
    color: #007067;
    display: inline-flex;
    &:hover,
    &:focus {
      text-decoration: underline;
      text-decoration-color: #f4bb00;
    }
    
    svg {
      position: relative;
      top: 4px;
    }
  }
} 
a:hover svg path {
  fill: #007067;
}
`;