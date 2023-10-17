const bankMap = new Map([
  ["KB증권", ["신한 쏠", "카카오뱅크", "국민은행"]],
  ["유안타증권", ["우리은행"]],
  ["대신증권", ["신한 쏠", "우리은행"]],
  ["미래에셋증권", ["신한 쏠", "카카오뱅크", "토스"]],
  ["한국투자증권", ["신한 쏠", "카카오뱅크", "토스"]],
  ["신한투자증권", ["신한 쏠", "카카오뱅크"]],
  ["NH투자증권", ["카카오뱅크", "토스"]],
  ["SK증권", ["토스"]],
  ["하나증권", ["신한 쏠", "카카오뱅크"]],
  ["IBK투자증권", ["IBK기업은행"]],
  ["교보증권", ["신한 쏠"]],
  ["다올투자증권", ["신한 쏠"]],
  ["현대차증권", ["신한 쏠"]],
  ["DB금융투자증권", ["IBK기업은행"]],
]);

export const getRelatedBankList = (name: string) => {
  return bankMap.get(name) ?? [];
};

export const getRelatedBankListCnt = () => {
  return bankMap.size;
};

export const getRelatedBankMap = () => {
  return bankMap;
};
