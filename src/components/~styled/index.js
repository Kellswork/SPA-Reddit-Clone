import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: #dae0e6;
  width: 100%;
  padding-top: 20px;
  font-family: "Inter", sans-serif;
`;

export const ContentCard = styled.div`
  background-color: white;
  font-family: "Roboto", sans-serif;
  width: 600px;
  /* height: 300px; */
  margin: 0 auto;
  margin-bottom: 20px;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  .upvotes {
    background-color: #f7f9fa;
    width: 44px;
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
    p {
      padding-right: 10px;
      font-size: 0.8rem;
      color: #c1c3c4;
      padding-bottom: 10px;
      padding-top: 10px;
    }
    p:first-child {
      color: black;
      font-weight: bold;
    }
  }
  .sub-heading {
    font-weight: bold;
  }
  .post-details {
    h3 {
      font-weight: bold;
      font-size: 1.1rem;
      padding-bottom: 10px;
    }
    p {
      font-size: 0.9rem;
      color: grey;
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
  }
`;
