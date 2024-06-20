import cls from "./Team.module.sass";
import person1 from "./../../assets/Team/team1.jpg"
interface TeamProps {
  className?: string;
}

export const Team = ({ className }: TeamProps) => {
  return (
    <>
      <div className={cls.team_beforeCenter_bgc}></div>
      <div className={cls.team_afterCenter_bgc}></div>
      <div className={cls.team}>
        <div className={cls.team_title}>комнада</div>
        <div className={cls.team_body}>
            <div className={cls.team_person}>
                <img src={person1} className={cls.team_image}></img>
                <div className={cls.team_titlePerson}>{"[проекты]"}</div>
                <div className={cls.team_titlePerson}>{"МИХАИЛ РУССУ"}</div>
            </div>
            <div className={cls.team_person}>
                <img src={person1} className={cls.team_image}></img>
            </div>
            <div className={cls.team_person}>
                <img src={person1} className={cls.team_image}></img>
            </div>
            <div className={cls.team_person}>
                <img src={person1} className={cls.team_image}></img>
            </div>

        </div>
      </div>
    </>
  );
};
