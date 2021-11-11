import './featureInfo.scss';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const FeatureInfo = () => {
  return (
    <div className="feature">
      <div className="featureItem">
        <span className="featureTitle">Revenue</span>
        <div className="moneyContainer">
          <span className="moneyfeature">$2000</span>
          <span className="moneyRate">
            -11.40
            <ArrowDownwardIcon className="featureIcon negative" />
          </span>
        </div>
        <span className="subFeature">Compare to last month</span>
      </div>
      <div className="featureItem">
        <span className="featureTitle">sale</span>
        <div className="moneyContainer">
          <span className="moneyfeature">$1250</span>
          <span className="moneyRate">
            15.44
            <ArrowUpwardIcon className="featureIcon" />
          </span>
        </div>
        <span className="subFeature">Compare to last month</span>
      </div>
      <div className="featureItem">
        <span className="featureTitle">Cost</span>
        <div className="moneyContainer">
          <span className="moneyfeature">$3150</span>
          <span className="moneyRate">
            12.44
            <ArrowUpwardIcon className="featureIcon" />
          </span>
        </div>
        <span className="subFeature">Compare to last month</span>
      </div>
    </div>
  );
};

export default FeatureInfo;
