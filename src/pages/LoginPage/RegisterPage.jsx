import Notiflix from 'notiflix';
import { useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
// import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  useAddUserInfoMutation, useRegisterUserMutation
} from 'redux/auth/authOperations';
import MainContainer from "components/commonStyles/Container.styled";
import {
  Input,
  Title,
  Container,
  Form,
  Button,
  P,
  Span,
  ImageContainer,
  Section,
  EyeContainer,
  EyeSymbol,
  // BackBtn,
} from './LoginPage.styled';
// import {
//   BackBtn, Button, Container, EyeContainer,
//   EyeSymbol, FirstContainer, Form, ImageContainer, Input, P, Section, Span, Title
// } from './RegisterPage.styled';

const RegisterPage = () => {
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('+380');
  const [page, setPage] = useState(true);

  const navigate = useNavigate();

  // const isId = useSelector(state => state.auth.user.id);

  const [registerNewUser] = useRegisterUserMutation();
  // const [addUserInfo] = useAddUserInfoMutation();

  // To Hide/Show password
  const [showPassword, setshowPassword] = useState(false);
  // To Hide/Show confirm password
  const [showRePassword, setshowRePassword] = useState(false);

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'confirmedPassword':
        setConfirmedPassword(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'name':
        setName(value);
        break;
      case 'city':
        setCity(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        break;
    }
  };

  const createUser = async () => {
    const newUser = {
      email, password, name, city, phone
    };
    registerNewUser(newUser).then((err) => {
      // console.log(err)
      if (err.error){
        return Notiflix.Notify.failure(
          `${err.error.data.message}`
        );
      }
navigate('/user', { replace: true });
    })

  };


  const handleSubmit = async event => {
    event.preventDefault();
    if (email === '' || !email.includes('@')) {
      return Notiflix.Notify.failure('Please, enter a valid email!');
    }

    if (password === '' || password.includes(' ')) {
      return Notiflix.Notify.failure(
        'Please, enter a valid password without spaces!'
      );
    }
if (password.length <7) {
      return Notiflix.Notify.failure(
        'Password must be between 7 and 32 characters long'
      );
    }
    if (confirmedPassword !== password || confirmedPassword === '') {
      return Notiflix.Notify.failure('Passwords do not match!');
    }
    setPage(false);
  };
  // const addUser = async () => {
  //   const addInfo = { email,password,name, city, phone };

  //   await addUserInfo(addInfo);
  // };
  const handlePatchSubmit = event => {
    event.preventDefault();
    if (!/^[a-zA-Z]{2,30}/g.test(name)) {
      return Notiflix.Notify.info('Name may only include letters');
    }
    if (name === '') {
      return Notiflix.Notify.failure('Please, enter your name');
    }

    if (city === '') {
      return Notiflix.Notify.failure('Please, enter your city and region ');
    }
    if (!/^(([a-zA-Z ](,)?)*)+$/g.test(city)) {
      return Notiflix.Notify.info(
        'Please, enter your city and region separated by comma and without spaces'
      );
    }
    if (phone === '') {
      return Notiflix.Notify.failure('Please, enter your phone number');
    }
    if (!/^[+0-9]{13}$/g.test(phone)) {
      return Notiflix.Notify.info(
        'Your phone number must start with + and consist of 12 numbers'
      );
    }
    createUser();
    // navigate('/user', { replace: true });
  };

  return (
    <>
      <MainContainer>
 <Section>
        <ImageContainer>
          {page  && (
            <Container>
              <Title>Registration</Title>

              <Form onSubmit={handleSubmit}>
                <div>
                  <Input
                    type="email"
                    name="email"
                    required
                    onChange={handleChange}
                    value={email}
                    placeholder="Email"
                  />
                </div>
                <EyeContainer>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    onChange={handleChange}
                    value={password}
                    placeholder="Password"
                    // pattern="[^\s]"
                    minlength="7"
                    maxlength="32"
                    required
                  />
                  <EyeSymbol
                    onClick={() => setshowPassword(prevState => !prevState)}
                  >
                    {showPassword ? <BsEye /> : <BsEyeSlash />}
                  </EyeSymbol>
                </EyeContainer>
                <EyeContainer>
                  <Input
                    type={showRePassword ? 'text' : 'password'}
                    name="confirmedPassword"
                    placeholder="Confirm password"
                    onChange={handleChange}
                    value={confirmedPassword}
                  />
                  <EyeSymbol
                    onClick={() => setshowRePassword(prevState => !prevState)}
                  >
                    {showRePassword ? <BsEye /> : <BsEyeSlash />}
                  </EyeSymbol>
                </EyeContainer>
                <ul>
                  <li>
                    <Button type="submit" >
                      {page ? 'Next' : 'Register'}
                    </Button>
                  </li>

                  {/* {!page && (
                    <li>
                      <BackBtn onClick={() => setPage(true)}>Back</BackBtn>
                    </li>
                  )} */}
                  <li>
                    <P>
                      Already have an account?
                      <Link to={`/login`} state={{ from: location }}>
                        <Span>Login </Span>
                      </Link>
                    </P>
                  </li>
                </ul>
              </Form>
            </Container>
          )}
          {!page && (
            <Container>
              <Title>Registration</Title>

              <Form onSubmit={handlePatchSubmit}>
                <Input
                  name="name"
                  type="text"
                  onChange={handleChange}
                  value={name}
                  placeholder="Name"
                />
                <Input
                  name="city"
                  type="text"
                  onChange={handleChange}
                  value={city}
                  placeholder="City, region"
                />
                <Input
                  name="phone"
                  type="tel"
                  onChange={handleChange}
                  value={phone}
                  placeholder="Mobile phone"
                />
                <ul>
                  <li>
                    <Button onClick={handlePatchSubmit}>
                      {page ? 'Next' : 'Register'}
                    </Button>
                  </li>
                  {!page&& (
                    <li>
                      <Button onClick={() => setPage(page - 1)}>Back</Button>
                    </li>
                  )}
                  <li>
                    <P>
                      Already have an account?
                      <Link to={`/login`} state={{ from: location }}>
                        <Span>Login </Span>
                      </Link>
                    </P>
                  </li>
                </ul>
              </Form>
            </Container>
          )}
        </ImageContainer>
      </Section>

      </MainContainer>

    </>
  );
};

export default RegisterPage;
