import styled from 'styled-components';

export const Button = styled.button`
    width: 250px;
    height: 50px;
    border-radius: 20px;
    border-color: transparent;
    font-size: 18px;
    transition: all 0.1s ease-out;
    cursor: pointer;
    margin-left: 47px;
    margin-top: 50px;
    &:hover {
        background-color: #ff0078;
        transition: all 0.1s ease-out;
        color: white;
    }
`;
