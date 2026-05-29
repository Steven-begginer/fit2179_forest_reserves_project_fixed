const charts = [
  ["#chart1", "vega/01_national_forest_trend.json"],
  ["#chart2", "vega/02_state_forest_2021_bar.json"],
  ["#chart5", "vega/13_flood_rate_heatmap.json"],
  ["#chart6", "vega/06_town_point_map.json"],
  ["#chart7", "vega/07_population_by_state.json"],
  ["#chart8", "vega/15_deforestation_reserve_relationship.json"],
  ["#chart9", "vega/09_forest_per_person.json"],
  ["#chart11", "vega/14_flood_forest_bubble_timeline.json"],
  ["#chart13", "vega/16_state_forest_stacked_area.json"],
  ["#chart15", "vega/18_district_flood_vs_forest_reserve.json"]
];

const specVersion = "pahang-treecover-flood-labels2";

charts.forEach(([selector, spec]) => {
  const container = document.querySelector(selector);

  if (!container) {
    return;
  }

  vegaEmbed(selector, `${spec}?v=${specVersion}`, { actions: false, renderer: "svg" })
    .catch(error => {
      console.error(`Could not load ${spec}`, error);
      container.innerHTML = `<p class="error">Could not load ${spec}. Check the file path.</p>`;
    });
});
