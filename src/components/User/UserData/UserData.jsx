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
  const BASE_URL='https://team-api-server-outlight.onrender.com'
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
const { logo, name } = user;
  let avatar;
  const addLogo =async () => {
    if (user) {
    avatar = await logo.slice(0, 4);
return avatar
}
  }

  return (
    <UserInfo>
      <Avatar>

        { addLogo()==="http"?   <ImgUser src={`${logo}`} alt={name} />: <ImgUser src={`${BASE_URL}/${logo}`} alt={name} />}


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
