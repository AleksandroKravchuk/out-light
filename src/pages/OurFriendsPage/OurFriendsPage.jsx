import { useEffect, useState } from 'react';
import Loading from 'components/Loading/Loading';
import Error from '../../components/error/error';
import ModalFriends from 'components/ModalFriends/Modal';
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
  TimeClick,
  // TimeBlock,
  TimeList,TimeItem,
} from './OurFriendsPage.styled';

const OurFriendsPage = () => {
const { data, error, isFetching }= useGetFriendsQuery();
  const [friends, setFriends] = useState([]);
    // const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);
    // const toggleModal = evt => {
    //     setShowModal(!showModal);
    // }
  let workT = '';
  const workTime = (workDays) => {
    // eslint-disable-next-line array-callback-return
    workDays.map((item) => {
      if (!item.isOpen) {
        // eslint-disable-next-line array-callback-return
        return
      }
      const time = `${item.from}-${item.to}`
      if (time) {
        workT = time;
        return workT;

}

  })
  }

    useEffect(() => {
        if (!data) {
      return
        }
      // console.log(data.data.friends[0])
    setFriends(data.data.friends)
    }, [data]);
  // console.log(show)
console.log(friends)
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
{/* onClick={()=>setShow(!show)} className={show && 'show'} */}
                          <ul>
                          <Item >
                            <TimeClick onClick={()=>setShow(!show)} className={show && 'show'} >Time: <br />
                              <div className='time'>
                                {
                                workDays ? (<span>{workTime(workDays) } {workT}</span>) : (<span>----------</span>)
                                }
                              </div>




                            </TimeClick>

                            <TimeList className={show && 'show'} >

                                {workDays ?<TimeItem><span>MN</span> <span>{ workT}</span></TimeItem> :<li><span>MN</span> <span>-------</span> </li>}
                                {workDays &&<li><span>TU</span> <span>{ workT}</span></li>}
                                {workDays &&<li><span>WE</span> <span>{ workT}</span></li>}
                                {workDays &&<li><span>TH</span> <span>{ workT}</span></li>}
                                {workDays &&<li><span>FR</span> <span>{ workT}</span></li>}
                                {workDays && <li><span>SA</span> <span>{workT} </span></li>}
                               {workDays &&<li><span>SU</span> <span>{ workT}</span></li>}
                                </TimeList>

                                 {/* {showModal && (
                              <ModalFriends onClose={toggleModal}>
                                <TimeList>
                                {workDays ?<li><span>MN</span> <span>{ workT}</span> </li>:<li><span>MN</span> <span>-------</span> </li>}
                                {workDays &&<li><span>TU</span> <span>{ workT}</span></li>}
                                {workDays &&<li><span>WE</span> <span>{ workT}</span></li>}
                                {workDays &&<li><span>TH</span> <span>{ workT}</span></li>}
                                {workDays &&<li><span>FR</span> <span>{ workT}</span></li>}
                                {workDays && <li><span>SA</span> <span>{workT} </span></li>}
                               {workDays &&<li><span>SU</span> <span>{ workT}</span></li>}
                                </TimeList>
                              </ModalFriends>
      )} */}
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
