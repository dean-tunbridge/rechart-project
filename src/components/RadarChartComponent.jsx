import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

import CustomToolTip from './CustomToolTip'
import CustomLegend from './CustomLegend'

const goals = [
  {
    season: '2014/15',
    premier_league_goals: 975,
    la_liga_goals: 1009,
    bundesliga_goals: 892,
    serie_a_goals: 938,
    ligue_1_goals: 842,
  },
  {
    season: '2015/16',
    premier_league_goals: 1026,
    la_liga_goals: 1043,
    bundesliga_goals: 912,
    serie_a_goals: 955,
    ligue_1_goals: 860,
  },
  {
    season: '2016/17',
    premier_league_goals: 1064,
    la_liga_goals: 1118,
    bundesliga_goals: 924,
    serie_a_goals: 978,
    ligue_1_goals: 875,
  },
  {
    season: '2017/18',
    premier_league_goals: 1018,
    la_liga_goals: 1024,
    bundesliga_goals: 901,
    serie_a_goals: 940,
    ligue_1_goals: 850,
  },
  {
    season: '2018/19',
    premier_league_goals: 1072,
    la_liga_goals: 983,
    bundesliga_goals: 910,
    serie_a_goals: 960,
    ligue_1_goals: 880,
  },
  {
    season: '2019/20',
    premier_league_goals: 1034,
    la_liga_goals: 942,
    bundesliga_goals: 895,
    serie_a_goals: 945,
    ligue_1_goals: 865,
  },
  {
    season: '2020/21',
    premier_league_goals: 1024,
    la_liga_goals: 953,
    bundesliga_goals: 890,
    serie_a_goals: 950,
    ligue_1_goals: 870,
  },
  {
    season: '2021/22',
    premier_league_goals: 1071,
    la_liga_goals: 951,
    bundesliga_goals: 905,
    serie_a_goals: 965,
    ligue_1_goals: 880,
  },
  {
    season: '2022/23',
    premier_league_goals: 1084,
    la_liga_goals: 955,
    bundesliga_goals: 910,
    serie_a_goals: 970,
    ligue_1_goals: 885,
  },
  {
    season: '2023/24',
    premier_league_goals: 1246,
    la_liga_goals: 1003,
    bundesliga_goals: 920,
    serie_a_goals: 980,
    ligue_1_goals: 890,
  },
]

const RadarChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={goals}>
        <Tooltip content={<CustomToolTip />} />
        <Legend content={<CustomLegend />} />
        <PolarGrid />
        <PolarAngleAxis dataKey="season" />
        <PolarRadiusAxis />
        <Radar
          dataKey="premier_league_goals"
          stroke="#FF268C"
          fill="#FF268C33"
          name="Premier League"
        />
        <Radar
          dataKey="la_liga_goals"
          stroke="#FFD500"
          fill="#FFD50033"
          name="La Liga"
        />
        <Radar
          dataKey="bundesliga_goals"
          stroke="#E2001A"
          fill="#E2001A33"
          name="Bundesliga"
        />
        <Radar
          dataKey="serie_a_goals"
          stroke="#0066B2"
          fill="#0066B233"
          name="Serie A"
        />
        <Radar
          dataKey="ligue_1_goals"
          stroke="#003399"
          fill="#00339933"
          name="Ligue 1"
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}

export default RadarChartComponent
