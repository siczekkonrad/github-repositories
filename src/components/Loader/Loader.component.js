import React from 'react'
import styled from 'styled-components'

const LoaderWrapper = styled.div`
    width: 100%;
    height: 35vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Spinner = styled.div`
  width: 20px;
  height: 20px;
  border-width: 10px;
  border-style: dashed;
  border-left-color: #eee;
  border-right-color: #000;
  border-top-color: grey;
  border-bottom-color: #f1f1f1;

  border-radius: 50%;
  -webkit-animation-name: spin;
  -webkit-animation-duration: 500ms;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;


const Loader = () => (
    <LoaderWrapper>
        <Spinner />
    </LoaderWrapper>
)

export default Loader