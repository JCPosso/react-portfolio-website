import styled from 'styled-components';

export const ContactContainer = styled.div`
    height:  800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
`;
export const ContactContainer2 = styled.div`
    max-width: 700px;
    margin: 0px auto;
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
    position: relative;
    border-radius: 10px;
    height: 500px;
    padding:20px;

`;

export const ContactH1 = styled.h1`
    font-size: 2.5rem;
    color: #000;
    margin-top: 100px;

    @media screen and ( max-width: 480px ){
        font-size: 2rem;
    }
`;