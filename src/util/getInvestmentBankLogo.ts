import nhLogo from "../../public/images/nh_logo.png"
import hanhwaLogo from "../../public/images/hanhwa_logo.png"
import hyundaiLogo from "../../public/images/hyundai_logo.png"
import kbLogo from "../../public/images/kb_logo.png"
import ibkLogo from "../../public/images/ibk_logo.png"
import skLogo from "../../public/images/sk_logo.png"
import yuantaLogo from "../../public/images/yuanta_logo.png"

// TODO: 증권사 ID 정해지면 name -> id 로 변경
// TODO: 전체 증권사 이미지 저장하기
const getInvestmentBankLogo = (name: string) => {
  const logoMap = new Map([
    ["NH투자증권", nhLogo],
    ["한화투자증권", hanhwaLogo],
    ["현대차증권", hyundaiLogo],
    ["KB증권", kbLogo],
    ["IBK투자증권", ibkLogo],
    ["SK증권", skLogo],
    ["유안타증권", yuantaLogo],
  ]);

  return logoMap.get(name) ?? nhLogo;
}

export default getInvestmentBankLogo;