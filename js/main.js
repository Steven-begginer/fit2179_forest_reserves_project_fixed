const charts = [
  ["#chart1", "vega/01_national_forest_trend.json"],
  ["#chart2", "vega/02_state_forest_2021_bar.json"],
  ["#chart3", "vega/03_state_forest_change_bar.json"],
  ["#chart4", "vega/04_state_slope_chart.json"],
  ["#chart5", "vega/05_forest_heatmap.json"],
  ["#chart6", "vega/06_town_point_map.json"],
  ["#chart7", "vega/07_population_by_state.json"],
  ["#chart8", "vega/08_forest_vs_population_scatter.json"],
  ["#chart9", "vega/09_forest_per_person.json"],
  ["#chart10", "vega/10_rainfall_flood_context.json"]
];

charts.forEach(([selector, spec]) => {
  vegaEmbed(selector, spec, { actions: false, renderer: "svg" })
    .catch(error => {
      console.error(`Could not load ${spec}`, error);
      document.querySelector(selector).innerHTML = `<p class="error">Could not load ${spec}. Check the file path.</p>`;
    });
});
