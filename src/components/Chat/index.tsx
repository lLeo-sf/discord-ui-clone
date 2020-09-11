import React from 'react';

import { Container, UserPic, Message, Area, Line, Info, Mensagens, New} from './styles';

import { FaPlus } from 'react-icons/fa';


import PicUser from '../../assets/user.png';

const Chat: React.FC = () => {
    return (
        <Container>
            <UserPic src={PicUser} alt="username" />
          
            <Message>
                Este é o começo do seu histórico de mensagens diretas com @username
            </Message>
            <th className="line"></th>
            <Area>
                <Line>
                    <Info>
                        <img src={PicUser} alt="Username" className="PicUser" />
                        <span className="Username">Username</span>
                        <span className="Date">xx/xx/xxxx</span>
                    </Info>
                    <Mensagens>
                        <span>
                             Lorem Ipsum é simplesmente uma simulação de texto<br/> da indústria tipográfica e de impressos
                        </span>
                    </Mensagens>
                    <Mensagens>
                        <span>
                             Lorem Ipsum é simplesmente uma simulação de texto<br/> da indústria tipográfica e de impressos
                        </span>
                    </Mensagens>
                </Line>
                <Line>
                    <Info>
                        <img src={PicUser} alt="Username" className="PicUser" />
                        <span className="Username">Username</span>
                        <span className="Date">xx/xx/xxxx</span>
                    </Info>
                    <Mensagens>
                        <span>
                             Lorem Ipsum é simplesmente uma simulação de texto<br/> da indústria tipográfica e de impressos
                        </span>
                    </Mensagens>
                    <Mensagens>
                        <span>
                             Lorem Ipsum é simplesmente uma simulação de texto<br/> da indústria tipográfica e de impressos
                        </span>
                    </Mensagens>
                </Line>
                <Line>
                    <Info>
                        <img src={PicUser} alt="Username" className="PicUser" />
                        <span className="Username">Username</span>
                        <span className="Date">xx/xx/xxxx</span>
                    </Info>
                    <Mensagens>
                        <span>
                             Lorem Ipsum é simplesmente uma simulação de texto<br/> da indústria tipográfica e de impressos
                        </span>
                    </Mensagens>
                    <Mensagens>
                        <span>
                             Lorem Ipsum é simplesmente uma simulação de texto<br/> da indústria tipográfica e de impressos
                        </span>
                    </Mensagens>
                </Line>
                
                <New placeholder='Conversar com @username' />

            </Area>
        </Container>
    )
}

export default Chat;