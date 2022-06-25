import ArrowDown from "@/public/arrow_down.svg";
import RankingsBg from "@/public/rankings_bg.svg";
import RedPacketIcon from "@/public/red_packet_icon.svg";
import TrophyGold from "@/public/trophy_gold.svg";
import classNames from "classnames";
import { useMemo, useState } from "react";
import { Collapse } from "react-collapse";
import styles from "./rankings.module.scss";

const RankList = ({ rankListData, type }) => {
  const [isOpened, setIsOpened] = useState(false);

  const fixedRankList = useMemo(() => {
    return rankListData.slice(0, 2);
  }, [rankListData]);

  const collapsibleRankList = useMemo(() => {
    return rankListData.slice(2);
  }, [rankListData]);

  const handleToggleIsOpened = () => {
    setIsOpened((isOpened) => !isOpened);
  };

  return (
    <div className={styles.box}>
      <RankingsBg className={styles.rankingsBg} />
      <div className={styles.title}>
        <span className={styles.amount}>
          <RedPacketIcon />
          <span>奖励</span>
          <em>3000.0</em>
        </span>
        <span className={styles.rankingName}>
          <Choose>
            <When condition={type === "level"}>等级排行榜</When>
            <When condition={type === "recharge"}>充值排行榜</When>
            <Otherwise>排行榜</Otherwise>
          </Choose>
        </span>
        <span className={styles.listStatus}>
          <TrophyGold />
          <span>恭喜中榜</span>
        </span>
      </div>

      <div className={styles.rankingHead}>
        <span>名次</span>
        <span>红包</span>
        <span>名额</span>
        <span>状态</span>
      </div>
      <For of={fixedRankList} each="rank" index="index">
        <div className={styles.rankingRow} key={index}>
          <span>{rank?.ad_title}</span>
          <span>{rank?.reward}</span>
          <span>{rank?.reward_num}</span>
          <span
            className={classNames({
              [styles.received]: rank?.rewarded,
            })}
          >
            {rank?.rewarded ? "已领取" : "未领取"}
          </span>
        </div>
      </For>
      <Collapse isOpened={isOpened}>
        <For of={collapsibleRankList} each="rank" index="index">
          <div className={styles.rankingRow} key={index}>
            <span>{rank?.ad_title}</span>
            <span>{rank?.reward}</span>
            <span>{rank?.reward_num}</span>
            <span
              className={classNames({
                [styles.received]: rank?.rewarded,
              })}
            >
              {rank?.rewarded ? "已领取" : "未领取"}
            </span>
          </div>
        </For>
      </Collapse>
      <If condition={collapsibleRankList?.length > 0}>
        <div onClick={handleToggleIsOpened} className={styles.foldBtn}>
          {isOpened ? (
            <ArrowDown className={styles.opened} />
          ) : (
            <ArrowDown className={styles.unopened} />
          )}
        </div>
      </If>
    </div>
  );
};

export default RankList;
