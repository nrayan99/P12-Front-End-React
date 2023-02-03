import "./App.css";
import Activity from "./components/Activity/Activity";
import KeyData from "./components/KeyData/KeyData";
import RadarCharts from "./components/RadarChart/RadarChart";
import proteinIcon from "./assets/icons/KeyDatas/protein.svg";
import caloriesIcon from "./assets/icons/KeyDatas/calories.svg";
import carbsIcon from "./assets/icons/KeyDatas/carbs.svg";
import fatIcon from "./assets/icons/KeyDatas/fat.svg";
import RadialChart from "./components/RadialChart/RadialChart";
import style from "./App.module.scss";
import { useEffect, useState, useMemo } from "react";
import { getUserById } from "./api/User";
import { user } from "./types/user.type";
import LinearChart from "./components/LinearChart/LinearChart";
function App() {
  const queryParameters = new URLSearchParams(window.location.search);
  const id = Number(queryParameters.get("id"));
  const [user, setUser] = useState<user>();
  useEffect(() => {
    async function call() {
      const user = await getUserById(id);
      setUser(user);
    }
    call();
  }, [id]);
  const userFullName = useMemo(() => {
    return `${user?.userInfos.firstName} ${user?.userInfos.lastName}`;
  }, [user]);
  const keyDatas = useMemo(
    () => [
      {
        icon: caloriesIcon,
        value: `${user?.keyData.calorieCount}kcal`,
        type: "Calories",
        backgroundColor: "rgba(255, 0, 0, 0.1)",
      },
      {
        icon: proteinIcon,
        value: `${user?.keyData.proteinCount}g`,
        type: "Proteines",
        backgroundColor: "rgba(74, 184, 255, 0.1)",
      },
      {
        icon: carbsIcon,
        value: `${user?.keyData.carbohydrateCount}g`,
        type: "Glucides",
        backgroundColor: "rgba(249, 206, 35, 0.1)",
      },
      {
        icon: fatIcon,
        value: `${user?.keyData.lipidCount}g`,
        type: "Lipides",
        backgroundColor: "rgba(253, 81, 129, 0.1)",
      },
    ],
    [user]
  );
  const activities = [
    {
      day: "2020-07-01",
      kilogram: 70,
      calories: 240,
    },
    {
      day: "2020-07-02",
      kilogram: 69,
      calories: 220,
    },
    {
      day: "2020-07-03",
      kilogram: 70,
      calories: 280,
    },
    {
      day: "2020-07-04",
      kilogram: 70,
      calories: 500,
    },
    {
      day: "2020-07-05",
      kilogram: 69,
      calories: 160,
    },
    {
      day: "2020-07-06",
      kilogram: 69,
      calories: 162,
    },
    {
      day: "2020-07-07",
      kilogram: 69,
      calories: 390,
    },
    {
      day: "2020-07-05",
      kilogram: 69,
      calories: 160,
    },
    {
      day: "2020-07-06",
      kilogram: 69,
      calories: 162,
    },
    {
      day: "2020-07-07",
      kilogram: 69,
      calories: 390,
    },
  ];

  return (
    <div className={style.App}>
      <h1>
        Bonjour <span>{userFullName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <div className={style.Grid1}>
        <div className={style.chartsContainer}>
          <Activity activities={activities} />
          <div className={style.Grid2}>
            <LinearChart id={id} />
            <RadarCharts id={id} />
            <RadialChart user={user} />
          </div>
        </div>
        <div className={style.keyDatasContainer}>
          {keyDatas.map((keyData) => (
            <KeyData
              icon={keyData.icon}
              value={keyData.value}
              type={keyData.type}
              backgroundColor={keyData.backgroundColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
