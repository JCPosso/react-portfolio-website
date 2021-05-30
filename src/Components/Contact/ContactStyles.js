import styled from 'styled-components';

export const ContactContainer = styled.div`
    height:  800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;

    @media screen and (max-width: 768px ){
        height: 1200px;
    }
    @media screen and (max-width: 480px ){
        height: 9S00px;
    }   
`;
export const ContactContainer2 = styled.div`
    margin: 20px 0px;
    width: 500px;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
    position: relative;
    border-radius: 10px;
    height: 500px;
    display: grid;
    grid-template-columns: 1fr;
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