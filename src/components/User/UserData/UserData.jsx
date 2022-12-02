import PropTypes from 'prop-types';
import { useEffect, useState, useRef } from 'react';
import {
  useGetUserInfoQuery,
  useUpdateAvatarMutation,
} from 'redux/auth/authOperations';
import { UserDataItem } from 'components/User/UserDataItem/UserDataItem';
import editPhoto from 'icons/editPhoto.svg';
import { Avatar, EditPhotoBtn, ImgUser, UserInfo } from './UserData.styled';
import { useSelector } from 'react-redux';

export const UserData = () => {
    const {data, getUserInfo } = useGetUserInfoQuery();
  const [updateAvatar] = useUpdateAvatarMutation();
  const [file, setFile] = useState({});
  const [user, setUser] = useState({});
  const inputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);


  useEffect(() => {
    if (!data) {
      return
    }
    setUser(data.data.user)
},[data])


  const handleChange = evt => {
    if (!evt.target.files) {
      return;
    }
    setSelectedFile(evt.target.files[0]);
    // console.log(evt.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const formData = new FormData();
    formData.append('File', selectedFile);

  }

  const { logo, name } = user;
  return (
    <UserInfo>
      <Avatar>
        <ImgUser src={user.logo} alt={name} />
        <form encType="multipart/form-data" onSubmit={handleSubmit}>
          <input
            type="file"
            ref={inputRef}
            multiple
            onChange={handleChange}
            style={{ display: 'none' }}
          />
          <EditPhotoBtn onClick={() => inputRef.current?.click()}>
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
