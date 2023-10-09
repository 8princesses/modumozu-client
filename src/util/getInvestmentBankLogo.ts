import nhLogo from "../../public/images/nh_logo.png";
import hanhwaLogo from "../../public/images/hanhwa_logo.png";
import hyundaiLogo from "../../public/images/hyundai_logo.png";
import kbLogo from "../../public/images/kb_logo.png";
import ibkLogo from "../../public/images/ibk_logo.png";
import skLogo from "../../public/images/sk_logo.png";
import yuantaLogo from "../../public/images/yuanta_logo.png";

// TODO : 로고 추가
const getInvestmentBankLogo = (id: number) => {
  const logoMap = new Map([
    [1, kbLogo],
    [2, kbLogo],
    [3, yuantaLogo],
    [4, kbLogo],
    [5, kbLogo],
    [6, kbLogo],
    [7, kbLogo],
    [8, kbLogo],
    [9, nhLogo],
    [10, skLogo],
    [11, hanhwaLogo],
    [12, kbLogo],
    [13, kbLogo],
    [14, ibkLogo],
    [15, kbLogo],
    [16, kbLogo],
    [17, kbLogo],
    [18, hyundaiLogo],
    [19, kbLogo],
    [20, kbLogo],
    [21, kbLogo],
    [22, kbLogo],
    [23, kbLogo],
  ]);

  return logoMap.get(id) ?? nhLogo;
};

export default getInvestmentBankLogo;
