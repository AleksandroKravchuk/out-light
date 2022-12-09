import PropTypes from 'prop-types';
import { useEffect, useState, useRef } from 'react';
import {
  useGetUserInfoQuery,
  useUpdateAvatarMutation,
} from 'redux/auth/authOperations';
import { UserDataItem } from 'components/User/UserDataItem/UserDataItem';
import editPhoto from 'icons/editPhoto.svg';
import { Avatar, EditPhotoBtn, ImgUser, UserInfo } from './UserData.styled';


export const UserData = () => {
  const {data} = useGetUserInfoQuery();
  const [updateAvatar] = useUpdateAvatarMutation();
  const [file, setFile] = useState(false);
  const [user, setUser] = useState('');
  const inputRef = useRef(null);


  useEffect(() => {
    if (!data && !file) {
      return
    }
    setUser(data.data.user)
  }, [data, file])

  const handleChange = evt => {
    evt.preventDefault();
       const formData = new FormData();
    formData.append('avatar', evt.target.files[0]);
      updateAvatar(formData)
      setFile(true)


  };
const { logo, name ,avatar} = user;
  return (
    <UserInfo>
      <Avatar>

{ user.logo ?  <ImgUser src={logo} alt={name} />:<ImgUser src={avatar} alt={name} />}
        <form encType="multipart/form-data" onSubmit={handleChange}>

          <EditPhotoBtn type="button">
             <input
            type="file"
            ref={inputRef}
            multiple
            onChange={handleChange}
            style={{ display: 'none' }}
          />
            <img src={editPhoto} alt="addPet" />
            Edit photo
          </EditPhotoBtn>
        </form>
      </Avatar>
      <UserDataItem user={user} />
    </UserInfo>
  );
};

UserDataItem.propTypes = {
  name: PropTypes.string,
  logo: PropTypes.string,
};
