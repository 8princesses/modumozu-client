import kbLogo from "../../public/images/logo/01_kb.svg";
import kiwoomLogo from "../../public/images/logo/02_kiwoom.svg";
import yuantaLogo from "../../public/images/logo/03_yuanta.svg";
import daishinLogo from "../../public/images/logo/04_daishin.svg";
import miraeLogo from "../../public/images/logo/05_mirae.svg";
import samsumgLogo from "../../public/images/logo/06_samsung.svg";
import hangookLogo from "../../public/images/logo/07_hangook.svg";
import shinhanLogo from "../../public/images/logo/08_shinhan.svg";
import nhLogo from "../../public/images/logo/09_nh.svg";
import skLogo from "../../public/images/logo/10_sk.svg";
import hanhwaLogo from "../../public/images/logo/11_hanhwa.svg";
import hanaLogo from "../../public/images/logo/12_hana.svg";
import yoojinLogo from "../../public/images/logo/13_yoojin.svg";
import ibkLogo from "../../public/images/logo/14_ibk.svg";
import kyoboLogo from "../../public/images/logo/15_kyobo.svg";
import hiLogo from "../../public/images/logo/16_hi.svg";
import daolLogo from "../../public/images/logo/17_daol.svg";
import hyundaiLogo from "../../public/images/logo/18_hyundai.svg";
import shinyoungLogo from "../../public/images/logo/19_shinyoung.svg";
import dbLogo from "../../public/images/logo/20_db.svg";
import boogookLogo from "../../public/images/logo/21_boogook.svg";
import capeLogo from "../../public/images/logo/22_cape.svg";
import sangsangLogo from "../../public/images/logo/23_sangsang.svg";

const getInvestmentBankLogo = (id: number) => {
  const logoMap = new Map([
    [1, kbLogo],
    [2, kiwoomLogo],
    [3, yuantaLogo],
    [4, daishinLogo],
    [5, miraeLogo],
    [6, samsumgLogo],
    [7, hangookLogo],
    [8, shinhanLogo],
    [9, nhLogo],
    [10, skLogo],
    [11, hanhwaLogo],
    [12, hanaLogo],
    [13, yoojinLogo],
    [14, ibkLogo],
    [15, kyoboLogo],
    [16, hiLogo],
    [17, daolLogo],
    [18, hyundaiLogo],
    [19, shinyoungLogo],
    [20, dbLogo],
    [21, boogookLogo],
    [22, capeLogo],
    [23, sangsangLogo],
  ]);

  return logoMap.get(id) ?? nhLogo;
};

export default getInvestmentBankLogo;
