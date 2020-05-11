import * as React from 'react';
import { redeem, TrancheType } from '../../../services/tinlake/actions';
import { Investor, Tranche, redeem } from '../../../services/tinlake/actions';
import { transactionSubmitted, responseReceived } from '../../../ducks/transactions';
import { baseToDisplay, displayToBase, Investor, Tranche } from 'tinlake';
import { loadInvestor } from '../../../ducks/investments';
import { loadAnalyticsData } from '../../../ducks/analytics';
import { connect } from 'react-redux';
import { authTinlake } from '../../../services/tinlake';
import BN from 'bn.js';
import { Erc20Widget } from '../../../components/Investment/TrancheMetric/erc20';
import DROP from "../../../static/drop.json";
import { Box, Button, Text } from 'grommet';
interface Props {
  investor: Investor;
  tinlake: any;
  loadInvestor?: (tinlake: any, address: string, refresh?: boolean) => Promise<void>;
  loadAnalyticsData?: (tinlake: any) => Promise<void>;
  transactionSubmitted?: (loadingMessage: string) => Promise<void>;
  responseReceived?: (successMessage: string | null, errorMessage: string | null) => Promise<void>;
  tranche: Tranche;
}

interface State {
  redeemAmount: string;
}

class InvestorRedeem extends React.Component<Props, State> {

  componentDidMount() {
    this.setState({ redeemAmount: '0' });
  }

  redeem = async () => {
    const { tranche, transactionSubmitted, responseReceived, loadInvestor, loadAnalyticsData, investor, tinlake } = this.props;
    const { redeemAmount } = this.state;
    transactionSubmitted && transactionSubmitted('Redeem initiated. Please confirm the pending transactions in MetaMask. Processing may take a few seconds.');
    try {
      await authTinlake();
      const res = await redeem(tinlake, redeemAmount, tranche.type as any as TrancheType);
      if (res && res.errorMsg) {
        responseReceived && responseReceived(null, `Redeem failed. ${res.errorMsg}`);
        return;
      }
      responseReceived && responseReceived('Redeem successful. Please check your wallet.', null);
      loadInvestor && loadInvestor(tinlake, investor.address);
      loadAnalyticsData && loadAnalyticsData(tinlake);
    } catch (e) {
      responseReceived && responseReceived(null, `Redeem failed. ${e}`);
      console.log(e);
    }
  }

  render() {
    const { investor, tranche } = this.props;
    const { redeemAmount } = this.state;
    const trancheValues = investor[tranche.type as any as TrancheType];
    const maxRedeemAmount = trancheValues.maxRedeem || '0';
    const tokenBalance = trancheValues.tokenBalance || '0';
    const redeemLimitSet = maxRedeemAmount.toString() !== '0';
    const limitOverflow = (new BN(redeemAmount).cmp(new BN(maxRedeemAmount)) > 0);
    const availableTokensOverflow = (new BN(redeemAmount).cmp(new BN(tokenBalance)) > 0);
    const redeemEnabled = redeemLimitSet && !limitOverflow && !availableTokensOverflow;

    return <Box basis={'1/4'} gap="medium" margin={{ right: 'large' }}>
      <Box gap="medium">
        <Erc20Widget fieldLabel="Redeem token" limit={redeemAmount.toString()} tokenData={DROP} precision={18} onValueChanged={(value) =>
                this.setState({ redeemAmount: displayToBase(value, 18) })}
                errorMessage="Max redeem amount exceeded" />  
      </Box>
      <Box align="start">
        <Button onClick={this.redeem} primary label="Redeem" disabled = {!redeemEnabled}/>

        {availableTokensOverflow  &&
          <Box margin={{ top: 'small' }}>
            Available token amount exceeded.   <br />
            Amount has to be lower then <br />
            <Text weight="bold">
              {`${baseToDisplay(tokenBalance, 18)}`}
            </Text>
          </Box>
        }

      </Box>
    </Box>;
  }
}

export default connect(state => state, { loadInvestor, loadAnalyticsData, transactionSubmitted, responseReceived })(InvestorRedeem);
