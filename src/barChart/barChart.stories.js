import { BarChart } from "./barChart";

export default {
  title: "Components/BarChart",
  argTypes: {
    colorVariant: {
      control: { type: "select" },
      options: ["primary", "secondary", "accent", "destructive", "muted"],
    },
  },
};

export const MonthlySales = {
  render: () =>
    BarChart({
      title: "Monthly Sales",
      subtitle: "Sales performance by month",
      data: [
        { label: "Jan", value: 180 },
        { label: "Feb", value: 305 },
        { label: "Mar", value: 237 },
        { label: "Apr", value: 280 },
        { label: "May", value: 210 },
        { label: "Jun", value: 215 },
      ],
      colorVariant: "primary",
    }),
};

export const QuarterlyRevenue = {
  render: () =>
    BarChart({
      title: "Quarterly Revenue",
      subtitle: "Revenue by quarter (in thousands)",
      data: [
        { label: "Q1", value: 450 },
        { label: "Q2", value: 680 },
        { label: "Q3", value: 520 },
        { label: "Q4", value: 890 },
      ],
      colorVariant: "accent",
    }),
};

export const WebsiteTraffic = {
  render: () =>
    BarChart({
      title: "Website Traffic",
      subtitle: "Daily visitors this week",
      data: [
        { label: "Mon", value: 1200 },
        { label: "Tue", value: 1450 },
        { label: "Wed", value: 1100 },
        { label: "Thu", value: 1680 },
        { label: "Fri", value: 1950 },
        { label: "Sat", value: 890 },
        { label: "Sun", value: 720 },
      ],
      colorVariant: "secondary",
    }),
};

export const ErrorRates = {
  render: () =>
    BarChart({
      title: "Error Rates",
      subtitle: "API errors per day",
      data: [
        { label: "Mon", value: 12 },
        { label: "Tue", value: 5 },
        { label: "Wed", value: 8 },
        { label: "Thu", value: 15 },
        { label: "Fri", value: 3 },
      ],
      colorVariant: "destructive",
    }),
};

export const CustomMaxValue = {
  render: () =>
    BarChart({
      title: "Custom Max Value",
      subtitle: "Chart with custom Y-axis maximum",
      data: [
        { label: "A", value: 25 },
        { label: "B", value: 40 },
        { label: "C", value: 35 },
        { label: "D", value: 50 },
      ],
      maxValue: 100,
      colorVariant: "muted",
    }),
};

export const Interactive = {
  render: (args) => BarChart(args),
  args: {
    title: "Interactive Chart",
    subtitle: "Customize this chart using controls",
    data: [
      { label: "A", value: 100 },
      { label: "B", value: 200 },
      { label: "C", value: 150 },
      { label: "D", value: 250 },
      { label: "E", value: 180 },
    ],
    colorVariant: "primary",
    yAxisSteps: 5,
  },
};
