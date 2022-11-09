import styled from "styled-components";

export const AreaMain = styled.main`
  // css main
  display: grid;

  .container {
    width: 96%;
    margin-top: 2%;
    padding-left: 2%;
    padding-right: 2%;

    display: flex;
    flex-wrap: wrap;
    /* align-items: center; */
    justify-content: space-around;
    /* background-color: #333; */
    /* justify-items: center; */
    /* justify-content: space-around; */


    .subcontainer {
  
      justify-content: space-around;
      width: 80%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;

        .card {
          background-color: #fff;
          /* margin: 1rem 0 1rem 0; */
          
          /* min-width: 20rem; */
          max-width: calc(49% - 1rem);
          /* margin-left: 0.5rem; */
          /* margin-right: 0.5rem; */
          box-shadow: 0px 0px 5px #aaa;
          .h2 {
            color: red;
            font-size: 2rem;
            padding: .5rem .5rem 0 .5rem;
          }
          .paragrafo {
            font-size: 1.25rem;
            text-align: justify;
            padding: 1rem;
          }
          .image {
            padding-right: 1rem;
            max-width: 60%;
            float: left;
          }
        }
      }
  
    .aside {
      display: inline-block;
      min-width: 20%;
      max-width: 20%;
      /* padding-left: 5%; */
      /* padding-right: 5%; */
      .card_aside {
        background-color: #ffffff;
        display: inline-block;
        /* margin: 1rem 0 1rem 0; */
        /* min-width: 25rem; */
        /* padding-left: 5%; */
        /* padding-right: 5%; */
        max-width: 100%;
        box-shadow: 0px 0px 5px #aaa;
        .h2_aside {
          color: red;
          font-size: 2rem;
          text-align: center;
        }
        .paragrafo_aside {
          text-align: justify;
          font-size: 1.2rem;
          padding: 0 1rem 1rem 1rem;
        }
        .image_aside {
          /* padding-right: 1rem; */
          max-width: 30%;
          float: left;
        }
      }
    }

    @media screen and (max-width: 1400px){
      .subcontainer {
        padding-top: 1%;
      width: 96%;
        .card {
        min-width: 90%;
        max-width: 90%;
        }
      }
      .aside {
      min-width: 90%;
      max-width: 90%;
      padding-left: 3%;
        .card_aside {

          max-width: 96%;
        }
      }
    }
    
    @media screen and (max-width: 991px){
    .subcontainer {
      padding-top: 3%;
      width: 96%;
        .card {
        min-width: 90%;
        max-width: 90%;
      }
    }
    
    .aside {
      min-width: 90%;
      max-width: 90%;
      padding-left: 3%;
      .card_aside {

        max-width: 96%;
      }
    }
  }
  }
  
  
  

`;