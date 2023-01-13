import style from "./Activity.module.scss";

import PropTypes from "prop-types"; // ES6
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className={style.customTooltip}>
        <p className="label">{`${payload[0].value}kg`}</p>
        <p className="label">{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }

  return null;
};

function Activity({ activities }: { activities: any }) {
  console.log(activities);
  return (
    <div className={style.Activity}>
      <div className={style.header}>
        <h2>Activité quotidienne</h2>
        <ul className={style.customizedLegend}>
          <li>Poids (kg)</li>
          <li>Calories brûlées (kCal)</li>
        </ul>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart
          width={700}
          height={300}
          data={activities.map((activity: any, index: number) => {
            return { ...activity, day: index + 1 };
          })}
          margin={{
            top: 60,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid
            strokeDasharray="2 2"
            horizontal={true}
            vertical={false}
          />
          <XAxis dataKey="day" tickLine={false} />
          <YAxis
            yAxisId="left"
            orientation="left"
            stroke="#8884d8"
            width={43}
            tickLine={false}
            axisLine={false}
            dataKey="calories"
            hide
            tickCount={3}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#9B9EAC"
            tickCount={3}
            domain={["dataMin -1", "dataMax"]}
            axisLine={false}
            tickLine={false}
            dataKey="kilogram"
          />
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{ outline: "none" }}
          />
          <Bar
            yAxisId="right"
            dataKey="kilogram"
            fill="#282D30"
            radius={[3, 3, 0, 0]}
            barSize={7}
          />
          <Bar
            yAxisId="left"
            dataKey="calories"
            fill="#E60000"
            barSize={7}
            radius={[3, 3, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

Activity.propTypes = {
  activities: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Activity;
