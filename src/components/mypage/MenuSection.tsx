import styled from "styled-components";
import MenuList from "./MenuList";
import colors from "@/styles/colors";

const MenuSection = () => {
  return (
    <SectionWrapper>
      <div>
        <MenuList
          menuName="FAQ"
          handleClick={() => {
            console.log("click");
          }}
        />
        <MenuList
          menuName="로그아웃"
          handleClick={() => {
            console.log("click");
          }}
        />
        <MenuList
          menuName="탈퇴하기"
          handleClick={() => {
            console.log("click");
          }}
        />
      </div>
      <div>
        <MenuList
          menuName="개인정보 처리 방침"
          handleClick={() => {
            console.log("click");
          }}
        />
        <MenuList
          menuName="서비스 이용 동의"
          handleClick={() => {
            console.log("click");
          }}
        />
      </div>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  height: 100%;
  background-color: ${colors.GRAY[1]};

  div {
    padding-top: 12px;
  }
`;

export default MenuSection;
