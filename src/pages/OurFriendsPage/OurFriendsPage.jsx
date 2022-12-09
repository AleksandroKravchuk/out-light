import { useEffect, useState } from 'react';
import Loading from 'components/Loading/Loading';
import Error from '../../components/error/error';
import {
  useGetFriendsQuery
} from 'redux/auth/authOperations';
import {
  Anchor,
  CardThumb,
  Container,
  FirstThumb,
  FriendsThumb,
  FriendTitle,
  Image,
  Item,
  SecondThumb,
  Title
} from './OurFriendsPage.styled';

const OurFriendsPage = () => {
const { data, error, isFetching }= useGetFriendsQuery();
const [friends, setFriends] = useState([]);


    useEffect(() => {
        if (!data) {
      return
    }
    setFriends(data.data.friends)
    }, [data]);

    return (
        <>
          <Title>Our friends</Title>

            {isFetching && (
                <Loading/>
            )}

            {friends && (
              <FriendsThumb>

                {friends.map(({ _id, imageUrl, title, time, address, email, phone }) => (

                  <Container key={_id}>
                    <FriendTitle>{title}</FriendTitle>

                      <CardThumb>
                        <FirstThumb>
                          <Image src={imageUrl} alt={`${title} img`} />
                        </FirstThumb>

                        <SecondThumb>

                          <ul>
                            <Item >Time: <br />
                              <div className='time'>
                                {
                                  time ? (<span>{time}</span>) : (<span>----------</span>)
                                }
                              </div>
                            </Item>

                            <Item>Adress:<br />
                              {
                                address ? (<span>{address}</span>) : (<span>----------</span>)
                              }
                            </Item>

                            <Item>Email:<br />
                              {
                                email ? (<Anchor href={`mailto:${email}`}>{email}</Anchor>) : (<span>----------</span>)
                              }
                            </Item>

                            <Item>Phone:<br />
                              {
                                phone ? (<Anchor href={`tel:${phone}`}>{phone}</Anchor>) : (<span>----------</span>)
                              }
                            </Item>
                          </ul>

                        </SecondThumb>
                      </CardThumb>
                    </Container>
                  ))
                }

              </FriendsThumb>
            )}

            {error && <Error/>}
    </>
    )
}

export default OurFriendsPage;
