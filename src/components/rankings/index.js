import styles from "./index.module.scss";
import RankList from "./rankList";

const Rankings = ({ rank }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.tips}>
        最先达到指定阶梯且最先领取者可获得奖励，名额领完即止。
      </div>
      <RankList rankListData={rank?.level} type="level" />
      <RankList rankListData={rank?.recharge} type="recharge" />
      <div className={styles.disclaimer}>
        免责声明：游戏由第三方提供并独立运营，氪金请理性。
      </div>
    </div>
  );
};

export default Rankings;