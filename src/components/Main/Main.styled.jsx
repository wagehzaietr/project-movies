import styled from "styled-components";

export const Section = styled.section`
    height: 100vh;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width:390px){
    flex-direction: column;
    text-align: center;
}
`

export const Left = styled.div`
flex: 1;
padding: 30px;

h2,h3{
    margin: 20px;
    color: white;
    font-size: 50px;

    @media only screen and (max-width:390px){
    font-size: 40px;
}
}


`


export const Right =styled.div`
flex: 1;
padding: 30px;

#spaceman{
    width: 350px;
    margin-left: 7rem;

    @media only screen and (max-width:390px){
        width: 100%;
        margin: 0;
}
}

@media only screen and (max-width:390px){

}

`