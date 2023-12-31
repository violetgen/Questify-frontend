import React from "react";

export type LeaderItemType = {
  //   avatarUrl: string;
  //   no: number;
  //   type: boolean;
  //   name: string;
  //   score: number;
  avatarUrl: string;
  wallet: string;
  totalScore: string;
  no: number;
};

const DJLeaderScoreItem = (props: LeaderItemType) => {
  const walletAddre = `${props.wallet.slice(0, 6)}...${props.wallet.slice(-3)}`;

  return (
    <div
      className={`${
        props.no % 2 == 0 ? "mt-[10px]" : "mt-[20px]"
      }  mx-1.5 rounded-md w-[103px] h-[104px] bg-[#313239]`}
    >
      <div className="rounded-full">
        <div className="flex justify-center mt-[-28px] mb-[6px]">
          <img
            src={`/images/betting/avatars/avatar${props.no}.png`}
            alt="avatar"
            width={56}
            height={56}
            className="rounded-full w-[56px] h-[56px]"
          />
        </div>
        <div className="text-[12px] text-[#FE7807] font-500 flex justify-center">
          {walletAddre}
        </div>
        <div className="text-[14px]  text-gray-200 font-700 flex justify-center">
          {props.totalScore}
        </div>

        <div className="flex justify-center">
          <div
            className={`mt-[5px] text-[#FE7807] text-[12px] rounded-[5px] px-8`}
          >
            {<span>#</span>}
            {props.no}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DJLeaderScoreItem;
