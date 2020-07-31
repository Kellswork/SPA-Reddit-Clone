import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: #dae0e6;
  width: 100%;
  height: 100%;
  padding-top: 20px;
  font-family: "Roboto", sans-serif;
`;
export const LoaderContainer = styled.div`
background-color: #dae0e6;
  width: 100%;
  height: 100vh;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
`;

export const ContentCard = styled.div`
  background-color: white;
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
    background-color: #f7f9fa;
    min-width: 44px;
    padding-top: 4px;
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
    color: #323F4B;
    text-decoration: none;
  }
  .post-details {
    h3 {
      font-weight: bold;
      font-size: 1.1rem;
      padding-bottom: 10px;
      color: #323F4B;
    }
    p {
      font-size: 0.9rem;
      color: #323F4B;
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
      font-style: italic;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding-top: 10px;
    }
  }
`;
