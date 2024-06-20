import cls from "./Achievements.module.sass";

interface AchievementsProps {
  className?: string;
}

export const Achievements = ({ className }: AchievementsProps) => {
  return (
    <>
      <div className={cls.achievements_beforeCenter_bgc}></div>
      <div className={cls.achievements_afterCenter_bgc}></div>
      <div className={cls.achievements}>
        <div className={cls.achievements_title}>мы снимали для</div>
        <div className={cls.achievements_description}>
          Видеосъемку своих проектов нам доверили компании с мировым именем,
          известные отечественные бренды и крупнейшие государственные
          корпорации. И все они остались довольны результатом.
        </div>
        <div className={cls.achievements_body}></div>
      </div>
    </>
  );
};
