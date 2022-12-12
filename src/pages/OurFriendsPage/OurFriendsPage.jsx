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
  Title,
  Time,
  TimeClick,
  TimeBlock,
  TimeList,TimeItem,
} from './OurFriendsPage.styled';

const OurFriendsPage = () => {
const { data, error, isFetching }= useGetFriendsQuery();
  const [friends, setFriends] = useState([]);
  const [id, setId] = useState(false);
  const [show, setShow] = useState(false);

  let workT = [];

  const addWorkTime = (workDays) => {
    workT = []
    if (workDays.length === 0) {
      return false
    }
    // eslint-disable-next-line array-callback-return
    workDays.map((item) => {
      if (item.isOpen === false) {
        // eslint-disable-next-line array-callback-return
        const time=null
   workT.push(time)
      } else {
          const time = `${item.from}-${item.to}`
      if (time) {
   workT.push(time);
      }}
    })
  }

    useEffect(() => {
        if (!data) {
      return
        }
    setFriends(data.data.friends)
    }, [data,show,id]);

  const showTime = (id) => {
    setId(id)
    setShow(!show)
  }

    return (
        <>
          <Title>Our friends</Title>

            {isFetching && (
                <Loading/>
            )}

            {friends && (
              <FriendsThumb>

                {friends.map(({ _id, imageUrl, title, workDays, address, email, phone }) => (

                  <Container key={_id}>
                    <FriendTitle>{title}</FriendTitle>

                      <CardThumb>
                      <FirstThumb>
                        {imageUrl &&<Image src={imageUrl} alt={`${title} img`} />}

                        </FirstThumb>

                        <SecondThumb>

                          <ul>
                          <Item >
                            <TimeClick onClick={()=>showTime(_id)} className={show&& 'show'} >Time: <br />
                              <div className='time'>
                                {
                                  workDays ?(<span>{addWorkTime(workDays)}  { workT.find(el=>el !== null)}</span>) : (<span>----------</span>)
                                }
                              </div>
                            </TimeClick>
                            <TimeList className={id===_id&&show&& 'show'} >
                              <TimeItem>{workDays ? <TimeBlock><Time>MN</Time>{workT[0] ? <Time>{workT[0]}</Time> : <Time>-------------</Time>}  </TimeBlock> : <li><TimeBlock><Time>MN</Time> <Time>-------------</Time></TimeBlock>   </li>}</TimeItem>
                              <TimeItem>{workDays ? <TimeBlock><Time>TU</Time>{workT[1] ? <Time>{workT[1]}</Time> : <Time>-------------</Time>}  </TimeBlock> : <li><TimeBlock><Time>TU</Time><Time>-------------</Time></TimeBlock>  </li>}</TimeItem>
                              <TimeItem>{workDays ? <TimeBlock><Time>WE</Time>{workT[2] ? <Time>{workT[2]}</Time> : <Time>-------------</Time>}  </TimeBlock> : <li><TimeBlock><Time>WE</Time><Time>-------------</Time></TimeBlock>  </li>}</TimeItem>
                              <TimeItem>{workDays ? <TimeBlock><Time>TH</Time>{workT[3] ? <Time>{workT[3]}</Time> : <Time>-------------</Time>}  </TimeBlock> : <li><TimeBlock><Time>TH</Time><Time>-------------</Time></TimeBlock> </li>}</TimeItem>
                              <TimeItem>{workDays ? <TimeBlock><Time>FR</Time>{workT[4] ? <Time>{workT[4]}</Time> : <Time>-------------</Time>}  </TimeBlock> : <li><TimeBlock><Time>FR</Time><Time>-------------</Time></TimeBlock> </li>}</TimeItem>
                              <TimeItem>{workDays ? <TimeBlock><Time>SA</Time>{workT[5] ? <Time>{workT[5]}</Time> : <Time>-------------</Time>}  </TimeBlock> : <li><TimeBlock><Time>SA</Time><Time>-------------</Time></TimeBlock> </li>}</TimeItem>
                              <TimeItem>{workDays ? <TimeBlock><Time>SU</Time>{workT[6] ? <Time>{workT[6]}</Time> : <Time>-------------</Time>}  </TimeBlock> : <li><TimeBlock><Time>SU</Time><Time>-------------</Time></TimeBlock> </li>}</TimeItem>
                                </TimeList>
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
