import styled from 'styled-components';

export const CoverImg = styled.img`
    width: 190px;
    height: 300px;
    box-shadow: 5px 5px 20px grey;
    transition: all 0.1s ease-out;
    &:hover {
        width: 200px;
        height: 310px;
        transition: all 0.1s ease-out;
    }
`;

export const LikeAndCloseBlock = styled.div`
    display: none;
    opacity: 0.6;
    &:hover {
        opacity: 1;
    }
`;

export const Like = styled.img`
    position: absolute;
    width: 35px;
    height: 35px;
    margin: 10px 0 0 10px;
    transition: all 0.1s ease-out;
    &:hover {
        width: 40px;
        height: 40px;
    }
`;
export const Close = styled.img`
    position: absolute;
    width: 35px;
    height: 35px;
    margin: 10px 0 0 140px;
    transition: all 0.1s ease-out;
    &:hover {
        width: 40px;
        height: 40px;
    }
`;

export const CardBlock = styled.div`
    width: 190px;
    height: 400px;
    margin-bottom: 50px;
    cursor: pointer;
    &:hover ${LikeAndCloseBlock} {
        display: block;
        transition: all 0.1s ease-out;
    }
`;
