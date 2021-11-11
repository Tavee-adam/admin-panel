import Chart from '../../components/chart/Chart';
import FeatureInfo from '../../components/featureinfo/FeatureInfo';
import './home.scss';
import { userData } from '../../components/chart/userData';
import WidgetLg from '../../components/widgets/widgetLg/WidgetLg';
import WidgetSm from '../../components/widgets/widgetsm/WidgetSm';
const Home = () => {
  return (
    <div className="Home">
      <FeatureInfo />
      <Chart data={userData} title="User Analytics" dataKey="Active User" />
      <div className="homeWidget">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
