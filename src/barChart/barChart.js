import template from "./barChart.hbs";
import "./barChart.scss";

export const BarChart = (args) => {
  const {
    data = [],
    title = "",
    subtitle = "",
    maxValue = null,
    yAxisSteps = 5,
    colorVariant = "primary",
  } = args;

  // Calculate max value if not provided
  const calculatedMaxValue =
    maxValue || Math.max(...data.map((item) => item.value), 0);

  // Round up to nearest nice number for y-axis
  const niceMaxValue = Math.ceil(calculatedMaxValue / 100) * 100;

  // Generate y-axis labels
  const yAxisLabels = [];
  const step = niceMaxValue / (yAxisSteps - 1);
  for (let i = 0; i < yAxisSteps; i++) {
    yAxisLabels.push(Math.round(step * i));
  }

  // Calculate percentages for bar heights
  const processedData = data.map((item) => ({
    label: item.label,
    value: item.value,
    percentage: (item.value / niceMaxValue) * 100,
  }));

  const templateData = {
    title,
    subtitle,
    yAxisLabels,
    data: processedData,
  };

  // Create a wrapper div with color variant class
  const wrapper = document.createElement("div");
  wrapper.className = `bar-chart--${colorVariant}`;
  wrapper.innerHTML = template(templateData);

  return wrapper;
};
