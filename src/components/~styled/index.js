import styled from "styled-components";

export const SubContainer = styled.div`
  background: rgba(0,0,0,0.04);
  width: 100%;
  min-height: 100vh;
  font-family: "Roboto", sans-serif;
  h2 {
      text-align: center;
      font-size: 1.4rem;
      padding-bottom: 10px;
      padding-top: 10px;
      text-transform: capitalize;
  }
`;

export const MainContainer = styled.div`
  background: rgba(0,0,0,0.04);
  width: 100%;
  height: 100%;
  padding-top: 20px;
  font-family: "Roboto", sans-serif;
`;
export const LoaderContainer = styled.div`
  background: rgba(0,0,0,0.04);
  width: 100%;
  height: 100vh;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
`;

export const FilterStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  background: rgba(0,0,0,0.04);
  box-shadow: 0 -1px 0.5px 0.51px #F3F3F4;
  div {
      display: flex;
      p {
        margin-right: 8px;
        color: rgba(0,0,0,0.6);
        font-size: 15px;
        margin-top: 3px;
      }
  }
  select {
    font-size: 14px;
    padding: 2px 5px;
    color: white;
    background: rgb(126,103,200);
    border-radius: 5px;
    border: none;
    box-shadow: rgba(0,0,0,0.04) 0px 0px 5px 5px;
}
`;

export const ContentCard = styled.div`
  background-color: white;
  box-shadow: rgb(126,103,200, 0.08) 0px 0px 3px 3px;
  font-family: "Roboto", sans-serif;
  max-width: 600px;
  width: 100%;
  /* height: 300px; */
  @media (max-width: 640px) {
    width: 90%;
    h3 {
      font-size: 1 rem;
    }
  }
  margin: 0 auto;
  margin-bottom: 20px;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  .upvotes {
    min-width: 44px;
    padding: 4px 5px;
    color: rgb(126,103,200);
    display: flex;
    flex-direction: column;
    p {
      padding: 8px 4px 8px 4px;
      font-size: 0.85rem;
      font-weight: bold;
    }
  }
  .content-right {
    box-sizing: border-box;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
  }
  .card-top {
    display: flex;
    border-bottom: 1px solid rgb(126,103,200, 0.08);
    p {
      padding-right: 10px;
      font-size: 0.8rem;
      color: #c1c3c4;
        padding: 10px 0 5px 0;
    }
    p:first-child {
      color: black;
      font-weight: bold;
      margin-right: 10px;
    }
    p {
      margin-right: 5px;
    }
  }
  .sub-heading {
    font-weight: bold;
    color: #323f4b;
    text-decoration: none;
  }
  .post-details {
    display: flex;
    flex-direction: row-reverse;
    margin-top: 10px;
    h3 {
        font-weight: bold;
        font-size: 1.07rem;
        padding-bottom: 10px;
        line-height: 1.1;
        color: rgb(81,86,99);
      span a {
        color: grey;
        font-style: normal;
      }
    }
    p {
      font-size: 0.9rem;
      color: #323f4b;
    }
    .post-link {
        margin-right: 10px;
        a {
            width: 200px;
            margin-right: -70px;

        }
    }
    .react_tinylink_card {
      background-color: inherit;
      border-width: inherit;
      border-style: none;
      box-shadow: none;
    }
    .react_tinylink_card_content_wrapper {
      display: none;
    }
    .react_tinylink_card_media {
      border-radius: 2px;
    }

    .reddit-link {
      text-decoration: none;
      font-size: 0.8rem;
      font-style: normal;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding-top: 10px;
    }
  }
`;
