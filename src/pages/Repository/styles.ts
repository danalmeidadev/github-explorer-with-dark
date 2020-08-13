import styled from 'styled-components';

export const Container = styled.section`
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;

  .header {
    a {
      &:hover {
        svg {
          transition: 400ms ease-out;
          transform: translateX(-10px);
        }
      }
    }
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.colors.text};
    transition: transform 400ms ease-out;
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;
  }
  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
  div {
    margin-left: 24px;

    strong {
      font-size: 36px;
      color: ${(props) => props.theme.colors.text};
    }
    p {
      color: ${(props) => props.theme.colors.text};
      font-size: 18px;
      margin-top: 4px;
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: ${(props) => props.theme.colors.text};
      }
      span {
        display: block;
        margin-top: 4px;
        color: ${(props) => props.theme.colors.text};
      }
    }
  }
`;

export const Issues = styled.article`
  margin-top: 80px;

  a {
    background-color: white;
    border-radius: 5px;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 300ms;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }
  }

  div {
    margin: 0 16px;
    flex: 1;

    strong {
      font-size: 20px;
      color: ${(props) => props.theme.colors.secundary};
    }

    p {
      font-size: 18px;
      color: ${(props) => props.theme.colors.secundary};
      margin-top: 4px;
    }
  }

  svg {
    margin-left: auto;
    color: ${(props) => props.theme.colors.secundary};
  }
`;
