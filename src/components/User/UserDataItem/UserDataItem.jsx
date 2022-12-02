import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import edit from 'icons/edit.svg';
import done from 'icons/done.svg';
import { useUpdateUserInfoMutation } from 'redux/auth/authOperations';
import {
  UserInfoList,
  UserInfoItem,
  UserInfoText,
  UserInfoBtn,
  UserInfoData,
  FormUpdate,
  InputUpdate,
} from './UserDataItem.styled';

export const UserDataItem = ({ user }) => {
  const [updateUserInfo] =useUpdateUserInfoMutation()
  const { name, email, birthday, phone, city } = user;
  const [updateEmail, setUpdateEmail] = useState(false);
  const [updateName, setUpdateName] = useState(false);
  const [updateBirthday, setUpdateBirthday] = useState(false);
  const [updateCity, setUpdateCity] = useState(false);
  const [updatePhone, setUpdatePhone] = useState(false);
  const [nameUser, setNameUser] = useState('');
  const [emailUser, setEmailUser] = useState('');
  const [birthdayUser, setBirthdayUser] = useState('');
  const [phoneUser, setPhoneUser] = useState('');
  const [cityUser, setCityUser] = useState('');

  useEffect(() => {
    setNameUser(name);
    setEmailUser(email);
    setBirthdayUser(birthday);
    setCityUser(city);
    setPhoneUser(phone);
},[birthday,name,city,phone,email])

  const handleUpdateName = evt => {
    setUpdateName(!updateName);
  };
  const handleUpdateEmail= evt => {
    setUpdateEmail(!updateEmail);
  };
   const handleUpdateBirthday= evt => {
    setUpdateBirthday(!updateBirthday);
  };
  const handleUpdateCity= evt => {
    setUpdateCity(!updateCity);
  };
    const handleUpdatePhone= evt => {
    setUpdatePhone(!updatePhone);
  };
  const handleChangeValue = evt => {
    const { name, value } = evt.currentTarget;
    switch (name) {
      case 'nameUser':
        setNameUser(value);
        break;

      case 'emailUser':
        setEmailUser(value);
        break;

      case 'birthdayUser':
        setBirthdayUser(value);
        break;

      case 'phoneUser':
        setPhoneUser(value);
        break;

      case 'cityUser':
        setCityUser(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const updateUserValue = {
      name: nameUser,
      email: emailUser,
      birthday: birthdayUser,
      phone: phoneUser,
      city: cityUser,
    };

updateUserInfo(updateUserValue )
    setUpdateEmail(!updateEmail);
    setUpdateName(!updateName);
    setUpdateBirthday(!updateBirthday);
    setUpdateCity(!updateCity);
     setUpdatePhone(!updatePhone);
  };

  return (
    <UserInfoList>
      {}
      <UserInfoItem>
        <UserInfoText>Name:</UserInfoText>
        {!updateName? (
          <>
            <UserInfoData>{nameUser}</UserInfoData>
            <UserInfoBtn type="button" onClick={handleUpdateName}>
              <img src={edit} alt="edit information about user" />
            </UserInfoBtn>
          </>
        ) : (
          <>
            <FormUpdate encType="multipart/form-data" onSubmit={handleSubmit}>
              <InputUpdate
                type="text"
                name="nameUser"
                value={nameUser}
                onChange={handleChangeValue}
              />
            </FormUpdate>
            <UserInfoBtn type="button" onClick={handleUpdateName}>
              <img src={done} alt="update information about user" />
            </UserInfoBtn>
          </>
        )}
      </UserInfoItem>

      <UserInfoItem>
        <UserInfoText>Email:</UserInfoText>
        {!updateEmail ? (
          <>
            <UserInfoData>{emailUser}</UserInfoData>
            <UserInfoBtn
              type="button"
              onClick={handleUpdateEmail}
              isActive="true"
            >
              <img src={edit} alt="edit information about user" />
            </UserInfoBtn>
          </>
        ) : (
          <>
            <FormUpdate onSubmit={handleSubmit}>
              <InputUpdate
                type="text"
                name="emailUser"
                value={emailUser}
                onChange={handleChangeValue}
              />
            </FormUpdate>
            <UserInfoBtn type="button" onClick={handleUpdateEmail}>
              <img src={done} alt="update information about user" />
            </UserInfoBtn>
          </>
        )}
      </UserInfoItem>

      <UserInfoItem>
        <UserInfoText>Birthday:</UserInfoText>
        {!updateBirthday ? (
          <>
            <UserInfoData>{birthdayUser}</UserInfoData>
            <UserInfoBtn type="button" onClick={handleUpdateBirthday}>
              <img src={edit} alt="edit information about user" />
            </UserInfoBtn>
          </>
        ) : (
          <>
            <FormUpdate onSubmit={handleSubmit}>
              <InputUpdate
                type="text"
                name="birthdayUser"
                value={birthdayUser}
                onChange={handleChangeValue}
              />
            </FormUpdate>
            <UserInfoBtn type="button" onClick={handleUpdateBirthday}>
              <img src={done} alt="update information about user" />
            </UserInfoBtn>
          </>
        )}
      </UserInfoItem>

      <UserInfoItem>
        <UserInfoText>Phone:</UserInfoText>
        {!updatePhone ? (
          <>
            <UserInfoData>{phoneUser}</UserInfoData>
            <UserInfoBtn type="button" onClick={handleUpdatePhone}>
              <img src={edit} alt="edit information about user" />
            </UserInfoBtn>
          </>
        ) : (
          <>
            <FormUpdate onSubmit={handleSubmit}>
              <InputUpdate
                type="text"
                name="phoneUser"
                value={phoneUser}
                onChange={handleChangeValue}
              />
            </FormUpdate>
            <UserInfoBtn type="button" onClick={handleUpdatePhone}>
              <img src={done} alt="update information about user" />
            </UserInfoBtn>
          </>
        )}
      </UserInfoItem>

      <UserInfoItem>
        <UserInfoText>City:</UserInfoText>
        {!updateCity ? (
          <>
            <UserInfoData>{cityUser}</UserInfoData>
            <UserInfoBtn type="button" onClick={handleUpdateCity}>
              <img src={edit} alt="edit information about user" />
            </UserInfoBtn>
          </>
        ) : (
          <>
            <FormUpdate onSubmit={handleSubmit}>
              <InputUpdate
                type="text"
                name="cityUser"
                value={cityUser}
                onChange={handleChangeValue}
              />
            </FormUpdate>
            <UserInfoBtn type="button" onClick={handleUpdateCity}>
              <img src={done} alt="update information about user" />
            </UserInfoBtn>
          </>
        )}
      </UserInfoItem>
    </UserInfoList>
  );
};

UserDataItem.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  birthday: PropTypes.string,
  phone: PropTypes.string,
  city: PropTypes.string,
};
