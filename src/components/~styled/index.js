import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: #dae0e6;
  width: 100%;
  padding-top: 20px;
  font-family: 'Inter', sans-serif;
`;

export const ContentCard = styled.div`
  background-color: white;
  font-family: 'Roboto', sans-serif;
  width: 600px;
  height: 400px;
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
  .content-right{
    padding-left: 20px;
    padding-right: 20px;
  }
  .card-top {
    display: flex;
    p {
        padding-right: 10px;
        font-size: 0.8rem;
        color: #C1C3C4;
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
      padding-top: 10px;
      h3 {
          font-weight: bold;
          font-size: 1.1rem;
      }
  }
`;
