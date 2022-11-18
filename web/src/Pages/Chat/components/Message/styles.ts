import styled from "styled-components";

export const SMessage = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 0.25rem;
  p.message-body {
    border-radius: 1.15rem;
    line-height: 1.25;
    max-width: 75%;
    padding: 0.5rem 0.875rem;
    word-wrap: break-word;
    margin: 0;
  }
  p.from-me {
    align-self: flex-end;
    background-color: #248bf5;
    color: #fff;
    position: relative;
  }
  p.from-them {
    background-color: #e5e5ea;
    color: #000;
    position: relative;
    align-self: flex-start;
  }
  p.message-meta {
    font-size: 10px;
    line-height: 0.5;
    color: #ccc;
    padding: 0;
    margin-top: 5px;
    word-wrap: break-word;
  }
  p.my-meta {
    text-align: right;
  }
`;
