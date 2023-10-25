const getStoreUrl = (agentId: number) => {
  const iosLink = new Map([
    [1, "https://apps.apple.com/kr/app/kb-m-able-kb%EC%A6%9D%EA%B6%8C%EC%9D%98-%EB%8C%80%ED%91%9C-mts/id350742701"],
    [
      2,
      "https://apps.apple.com/kr/app/%ED%82%A4%EC%9B%80%EC%A6%9D%EA%B6%8C-%EA%B3%84%EC%A2%8C%EA%B0%9C%EC%84%A4/id1094519693",
    ],
    [
      3,
      "https://apps.apple.com/kr/app/%EC%9C%A0%EC%95%88%ED%83%80%EC%A6%9D%EA%B6%8C-%ED%8B%B0%EB%A0%88%EC%9D%B4%EB%8D%94m-%EA%B3%84%EC%A2%8C%EA%B0%9C%EC%84%A4%EA%B2%B8%EC%9A%A9/id1092431083",
    ],
    [4, "https://apps.apple.com/kr/app/%EB%8C%80%EC%8B%A0%EC%A6%9D%EA%B6%8C-cybos-touch/id414850336"],
    [5, "https://apps.apple.com/kr/app/%EB%AF%B8%EB%9E%98%EC%97%90%EC%85%8B%EC%A6%9D%EA%B6%8C-m-stock/id1248716281"],
    [6, "https://apps.apple.com/kr/app/%EC%82%BC%EC%84%B1%EC%A6%9D%EA%B6%8C-mpop/id1150231646"],
    [7, "https://apps.apple.com/kr/app/%ED%95%9C%EA%B5%AD%ED%88%AC%EC%9E%90/id1621986905"],
    [8, "https://apps.apple.com/kr/app/%EC%8B%A0%ED%95%9C%EC%95%8C%ED%8C%8C-%EB%8C%80%ED%91%9Cmts/id1168512940"],
    [
      9,
      "https://apps.apple.com/kr/app/nh%ED%88%AC%EC%9E%90%EC%A6%9D%EA%B6%8C-qv-mts-%EA%B3%84%EC%A2%8C%EA%B0%9C%EC%84%A4-%EA%B2%B8%EC%9A%A9/id486318869",
    ],
    [
      10,
      "https://apps.apple.com/kr/app/sk%EC%A6%9D%EA%B6%8C-%EC%A3%BC%ED%8C%8C%EC%88%983-%EC%A3%BC%EC%8B%9D-%EC%84%A0%EB%AC%BC%EA%B1%B0%EB%9E%98-%EA%B3%84%EC%A2%8C%EA%B0%9C%EC%84%A4-%EB%B1%85%ED%82%B9-%EB%93%B1/id428201294",
    ],
    [
      11,
      "https://apps.apple.com/kr/app/%ED%95%9C%ED%99%94%ED%88%AC%EC%9E%90%EC%A6%9D%EA%B6%8C-smartm-%EA%B3%84%EC%A2%8C%EA%B0%9C%EC%84%A4-%EA%B2%B8%EC%9A%A9/id396397270",
    ],
    [
      12,
      "https://apps.apple.com/kr/app/%ED%95%98%EB%82%98%EC%A6%9D%EA%B6%8C-%EC%9B%90%ED%81%90%ED%94%84%EB%A1%9C-%EA%B3%84%EC%A2%8C%EA%B0%9C%EC%84%A4%ED%8F%AC%ED%95%A8/id1506702407",
    ],
    [
      13,
      "https://apps.apple.com/kr/app/%EC%9C%A0%EC%A7%84%ED%88%AC%EC%9E%90%EC%A6%9D%EA%B6%8C-%EA%B3%84%EC%A2%8C%EA%B0%9C%EC%84%A4-%ED%8F%AC%ED%95%A8/id1080300592",
    ],
    [
      14,
      "https://apps.apple.com/kr/app/ibk%ED%88%AC%EC%9E%90%EC%A6%9D%EA%B6%8C-mts-%EA%B3%84%EC%A2%8C%EA%B0%9C%EC%84%A4%EA%B0%80%EB%8A%A5/id1353258480",
    ],
    [15, "https://apps.apple.com/kr/app/%EA%B5%90%EB%B3%B4%EC%A6%9D%EA%B6%8C-win-k/id1282214166"],
    [
      16,
      "https://apps.apple.com/kr/app/%ED%95%98%EC%9D%B4%ED%88%AC%EC%9E%90%EC%A6%9D%EA%B6%8C-im%ED%95%98%EC%9D%B4/id1671683542",
    ],
    [
      17,
      "https://apps.apple.com/kr/app/%EB%8B%A4%EC%98%AC%ED%88%AC%EC%9E%90%EC%A6%9D%EA%B6%8C-fi-%EA%B3%84%EC%A2%8C%EA%B0%9C%EC%84%A4-%EA%B2%B8%EC%9A%A9/id1459456319",
    ],
    [18, "https://apps.apple.com/kr/app/%ED%98%84%EB%8C%80%EC%B0%A8%EC%A6%9D%EA%B6%8C-%EB%82%B4%EC%9D%BC/id6444633082"],
    [19, "https://apps.apple.com/kr/app/%EC%8B%A0%EC%98%81%EC%A6%9D%EA%B6%8C-%EA%B7%B8%EB%A6%B0/id1619250855"],
    [
      20,
      "https://apps.apple.com/kr/app/db%EA%B8%88%EC%9C%B5%ED%88%AC%EC%9E%90-mts-%EA%B3%84%EC%A2%8C%EA%B0%9C%EC%84%A4-%ED%8F%AC%ED%95%A8/id1603371564",
    ],
    [21, "https://apps.apple.com/kr/app/best-m-plus/id1166765542"],
    [
      22,
      "https://apps.apple.com/kr/app/orda-m-plus-%EA%B3%84%EC%A2%8C%EA%B0%9C%EC%84%A4%EA%B2%B8%EC%9A%A9/id1170365757",
    ],
    [23, "https://apps.apple.com/kr/app/%EC%83%81%EC%83%81%EC%9D%B8-mplus/id1163666437"],
  ]);

  const googleLink = new Map([
    [1, "https://play.google.com/store/apps/details?id=com.kbsec.mts.iplustarngm2&pcampaignid=web_share"],
    [2, "https://play.google.com/store/apps/details?id=com.kiwoom.app.kiwoomaccount&pcampaignid=web_share"],
    [3, "https://play.google.com/store/apps/details?id=com.yuanta.tradarm&pcampaignid=web_share"],
    [4, "https://play.google.com/store/apps/details?id=com.daishin&pcampaignid=web_share"],
    [5, "https://play.google.com/store/apps/details?id=com.miraeasset.trade&pcampaignid=web_share"],
    [6, "https://play.google.com/store/apps/details?id=com.samsungpop.android.mpop&pcampaignid=web_share"],
    [7, "https://play.google.com/store/apps/details?id=com.truefriend.neosmartarenewal&pcampaignid=web_share"],
    [8, "https://play.google.com/store/apps/details?id=com.shinhaninvest.nsmts&pcampaignid=web_share"],
    [9, "https://play.google.com/store/apps/details?id=com.wooriwm.mugsmart&pcampaignid=web_share"],
    [10, "https://play.google.com/store/apps/details?id=com.sks.android.neojoopasoo&pcampaignid=web_share"],
    [11, "https://play.google.com/store/apps/details?id=kr.co.koreastock.mts.android&pcampaignid=web_share"],
    [12, "https://play.google.com/store/apps/details?id=com.hanasec.stock&pcampaignid=web_share"],
    [13, "https://play.google.com/store/apps/details?id=com.eugenefn.smartchampion2&pcampaignid=web_share"],
    [14, "https://play.google.com/store/apps/details?id=com.ibk.farm&pcampaignid=web_share"],
    [15, "https://play.google.com/store/apps/details?id=kr.com.wink&pcampaignid=web_share"],
    [16, "https://play.google.com/store/apps/details?id=com.hiib.android.imhim&pcampaignid=web_share"],
    [17, "https://play.google.com/store/apps/details?id=com.ktb.android.mobiletrading&pcampaignid=web_share"],
    [18, "https://play.google.com/store/apps/details?id=com.hmsec.mts&pcampaignid=web_share"],
    [19, "https://play.google.com/store/apps/details?id=com.shinyoung.mts&pcampaignid=web_share"],
    [20, "https://play.google.com/store/apps/details?id=com.dbfi.xts&pcampaignid=web_share"],
    [21, "https://play.google.com/store/apps/details?id=com.bookook.mtsplus&pcampaignid=web_share"],
    [22, "https://play.google.com/store/apps/details?id=com.ligstock.mtsplus&pcampaignid=web_share"],
    [23, "https://play.google.com/store/apps/details?id=com.bridgefn.mtsplus&pcampaignid=web_share"],
  ]);

  if (window.navigator.userAgent.match(/Windows|Android/i)) {
    return googleLink.get(agentId) ?? "";
  }
  return iosLink.get(agentId) ?? "";
};

export default getStoreUrl;
