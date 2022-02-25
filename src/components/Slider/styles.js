import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto;
    width: 800px;
    height: 400px;
    overflow: hidden;
`;

export const Slides = styled.div`
    width: 400%;
    height: 400px;

    display: flex;
`;

export const Input = styled.input`
    display: none;
`;

export const Slide = styled.div`
    width: 25%;
    position: relative;

    img {
        width: 800px;
    }
`;

export const Image = styled.img`

`;

export const Navigation = styled.div`

`;

export const NavButton = styled.div`

`;

export const Navigator = styled.div`
    position: absolute;
    width: 800px;
    margin-top: -40px;
    display: flex;
    justify-content: center;
`;

export const Label = styled.label`
    border: 2px solid #fff;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    transition: .75s;

    &:not(:last-child) {
        margin-right: 30px;
    }

    &:hover {
        background-color: #fff;
    }
`;