import RecruitCard from "@components/cards/recruit-card";

import stl from "./RecruitProcess.module.scss";

const RecruitProcess = () => {
  return (
    <div className={stl.recruitProcessCont}>
      <h1 className={stl.heading}>Recruitment Process</h1>
      <div className={stl.process}>
        <div className={stl.right}>
          <div className={stl.item}>
            <RecruitCard right="51%" />
            <span className={stl.dot}>01</span>
          </div>
          <div className={stl.item}>
            <RecruitCard
              right="51%"
              background="radial-gradient(#f588d8, #c0a3e5)"
            />
            <div className={stl.dot}>03</div>
          </div>
          <div className={stl.item}>
            <RecruitCard
              right="51%"
              background="radial-gradient(#76b2fe, #b69efe)"
            />
            <div className={stl.dot}>05</div>
          </div>
        </div>

        <div className={stl.lineVertical}></div>
        <div className={stl.left}>
          <div className={stl.item}>
            <RecruitCard
              left="51%"
              initial={{ x: 200, rotate: -25 }}
              background="radial-gradient(#fbc1cc, #fa99b2)"
            />
            <div className={stl.dot}>02</div>
          </div>
          <div className={stl.item}>
            <RecruitCard
              left="51%"
              initial={{ x: 200, rotate: -25 }}
              background="radial-gradient(#60efbc, #58d5c9)"
            />
            <div className={stl.dot}>04</div>
          </div>
        </div>
        <div className={stl.lineHorizontal}></div>
      </div>
    </div>
  );
};

export default RecruitProcess;
