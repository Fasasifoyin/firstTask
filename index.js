import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", (req, res) => {
  const { slack_name, track } = req.query;
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date();
  const day = date.getDay();
  const utc_time = date.toISOString();

  const result = {
    slack_name: slack_name,
    current_day: dayNames[day],
    utc_time,
    track: track,
    github_file_url:
      "https://github.com/Fasasifoyin/firstTask/blob/main/index.js",
    github_repo_url: "https://github.com/Fasasifoyin/firstTask",
    status_code: 200,
  };

  res.status(200).json(result);
});

app.listen(8080, () => console.log("Running..."));
