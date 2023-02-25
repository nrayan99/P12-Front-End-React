import style from "./RadarChart.module.scss";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Label,
} from "recharts";
import PropTypes from "prop-types";
import { formattedPerformance } from "../../types/user.type";

type Props = {
  userPerformance: formattedPerformance[];
};
/**
 * @description Component RadarChart permit to display a radar chart with the user's performance data
 * @param {formattedPerformance} userPerformance - The user's performance data
 * @returns {JSX.Element}
 */

function RadarCharts({ userPerformance }: Props) {


  return (
    <div className={style.RadarCharts}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="60%"
          data={userPerformance}
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
  userPerformance: PropTypes.arrayOf(
    PropTypes.shape({
      subject: PropTypes.string.isRequired,
      A: PropTypes.number.isRequired,
      fullMark: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default RadarCharts;
