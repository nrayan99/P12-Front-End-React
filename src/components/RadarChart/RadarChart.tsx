import { useEffect, useState } from "react";
import style from "./RadarChart.module.scss";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Label,
} from "recharts";
import { getUserPerformanceById } from "../../api/User";
import formatPerformanceForRadar from "../../formatters/Performance";
import PropTypes from "prop-types";

type Props = {
  id: number;
};
type dataCharts = {
  subject: string;
  A: number;
  fullMark: number;
};
/**
 * @description Component RadarChart permit to display a radar chart with the user's performance data
 * @param {number} id
 * @returns {JSX.Element}
 */

function RadarCharts({ id }: Props) {
  const [dataUser, setDataUser] = useState<dataCharts[]>([]);

  useEffect(() => {
    async function call() {
      const data = await getUserPerformanceById(id);
      const dataUser = formatPerformanceForRadar(data);
      setDataUser(dataUser);
    }
    call();
  }, [id]);

  return (
    <div className={style.RadarCharts}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="60%"
          data={dataUser}
        >
          <PolarGrid
            gridType="polygon"
            radialLines={false}
            fill="white"
            fillOpacity={1}
          />
          <PolarAngleAxis
            dataKey="subject"
            tick={{
              fill: "#FFFFFF",
              fontFamily: "Roboto",
              fontSize: "min(12px,0.75vw)",
              fontWeight: "500",
            }}
            tickLine={false}
          />
          <Radar
            name="Mike"
            dataKey="A"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
          <Label position="outside" style={{ fill: "red" }} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

RadarCharts.propTypes = {
  id: PropTypes.number.isRequired,
};

export default RadarCharts;
