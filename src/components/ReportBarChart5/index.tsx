import Chart from "@/components/Base/Chart";
import { ChartData, ChartOptions } from "chart.js/auto";
import { getColor } from "@/utils/colors";
import { selectColorScheme } from "@/stores/colorSchemeSlice";
import { selectDarkMode } from "@/stores/darkModeSlice";
import { useAppSelector } from "@/stores/hooks";
import { useMemo } from "react";
import _ from "lodash";

interface MainProps extends React.ComponentPropsWithoutRef<"canvas"> {
  width?: number | "auto";
  height?: number | "auto";
}

function Main({ width = "auto", height = "auto", className = "" }: MainProps) {
  const props = {
    width: width,
    height: height,
    className: className,
  };
  const colorScheme = useAppSelector(selectColorScheme);
  const darkMode = useAppSelector(selectDarkMode);

  const data: ChartData = useMemo(() => {
    const configData = {
      labels: Array.from({ length: 15 }, (_, index) => index + 15),
      datasets: [
        {
          categoryPercentage: 0.4,
          barPercentage: 0.8,
          borderRadius: 2,
          data: Array.from({ length: 15 }, (index) => _.random(1, 1000)),
          borderWidth: 1,
          borderColor: colorScheme ? getColor("primary", 0.7) : "",
          backgroundColor: colorScheme ? getColor("primary", 0.35) : "",
        },
        {
          categoryPercentage: 0.4,
          barPercentage: 0.8,
          borderRadius: 2,
          data: Array.from({ length: 15 }, (index) => _.random(1, 1000)),
          borderWidth: 1,
          borderColor: colorScheme ? getColor("success", 0.7) : "",
          backgroundColor: colorScheme ? getColor("success", 0.35) : "",
        },
      ],
    };

    return darkMode ? configData : configData;
  }, [colorScheme, darkMode]);

  const options: ChartOptions = useMemo(() => {
    return {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          ticks: {
            color: getColor("slate.500", 0.7),
          },
          grid: {
            display: false,
          },
          border: {
            display: false,
          },
        },
        y: {
          ticks: {
            autoSkipPadding: 15,
            color: getColor("slate.500", 0.9),
            beginAtZero: true,
          },
          grid: {
            color: darkMode
              ? getColor("slate.400", 0.1)
              : getColor("slate.200", 0.7),
          },
          border: {
            display: false,
          },
        },
      },
    };
  }, [colorScheme, darkMode]);

  return (
    <Chart
      type="bar"
      width={props.width}
      height={props.height}
      data={data}
      options={options}
      className={props.className}
    />
  );
}

export default Main;
