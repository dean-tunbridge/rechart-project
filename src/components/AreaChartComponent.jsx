import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

const goals = [
  { season: '2014/15', premier_league_goals: 975, la_liga_goals: 1009 },
  { season: '2015/16', premier_league_goals: 1026, la_liga_goals: 1043 },
  { season: '2016/17', premier_league_goals: 1064, la_liga_goals: 1118 },
  { season: '2017/18', premier_league_goals: 1018, la_liga_goals: 1024 },
  { season: '2018/19', premier_league_goals: 1072, la_liga_goals: 983 },
  { season: '2019/20', premier_league_goals: 1034, la_liga_goals: 942 },
  { season: '2020/21', premier_league_goals: 1024, la_liga_goals: 953 },
  { season: '2021/22', premier_league_goals: 1071, la_liga_goals: 951 },
  { season: '2022/23', premier_league_goals: 1084, la_liga_goals: 955 },
  { season: '2023/24', premier_league_goals: 1246, la_liga_goals: 1003 },
]

const AreaChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart width={500} height={400} data={goals}>
        <YAxis />
        <XAxis dataKey="season" />
        <CartesianGrid strokeDasharray="5 5" />

        <Tooltip />
        <Legend />

        <Area
          type="monotone"
          dataKey="premier_league_goals"
          stroke="#FF268C"
          fill="#37003C"
          stackId="1"
        />
        <Area
          type="monotone"
          dataKey="la_liga_goals"
          stroke="#FFD500"
          fill="#D50032"
          stackId="1"
        />
        <Area />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default AreaChartComponent
