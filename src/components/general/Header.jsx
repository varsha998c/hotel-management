import { React, Link } from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { BiGlobe } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

function Header() {
    return (
        <>
            <Container>
                <Section className="wrapper">
                    <Left>
                        <LogoContainer>
                            <a href="#" target="_blank">
                                <Img
                                    src={require("../../assets/images/Airbnb_Logo_Bélo.png")}
                                    alt="logo"
                                />
                            </a>
                        </LogoContainer>
                    </Left>
                    <Middle>
                        <Div>
                            {/* <Button>
                                <Span>Anywhere</Span>
                            </Button>
                            <Button>
                                <Span>Any Week</Span>
                            </Button> */}
                            <input type="text" id="name" name="name" />
                            <Button className="search">
                                <Span className="search">
                                    {/* Add guests{" "} */}
                                    <Icon>
                                        <FiSearch />
                                    </Icon>
                                </Span>
                            </Button>
                        </Div>
                    </Middle>
                    <Right>
                        <Nav>
                            <LeftContainer>
                                <a href="#">
                                    <Host>Become a host</Host>
                                </a>
                                <Glob>
                                    <Click>
                                        <BiGlobe />
                                    </Click>
                                </Glob>
                            </LeftContainer>
                            <RightContainer>
                                <Profile>
                                    <ProfleClick>
                                        <MenuBar>
                                            <BiMenu />
                                        </MenuBar>
                                        <ProfilePic>
                                            <CgProfile />
                                        </ProfilePic>
                                        <RedDot></RedDot>
                                    </ProfleClick>
                                </Profile>
                            </RightContainer>
                        </Nav>
                    </Right>
                </Section>
            </Container>
        </>
    );
}

export default Header;
const Container = styled.div`
    width: 100%;
    height: 100px;
    position: relative;
    &::after {
        content: "";
        border-bottom: 1px solid #ebebeb;
        position: absolute;
        bottom: 0;
        width: 100%;
    }
    /* background-color: green; */
    padding: 10px 0;
`;
const Section = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Left = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const LogoContainer = styled.div`
    width: 100px;
    a {
        outline: none;
        align-items: center;
        display: inline-flex;
        height: 79px;
        position: relative;
        vertical-align: middle;
        z-index: 1;
    }
`;
const Img = styled.img`
    width: 100%;
    display: block;
`;
const Middle = styled.div`
    width: 28%;
`;
const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    /* margin: 0 auto; */
    border: 1px solid #dddddd;
    border-radius: 30px;
    padding: 16px 12px;
    box-shadow: 0px 2px 9px -1px #dddddd;
    color: #222;
    font-size: 16px;
    font-weight: 500;
    input {
        outline: none;
        border: none;
    }
    input:hover {
        outline: none;
    }
    &:hover {
        box-shadow: 3px 2px 6px 3px #dddddd;
    }
`;
const Button = styled.a`
    cursor: pointer;
    width: 40px;
    background-color: transparent;
    border: none;
    color: #222222;
    text-align: center;
    border-right: 1px solid #000;
    &:last-child {
        border-right: none;
    }
    &.search {
        width: 50px;
    }
`;
const Span = styled.span`
    color: #222;
    font-size: 25px;
    font-weight: 600;

    &.search {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #828282;
        font-weight: 500;
    }
`;
const Icon = styled.div`
    width: 29px;
    color: #fff;
    border-radius: 50%;
    color: #000;
    /* background-color: #ff385c; */
    height: 29px;
    align-items: center;
    display: flex;
    justify-content: center;
    margin-left: 5px;
`;
const Right = styled.div`
    width: 33%;
    display: flex;
    justify-content: right;
`;
const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 63%;
`;
const LeftContainer = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 55%;
`;
const RightContainer = styled.div`
    width: 45%;
`;
const Host = styled.div`
    color: #222222;
    font-size: 14px;
    font-weight: 500;
    padding: 6px 10px;
    &:hover {
        background-color: #dddddd;
        border-radius: 20px;
        padding: 8px 10px;
    }
`;
const Glob = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 8px;
    &:hover {
        background-color: #dddddd;
        border-radius: 50%;
        padding: 6px 8px;
    }
`;
const Click = styled.div`
    font-size: 20px;
`;
const Profile = styled.div`
    border: 1px solid #e2e2e2;
    border-radius: 30px;
    width: 80px;
    padding: 4px 3px 4px 10px;
    margin-left: auto;
`;
const ProfleClick = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    cursor: pointer;
`;
const MenuBar = styled.div`
    font-size: 20px;
    margin-right: 10px;
`;
const ProfilePic = styled.div`
    font-size: 25px;
`;
const RedDot = styled.div`
    background-color: red;
    width: 10px;
    border-radius: 50%;
    height: 10px;
    position: absolute;
    right: 0;
    top: 0;
`;
