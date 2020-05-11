import * as React from 'react';
import { Box, FormField, Button } from 'grommet';
import { Loan, repay } from '../../../services/tinlake/actions';
import { displayToBase } from 'tinlake';
import { transactionSubmitted, responseReceived } from '../../../ducks/transactions';
import { loadLoan } from '../../../ducks/loans';
import { connect } from 'react-redux';
import { authTinlake } from '../../../services/tinlake';
import { Erc20Widget } from '../../../components/Investment/TrancheMetric/erc20';
import DAI from "../../../static/dai.json";

interface Props {
  loan: Loan;
  tinlake: any;
  loadLoan?: (tinlake: any, loanId: string, refresh?: boolean) => Promise<void>;
  transactionSubmitted?: (loadingMessage: string) => Promise<void>;
  responseReceived?: (successMessage: string | null, errorMessage: string | null) => Promise<void>;
}

interface State {
  repayAmount: string;
}

class LoanRepay extends React.Component<Props, State> {

  componentWillMount() {
    const { loan } = this.props;
    this.setState({ repayAmount: (loan.debt || '0') });
  }

  repay = async () => {
    try {
      await authTinlake();
      const { repayAmount } = this.state;
      const { transactionSubmitted, responseReceived, loadLoan, loan, tinlake } = this.props;
      // support partial repay later
      transactionSubmitted && transactionSubmitted("Repayment initiated. Please confirm the pending transactions in MetaMask. Processing may take a few seconds.");
      const res = await repay(tinlake, loan);
      if (res && res.errorMsg) {
        responseReceived && responseReceived(null, `Repayment failed. ${res.errorMsg}`);
        return;
      }
      responseReceived && responseReceived(`Repayment successful. Please check your wallet.`, null);
      loadLoan && loadLoan(tinlake, loan.loanId);
    } catch (e) {
      responseReceived && responseReceived(null, `Repayment failed. ${e}`);
      console.log(e);
    }
  }

  render() {
    const { repayAmount } = this.state;
    const { loan } = this.props;
    const hasDebt = loan.debt.toString() !== '0';

    return <Box basis={'1/4'} gap="medium" margin={{ right: "large" }}>
      <Box gap="medium">
        <FormField label="Repay amount">
        <Erc20Widget limit={repayAmount.toString()} tokenData={DAI} precision={18} onValueChanged={(value) =>
                this.setState({ repayAmount: displayToBase(value, 18) })} />  
        </FormField>
      </Box>
      <Box align="start">
        <Button onClick={this.repay} primary label="Repay" disabled={!hasDebt} />
      </Box>
    </Box>;
  }
}

export default connect(state => state, { loadLoan, transactionSubmitted, responseReceived })(LoanRepay);