# The Changing Map of Malaysia’s Forest Reserves

This is a FIT2179 Data Visualisation 2 web visualisation project built with HTML, CSS, Pure.css, JavaScript, Vega-Lite, and Vega-Embed.

## How to run locally

Open `index.html` through a local server. For example, in VS Code use Live Server, or run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/`.

## Folder structure

- `index.html` — single-page visualisation webpage
- `css/style.css` — layout, typography, and visual styling
- `js/main.js` — embeds the Vega-Lite JSON specifications
- `vega/` — 10 readable Vega-Lite JSON files
- `data/` — original and derived CSV files

## Notes

The flood dataset uses state codes rather than state names, so the rainfall/flood chart is presented as environmental context rather than a direct state-name comparison.

Remember to add original dataset source URLs, authorship, date, and AI acknowledgement before final submission.


## Data cleaning note

The national forest reserve values for 2010 and 2011 are unavailable in the source CSV. These missing values are removed from `data/forest_reserve.csv` and filtered in `vega/01_national_forest_trend.json` so that missing data is not visualised as zero.
