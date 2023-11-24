import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AskHelp from './AskHelp';

export default function Home() {
    const navigate = useNavigate();
  
    useEffect(() => {
      if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
        navigate('/login');
      }
    }, []);
  
    const logout = () => {
      localStorage.clear();
      navigate('/login');
    };
  
    return (
      <>
        <Container>
          <TopSection>
            {/* Image */}
            <UserImage
              src="img.jpeg" // Replace with the actual path to your image
              alt="User Image"
              style={{ width: '100px', height: '100px', borderRadius: '50%' }}
            />
  
            {/* User Information */}
            <UserInfo>
              <p>Name: Abhishek Singh</p>
              <p>Email: abhishekzobin@gmail.com</p>
              <p>Address: Hall 3, NIT Durgapur</p>
              <button onClick={logout}>Logout</button>
            </UserInfo>
          </TopSection>
  
          {/* Login Form */}
          <Help>
          <AskHelp/>
          </Help>
          
          {/* Logout Button */}
          {/* <button onClick={logout}>Logout</button> */}
        </Container>
      </>
    );
  }
  const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-between; /* Align children at the ends */
  align-items: center;
  background-color: #5151b5;
  padding: 20px;

//   button {
//     background-color: #4e0eff;
//     color: white;
//     padding: 1rem 2rem;
//     border: none;
//     font-weight: bold;
//     cursor: pointer;
//     border-radius: 0.4rem;
//     font-size: 1rem;
//     text-transform: uppercase;
//   }
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const UserImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: 20px;
  margin-left: 40px;
`;

const UserInfo = styled.div`
  margin-left: 20px;
  color: white;

  button {
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
  }
`;

const Help = styled.div`
width: 800px;
  flex: 1; /* Take up remaining space */
  margin-left: 20px; /* Adjust margin as needed */
`;




